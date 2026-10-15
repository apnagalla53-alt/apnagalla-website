import { test } from 'node:test';
import assert from 'node:assert/strict';
import { accounts, addItem, balance, billLines, freshDemo, generateBill, money, parseMoney, paySupplier, receivePayment, recordDebt, restock, restoreDemo, summary } from '../src/lib/demo-store.ts';

test('line quantities and decimal prices total exactly in paise', () => {
 const s = freshDemo(); const item = addItem(s, 'Rice', parseMoney('120.50'), 10);
 const lines = billLines(s, { 1: 2, 2: 1, [item.id]: 3 });
 assert.equal(lines.reduce((sum, line) => sum + line.total, 0), 66150);
 assert.equal(money(66150), '₹661.50'); assert.equal(s.items[0].stock, 42);
});
test('cash bill updates stock and cash once; empty repeat is rejected', () => {
 const s = freshDemo(); generateBill(s, { 1: 2, 2: 1 }, '', 'CASH');
 assert.equal(s.items[0].stock, 40); assert.equal(s.items[1].stock, 3);
 assert.deepEqual(summary(s), { cash: 130000, upi: 0, sales: 30000, due: 0, suppliers: 0, bills: 1 });
 assert.throws(() => generateBill(s, {}, '', 'CASH')); assert.equal(s.entries.length, 1);
});
test('udhaar bill, partial cash collection and UPI settlement reconcile', () => {
 const s = freshDemo(); generateBill(s, { 1: 1, 2: 1 }, 'Ramesh', 'UDHAAR');
 assert.equal(balance(s, 'ramesh'), 18000); assert.equal(summary(s).cash, 100000);
 receivePayment(s, 'Ramesh', 8000, 'CASH'); receivePayment(s, 'ramesh', 10000, 'UPI');
 assert.equal(summary(s).cash, 108000); assert.equal(summary(s).upi, 10000); assert.equal(summary(s).due, 0);
 assert.equal(accounts(s).length, 1); assert.equal(s.items[0].stock, 41); assert.equal(summary(s).sales, 18000);
});
test('UPI bill never increases cash or customer debt', () => {
 const s = freshDemo(); generateBill(s, { 2: 4 }, '', 'UPI');
 assert.equal(s.items[1].stock, 0); assert.equal(summary(s).upi, 24000); assert.equal(summary(s).cash, 100000); assert.equal(summary(s).due, 0);
});
test('overselling and invalid quantities leave every record untouched', () => {
 const s = freshDemo(), before = JSON.stringify(s);
 for (const quantity of [5, 0, -1, 1.5, NaN]) assert.throws(() => generateBill(s, { 2: quantity }, 'Ramesh', 'UDHAAR'));
 assert.throws(() => generateBill(s, { 999: 1 }, '', 'CASH')); assert.equal(JSON.stringify(s), before);
});
test('udhaar requires a customer; overpayments never change balances', () => {
 const s = freshDemo(); assert.throws(() => generateBill(s, { 1: 1 }, '', 'UDHAAR'));
 generateBill(s, { 1: 1 }, 'Ramesh', 'UDHAAR'); const before = JSON.stringify(s);
 assert.throws(() => receivePayment(s, 'Ramesh', 12001, 'CASH')); assert.throws(() => receivePayment(s, 'Unknown', 100, 'UPI'));
 assert.throws(() => receivePayment(s, 'Ramesh', 100, 'UDHAAR')); assert.equal(JSON.stringify(s), before);
});
test('manual opening udhaar changes only the customer ledger', () => {
 const s = freshDemo(); recordDebt(s, 'Asha', 5050, 'Opening balance');
 assert.equal(summary(s).due, 5050); assert.equal(summary(s).cash, 100000); assert.equal(summary(s).sales, 0); assert.equal(s.items[0].stock, 42);
});
test('supplier credit restocks; payments reduce dues and cash separately', () => {
 const s = freshDemo(); restock(s, 2, 5, 4500, 'Wholesale', 'UDHAAR');
 assert.equal(s.items[1].stock, 9); assert.equal(summary(s).suppliers, 22500); assert.equal(summary(s).cash, 100000);
 paySupplier(s, 'Wholesale', 10000, 'CASH'); paySupplier(s, 'Wholesale', 12500, 'UPI');
 assert.equal(summary(s).suppliers, 0); assert.equal(summary(s).cash, 90000); assert.equal(summary(s).upi, -12500); assert.equal(summary(s).sales, 0);
});
test('cash purchases and supplier overpayments are checked before mutation', () => {
 const s = freshDemo(), before = JSON.stringify(s);
 assert.throws(() => restock(s, 1, 100, 12000, 'Wholesale', 'CASH'));
 assert.throws(() => restock(s, 1, 100001, 100, 'Wholesale', 'UDHAAR'));
 assert.throws(() => paySupplier(s, 'Unknown', 100, 'CASH')); assert.equal(JSON.stringify(s), before);
 restock(s, 1, 1, 1000, 'Wholesale', 'CASH'); assert.equal(summary(s).cash, 99000); assert.equal(s.items[0].stock, 43);
});
test('invalid money, duplicate names and storage corruption are rejected', () => {
 for (const value of ['0', '-1', '1.001', 'NaN', '1e3', 'Infinity', '1000001']) assert.throws(() => parseMoney(value));
 const s = freshDemo(); assert.throws(() => addItem(s, 'TEA PACKET', 100, 10));
 assert.deepEqual(restoreDemo('{broken'), freshDemo()); assert.deepEqual(restoreDemo('{"version":1}'), freshDemo());
});
test('session restoration preserves bills, stock and immutable receipt rates', () => {
 const s = freshDemo(); const bill = generateBill(s, { 1: 1 }, 'Ramesh', 'UDHAAR'); s.items[0].price = 12500;
 assert.equal(bill.lines[0].price, 12000); assert.deepEqual(restoreDemo(JSON.stringify(s)), s);
 s.entries[0].amount = 1; assert.deepEqual(restoreDemo(JSON.stringify(s)), freshDemo());
});
test('running customer and supplier ledgers reconcile independently for same name', () => {
 const s = freshDemo(); recordDebt(s, 'Same name', 10000, 'Older balance'); restock(s, 1, 2, 3000, 'Same name', 'UDHAAR');
 receivePayment(s, 'Same name', 4000, 'CASH'); paySupplier(s, 'Same name', 2000, 'CASH');
 assert.equal(balance(s, 'Same name'), 6000); assert.equal(balance(s, 'Same name', true), 4000); assert.equal(summary(s).cash, 102000);
});
