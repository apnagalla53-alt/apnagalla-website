/** Isolated browser demo. Money is integer paise; no production API calls. */
export type Method = 'CASH' | 'UPI' | 'UDHAAR';
export type Item = { id: number; name: string; price: number; stock: number };
export type Line = { itemId: number; name: string; price: number; quantity: number; total: number };
export type Entry = { id: number; date: string; kind: 'sale' | 'receipt' | 'debt' | 'purchase' | 'supplier-payment'; name: string; amount: number; method: Method; note: string; lines: Line[] };
export type DemoState = { version: 1; nextId: number; items: Item[]; entries: Entry[] };
export const money = (paise: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: paise % 100 ? 2 : 0, maximumFractionDigits: 2 }).format(paise / 100);
export function parseMoney(value: string): number {
  if (!/^\d{1,7}(\.\d{1,2})?$/.test(value.trim())) throw Error('Enter a valid amount with up to two decimal places.');
  const [whole, fraction = ''] = value.trim().split('.');
  const amount = Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
  if (amount <= 0 || amount > 100_000_000) throw Error('Use an amount between ₹0.01 and ₹10,00,000.');
  return amount;
}
function count(value: number, allowZero = false) {
  if (!Number.isSafeInteger(value) || value < (allowZero ? 0 : 1) || value > 100_000) throw Error('Use a whole quantity between ' + (allowZero ? '0' : '1') + ' and 1,00,000.');
  return value;
}
function name(value: string) {
  const result = value.trim().replace(/\s+/g, ' ');
  if (!result || result.length > 60) throw Error('Enter a name of 1–60 characters.');
  return result;
}
const key = (value: string) => value.trim().toLocaleLowerCase('en-IN');
function method(value: string): asserts value is Method {
  if (!['CASH', 'UPI', 'UDHAAR'].includes(value)) throw Error('Choose Cash, UPI or Udhaar.');
}
function capacity(state: DemoState) {
  if (state.entries.length >= 100) throw Error('This demo has reached 100 entries. Reset the sample shop to try again.');
}
export function freshDemo(): DemoState {
  return { version: 1, nextId: 3, items: [{ id: 1, name: 'Tea packet', price: 12000, stock: 42 }, { id: 2, name: 'Milk · 1 litre', price: 6000, stock: 4 }], entries: [] };
}
export function addItem(state: DemoState, itemName: string, price: number, stock: number) {
  const clean = name(itemName); count(stock, true);
  if (!Number.isSafeInteger(price) || price <= 0 || price > 100_000_000) throw Error('Enter a valid selling price.');
  if (state.items.some(item => key(item.name) === key(clean))) throw Error('That item already exists. Restock it from the Stock tab.');
  if (state.items.length >= 30) throw Error('Try up to 30 items in this sample shop.');
  const item = { id: state.nextId++, name: clean, price, stock }; state.items.push(item); return item;
}
export function billLines(state: DemoState, cart: Record<string, number>): Line[] {
  return Object.entries(cart).map(([id, quantity]) => {
    const item = state.items.find(item => item.id === Number(id));
    if (!item) throw Error('Choose an available item.');
    count(quantity);
    if (quantity > item.stock) throw Error(`${item.name}: only ${item.stock} in stock. Reduce the quantity or restock.`);
    return { itemId: item.id, name: item.name, price: item.price, quantity, total: item.price * quantity };
  });
}
export function balance(state: DemoState, customer: string, supplier = false) {
  return state.entries.filter(entry => key(entry.name) === key(customer)).reduce((sum, entry) => sum + (supplier
    ? entry.kind === 'purchase' && entry.method === 'UDHAAR' ? entry.amount : entry.kind === 'supplier-payment' ? -entry.amount : 0
    : (entry.kind === 'sale' && entry.method === 'UDHAAR') || entry.kind === 'debt' ? entry.amount : entry.kind === 'receipt' ? -entry.amount : 0), 0);
}
export function accounts(state: DemoState, supplier = false) {
  const names = new Map<string, string>();
  for (const entry of state.entries) {
    if (supplier ? ['purchase', 'supplier-payment'].includes(entry.kind) : entry.kind === 'debt' || entry.kind === 'receipt' || entry.kind === 'sale' && entry.method === 'UDHAAR') names.set(key(entry.name), entry.name);
  }
  return [...names.values()].map(customer => ({ name: customer, balance: balance(state, customer, supplier) }));
}
export function summary(state: DemoState) {
  let cash = 100000, upi = 0, sales = 0;
  for (const entry of state.entries) {
    if (entry.kind === 'sale') sales += entry.amount;
    const direction = ['purchase', 'supplier-payment'].includes(entry.kind) ? -1 : entry.kind === 'debt' ? 0 : 1;
    if (entry.method === 'CASH') cash += direction * entry.amount;
    if (entry.method === 'UPI') upi += direction * entry.amount;
  }
  return { cash, upi, sales, due: accounts(state).reduce((sum, account) => sum + account.balance, 0), suppliers: accounts(state, true).reduce((sum, account) => sum + account.balance, 0), bills: state.entries.filter(entry => entry.kind === 'sale').length };
}
function append(state: DemoState, data: Omit<Entry, 'id' | 'date'>) {
  const entry = { ...data, id: state.nextId++, date: new Date().toISOString() }; state.entries.push(entry); return entry;
}
export function generateBill(state: DemoState, cart: Record<string, number>, customer: string, payment: Method) {
  capacity(state); method(payment);
  const lines = billLines(state, cart); if (!lines.length) throw Error('Add at least one item to the bill.');
  const customerName = payment === 'UDHAAR' ? name(customer) : customer.trim() ? name(customer) : 'Walk-in customer';
  const amount = lines.reduce((sum, line) => sum + line.total, 0);
  const entry = append(state, { kind: 'sale', name: customerName, amount, method: payment, note: '', lines });
  for (const line of lines) state.items.find(item => item.id === line.itemId)!.stock -= line.quantity;
  return entry;
}
export function recordDebt(state: DemoState, customer: string, amount: number, note: string) {
  capacity(state); const clean = name(customer); validateAmount(amount);
  if (!note.trim() || note.length > 120) throw Error('Add a short note for this existing udhaar.');
  return append(state, { kind: 'debt', name: clean, amount, method: 'UDHAAR', note: note.trim(), lines: [] });
}
function validateAmount(amount: number) {
  if (!Number.isSafeInteger(amount) || amount <= 0 || amount > 100_000_000) throw Error('Enter a valid positive amount up to ₹10,00,000.');
}
export function receivePayment(state: DemoState, customer: string, amount: number, payment: Method) {
  capacity(state); method(payment); validateAmount(amount); const clean = name(customer);
  if (payment === 'UDHAAR') throw Error('Receive payment by Cash or UPI.');
  if (amount > balance(state, clean)) throw Error('Payment cannot be more than this customer’s outstanding udhaar.');
  return append(state, { kind: 'receipt', name: clean, amount, method: payment, note: 'Payment received', lines: [] });
}
export function restock(state: DemoState, itemId: number, quantity: number, cost: number, supplier: string, payment: Method) {
  capacity(state); count(quantity); validateAmount(cost); method(payment); const clean = name(supplier);
  const item = state.items.find(item => item.id === itemId); if (!item) throw Error('Choose an item to restock.');
  count(item.stock + quantity, true); const amount = quantity * cost;
  if (payment === 'CASH' && amount > summary(state).cash) throw Error('Not enough demo cash. Choose supplier credit or UPI.');
  append(state, { kind: 'purchase', name: clean, amount, method: payment, note: item.name, lines: [{ itemId, name: item.name, quantity, price: cost, total: amount }] });
  item.stock += quantity;
}
export function paySupplier(state: DemoState, supplier: string, amount: number, payment: Method) {
  capacity(state); method(payment); validateAmount(amount); const clean = name(supplier);
  if (payment === 'UDHAAR') throw Error('Pay your supplier by Cash or UPI.');
  if (amount > balance(state, clean, true)) throw Error('Payment cannot exceed the supplier balance.');
  if (payment === 'CASH' && amount > summary(state).cash) throw Error('Not enough demo cash for this payment.');
  return append(state, { kind: 'supplier-payment', name: clean, amount, method: payment, note: 'Supplier paid', lines: [] });
}
/** Reject malformed session data rather than trusting arbitrary stored calculations. */
export function restoreDemo(value: string | null): DemoState {
  if (!value) return freshDemo();
  try {
    const state = JSON.parse(value) as DemoState;
    if (state.version !== 1 || !Number.isSafeInteger(state.nextId) || state.nextId < 3 || !Array.isArray(state.items) || !Array.isArray(state.entries) || state.items.length > 30 || state.entries.length > 100) throw Error();
    const ids = new Set<number>();
    for (const item of state.items) { name(item.name); count(item.stock, true); validateAmount(item.price); if (!Number.isSafeInteger(item.id) || item.id < 1 || item.id >= state.nextId || ids.has(item.id)) throw Error(); ids.add(item.id); }
    for (const entry of state.entries) {
      name(entry.name); method(entry.method);
      if (!['sale', 'debt', 'receipt', 'purchase', 'supplier-payment'].includes(entry.kind) || !Number.isSafeInteger(entry.amount) || entry.amount <= 0 || !Number.isFinite(Date.parse(entry.date)) || typeof entry.note !== 'string' || entry.note.length > 120 || !Number.isSafeInteger(entry.id) || entry.id < 1 || entry.id >= state.nextId || ids.has(entry.id) || !Array.isArray(entry.lines)) throw Error();
      ids.add(entry.id);
      for (const line of entry.lines) { name(line.name); count(line.quantity); validateAmount(line.price); if (!state.items.some(item => item.id === line.itemId) || line.total !== line.price * line.quantity) throw Error(); }
      if (['sale', 'purchase'].includes(entry.kind) ? !entry.lines.length || entry.amount !== entry.lines.reduce((sum, line) => sum + line.total, 0) : entry.lines.length) throw Error();
      if (entry.kind === 'debt' && entry.method !== 'UDHAAR' || ['receipt', 'supplier-payment'].includes(entry.kind) && entry.method === 'UDHAAR') throw Error();
    }
    if (summary(state).cash < 0 || accounts(state).some(account => account.balance < 0) || accounts(state, true).some(account => account.balance < 0)) throw Error();
    return state;
  } catch { return freshDemo(); }
}
