import { accounts, addItem, balance, billLines, freshDemo, generateBill, money, parseMoney, paySupplier, receivePayment, recordDebt, restock, restoreDemo, summary } from '../lib/demo-store';
import type { Entry, Method } from '../lib/demo-store';

const root = document.querySelector<HTMLElement>('[data-demo]');
if (root) setup(root);
function setup(root: HTMLElement) {
  const storageKey = 'apnagalla-sample-shop-v1';
  let stored: string | null = null, storageAvailable = true;
  try { stored = sessionStorage.getItem(storageKey); } catch { storageAvailable = false; }
  let state = restoreDemo(stored);
  let cart: Record<string, number> = state.entries.length ? {} : { 1: 1, 2: 1 };
  let receiptId = [...state.entries].reverse().find(entry => entry.kind === 'sale')?.id;
  const $ = <T extends HTMLElement = HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  const escape = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
  const date = (value: string) => new Date(value).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const number = (entry: Entry) => 'DEMO-' + String(entry.id).padStart(4, '0');
  const empty = (message: string) => `<p class="demo-empty">${message}</p>`;
  function message(text: string, error = false) {
    const status = $('[data-demo-status]'); status.textContent = text + (storageAvailable ? '' : ' Browser storage is unavailable; reloading resets this demo.'); status.dataset.error = String(error);
  }
  function persist() {
    try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch { storageAvailable = false; }
  }
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-tab]')];
  function select(tabName: string, focus = false) {
    tabs.forEach(tab => { const selected = tab.dataset.tab === tabName; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; });
    root.querySelectorAll<HTMLElement>('[data-panel]').forEach(panel => panel.hidden = panel.dataset.panel !== tabName);
    if (focus) tabs.find(tab => tab.dataset.tab === tabName)?.focus({ preventScroll: true });
  }
  function jump(tabName: string) { select(tabName, true); root.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' }); }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.tab!));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      select(tabs[next].dataset.tab!, true);
    });
  });
  function options(selector: string, rows: { value: string; label: string }[], placeholder: string) {
    const input = $<HTMLSelectElement>(selector), before = input.value;
    input.innerHTML = rows.length ? rows.map(row => `<option value="${escape(row.value)}">${escape(row.label)}</option>`).join('') : `<option value="">${placeholder}</option>`;
    if (rows.some(row => row.value === before)) input.value = before;
    input.disabled = !rows.length;
  }
  function receipt(entry: Entry) {
    return `<header><h4>Apna Galla · Sample Shop</h4><div>SAMPLE BILL · DEMO ONLY</div></header><div>Bill no: ${number(entry)}</div><div>Date: ${escape(date(entry.date))}</div><div>Customer: ${escape(entry.name)}</div><table><thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead><tbody>${entry.lines.map(line => `<tr><td>${escape(line.name)}</td><td>${line.quantity}</td><td>${money(line.price)}</td><td>${money(line.total)}</td></tr>`).join('')}</tbody></table><div class="receipt-total"><span>TOTAL</span><span>${money(entry.amount)}</span></div><div>Payment: ${entry.method === 'UDHAAR' ? 'Udhaar · pay later' : entry.method === 'UPI' ? 'UPI' : 'Cash'}</div><div>Paid at issue: ${money(entry.method === 'UDHAAR' ? 0 : entry.amount)}</div><div>Due at issue: ${money(entry.method === 'UDHAAR' ? entry.amount : 0)}</div><footer>Thank you for your visit!<br/>Browser demo · not a tax invoice<br/>Create your account for your own shop.</footer>`;
  }
  function render() {
    const lines = billLines(state, cart), total = lines.reduce((sum, line) => sum + line.total, 0);
    $('[data-cart]').innerHTML = lines.length ? lines.map(line => {
      const stock = state.items.find(item => item.id === line.itemId)!.stock;
      return `<div class="demo-line" data-cart-line="${line.itemId}"><span><strong>${escape(line.name)}</strong><small>${line.quantity} × ${money(line.price)} · ${stock} in stock</small></span><div class="demo-quantity"><button type="button" data-action="minus" data-id="${line.itemId}" aria-label="Remove one ${escape(line.name)}">−</button><input data-quantity="${line.itemId}" aria-label="Bill quantity for ${escape(line.name)}" type="number" value="${line.quantity}" min="1" max="${stock}" step="1" /><button type="button" data-action="plus" data-id="${line.itemId}" aria-label="Add one ${escape(line.name)}" ${line.quantity >= stock ? 'disabled' : ''}>+</button></div><div class="demo-line-money"><strong>${money(line.total)}</strong><br/><button type="button" class="demo-link" data-action="remove" data-id="${line.itemId}">Remove</button></div></div>`;
    }).join('') : empty('Your bill is empty. Choose an item below or create your own.');
    $('[data-cart-total]').textContent = money(total); $<HTMLButtonElement>('[data-generate]').disabled = !lines.length;
    const available = state.items.filter(item => item.stock > 0).map(item => ({ value: String(item.id), label: `${item.name} · ${money(item.price)} · ${item.stock} left` }));
    options('[data-form="cart"] [name="item"]', available, 'No stock available');
    options('[data-form="purchase"] [name="item"]', state.items.map(item => ({ value: String(item.id), label: item.name })), 'Create an item first');
    $('[data-item-list]').innerHTML = state.items.map(item => `<div class="demo-line"><span><strong>${escape(item.name)}</strong><small>${money(item.price)} per unit · ${item.stock} in stock</small></span><button type="button" class="demo-button" data-action="add-item" data-id="${item.id}" ${item.stock ? '' : 'disabled'}>Add to bill</button></div>`).join('');
    $('[data-stock-list]').innerHTML = state.items.map(item => `<div class="demo-line" data-stock-item="${item.id}"><span><strong>${escape(item.name)}</strong><small>${money(item.price)} per unit${item.stock <= 4 ? ' · low stock' : ''}</small></span><strong class="${item.stock <= 4 ? 'demo-low' : ''}">${item.stock} units</strong></div>`).join('');
    const customers = accounts(state), suppliers = accounts(state, true), totals = summary(state);
    $('[data-customer-total]').textContent = money(totals.due);
    $('[data-accounts]').innerHTML = customers.length ? customers.map(account => `<div class="demo-line"><span><strong>${escape(account.name)}</strong><small>${account.balance ? 'Payment pending' : 'Settled · thank you'}</small></span><div class="demo-account"><strong>${money(account.balance)}</strong><button type="button" class="demo-button" data-action="collect" data-name="${escape(account.name)}" ${account.balance ? '' : 'disabled'}>Receive</button></div></div>`).join('') : empty('No udhaar yet. Generate a bill with “Udhaar · pay later” to try it.');
    options('[data-form="receive"] [name="customer"]', customers.filter(account => account.balance > 0).map(account => ({ value: account.name, label: `${account.name} · ${money(account.balance)} due` })), 'No customer payments pending');
    $<HTMLButtonElement>('[data-form="receive"] button').disabled = !customers.some(account => account.balance > 0);
    $('[data-supplier-list]').innerHTML = suppliers.length ? suppliers.map(account => `<div class="demo-line"><span><strong>${escape(account.name)}</strong><small>Supplier balance</small></span><strong>${money(account.balance)}</strong></div>`).join('') : empty('No supplier dues. Try buying stock on supplier credit.');
    options('[data-form="supplier"] [name="supplier"]', suppliers.filter(account => account.balance > 0).map(account => ({ value: account.name, label: `${account.name} · ${money(account.balance)} due` })), 'No supplier payments pending');
    $<HTMLButtonElement>('[data-form="supplier"] button').disabled = !suppliers.some(account => account.balance > 0);
    $('[data-khata-history]').innerHTML = [...state.entries].reverse().filter(entry => ['debt', 'receipt'].includes(entry.kind) || entry.kind === 'sale' && entry.method === 'UDHAAR').map(entry => `<div class="demo-line demo-transaction"><span><strong>${escape(entry.name)}</strong><small>${escape(date(entry.date))} · ${entry.kind === 'sale' ? number(entry) : escape(entry.note)} · ${entry.method}</small></span><strong>${entry.kind === 'receipt' ? '−' : '+'}${money(entry.amount)}</strong></div>`).join('') || empty('Bills and payments will appear here.');
    const bills = [...state.entries].reverse().filter(entry => entry.kind === 'sale');
    $('[data-bill-count]').textContent = String(bills.length);
    $('[data-bill-history]').innerHTML = bills.map(entry => `<button type="button" class="demo-link" data-action="view-bill" data-id="${entry.id}">${number(entry)} · ${escape(entry.name)} · ${money(entry.amount)} · ${entry.method}</button>`).join('') || empty('Generate your first bill to see its receipt here.');
    const selectedReceipt = bills.find(entry => entry.id === receiptId);
    $('[data-receipt]').hidden = !selectedReceipt;
    if (selectedReceipt) $('[data-receipt-paper]').innerHTML = receipt(selectedReceipt);
    for (const field of ['cash', 'upi', 'sales', 'due', 'suppliers'] as const) document.querySelectorAll(`[data-summary="${field}"]`).forEach(node => node.textContent = money(totals[field]));
    document.querySelectorAll('[data-summary="bills"]').forEach(node => node.textContent = String(totals.bills));
    document.querySelectorAll('[data-pending-customers]').forEach(node => node.textContent = `${customers.filter(account => account.balance > 0).length} customers pending`);
    const supplierHistory = document.querySelector('[data-supplier-history]');
    if (supplierHistory) supplierHistory.innerHTML = [...state.entries].reverse().filter(entry => ['purchase', 'supplier-payment'].includes(entry.kind)).map(entry => `<div class="demo-line demo-transaction"><span><strong>${escape(entry.name)}</strong><small>${escape(date(entry.date))} · ${entry.kind === 'purchase' ? 'Purchase: ' + escape(entry.note) : 'Payment'} · ${entry.method}</small></span><strong>${money(entry.amount)}</strong></div>`).join('') || empty('No purchases recorded. Buy stock above to start the supplier ledger.');
  }
  function addToCart(id: number, quantity: number) {
    const next = { ...cart, [id]: (cart[id] || 0) + quantity }; billLines(state, next); cart = next;
  }
  root.addEventListener('submit', event => {
    const form = (event.target as HTMLElement).closest<HTMLFormElement>('[data-form]'); if (!form) return;
    event.preventDefault(); const values = new FormData(form), value = (key: string) => String(values.get(key) || '');
    try {
      let text = '';
      switch (form.dataset.form) {
        case 'item': { const item = addItem(state, value('name'), parseMoney(value('price')), Number(value('stock'))); if (item.stock) addToCart(item.id, 1); text = `${item.name} created.${item.stock ? ' One unit added to your draft bill.' : ' Restock it before selling.'}`; form.reset(); select(item.stock ? 'bill' : 'stock'); break; }
        case 'cart': addToCart(Number(value('item')), Number(value('quantity'))); text = 'Item added. Review the line amounts before generating your bill.'; break;
        case 'bill': { const bill = generateBill(state, cart, value('customer'), value('method') as Method); receiptId = bill.id; cart = {}; form.reset(); text = `${number(bill)} generated for ${money(bill.amount)}. Stock updated; ${bill.method === 'UDHAAR' ? 'customer khata updated.' : bill.method === 'UPI' ? 'UPI received.' : 'cash received.'}`; break; }
        case 'receive': receivePayment(state, value('customer'), parseMoney(value('amount')), value('method') as Method); text = 'Payment recorded. Customer balance and your dashboard are updated.'; form.reset(); break;
        case 'debt': recordDebt(state, value('customer'), parseMoney(value('amount')), value('note')); text = 'Existing udhaar added to khata. Stock and cash are unchanged.'; form.reset(); break;
        case 'purchase': restock(state, Number(value('item')), Number(value('quantity')), parseMoney(value('cost')), value('supplier'), value('method') as Method); text = 'Purchase recorded. Stock, supplier khata and payment totals updated.'; form.reset(); break;
        case 'supplier': paySupplier(state, value('supplier'), parseMoney(value('amount')), value('method') as Method); text = 'Supplier payment recorded. Balance and payment totals updated.'; form.reset(); break;
      }
      persist(); render(); message(text);
    } catch (error) { message(error instanceof Error ? error.message : 'Please check the details and try again.', true); }
  });
  root.addEventListener('change', event => {
    const input = event.target as HTMLInputElement;
    if (!input.matches('[data-quantity]')) return;
    const before = cart[input.dataset.quantity!];
    try { const next = { ...cart, [input.dataset.quantity!]: Number(input.value) }; billLines(state, next); cart = next; render(); message('Draft updated. Stock changes only when you generate the bill.'); }
    catch (error) { input.value = String(before); message((error as Error).message, true); }
  });
  root.addEventListener('click', event => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-action]'); if (!button || button.disabled) return;
    const id = Number(button.dataset.id);
    try {
      switch (button.dataset.action) {
        case 'plus': addToCart(id, 1); break;
        case 'minus': if (cart[id] > 1) cart[id]--; else delete cart[id]; break;
        case 'remove': delete cart[id]; break;
        case 'clear-cart': cart = {}; message('Draft cleared. Generated bills and stock are unchanged.'); break;
        case 'add-item': addToCart(id, 1); select('bill'); message('Item added to your draft bill.'); break;
        case 'view-bill': receiptId = id; break;
        case 'collect': $<HTMLSelectElement>('[data-form="receive"] [name="customer"]').value = button.dataset.name!; $<HTMLInputElement>('[data-form="receive"] [name="amount"]').value = (balance(state, button.dataset.name!) / 100).toFixed(2); $<HTMLInputElement>('[data-form="receive"] [name="amount"]').focus(); return;
        case 'reset': $('[data-reset-confirm]').hidden = false; return;
        case 'reset-cancel': $('[data-reset-confirm]').hidden = true; return;
        case 'reset-confirm': state = freshDemo(); cart = { 1: 1, 2: 1 }; receiptId = undefined; root.querySelectorAll<HTMLFormElement>('form').forEach(form => form.reset()); $('[data-reset-confirm]').hidden = true; persist(); select('bill'); message('Sample shop reset. Tea + milk = ₹180.'); break;
        case 'print': printReceipt(); return;
      }
      render();
    } catch (error) { message((error as Error).message, true); }
  });
  let printPaper: HTMLElement | undefined;
  function finishPrint() { document.body.classList.remove('demo-printing'); printPaper?.remove(); printPaper = undefined; }
  function printReceipt() {
    const entry = state.entries.find(entry => entry.id === receiptId && entry.kind === 'sale'); if (!entry) return;
    finishPrint(); printPaper = document.createElement('article'); printPaper.dataset.printReceipt = ''; printPaper.innerHTML = receipt(entry); printPaper.hidden = true; document.body.append(printPaper); document.body.classList.add('demo-printing');
    try { window.print(); } catch { finishPrint(); message('Printing could not open on this device. Your receipt is still available below.', true); }
  }
  window.addEventListener('afterprint', finishPrint);
  document.addEventListener('click', event => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-demo-action]'); if (!button) return;
    const action = button.dataset.demoAction;
    if (action === 'bill') { jump('bill'); message('Choose items and generate your next bill.'); }
    if (action === 'debt') { jump('khata'); $<HTMLDetailsElement>('[data-manual-debt]').open = true; $<HTMLInputElement>('[data-form="debt"] [name="customer"]').focus({ preventScroll: true }); }
    if (action === 'receive') jump('khata');
    if (action === 'purchase') { jump('stock'); $<HTMLDetailsElement>('[data-purchases]').open = true; }
    if (action === 'suppliers') { const panel = document.querySelector<HTMLElement>('[data-supplier-panel]')!; panel.hidden = !panel.hidden; button.setAttribute('aria-expanded', String(!panel.hidden)); }
    if (action === 'reminder') {
      const dialog = document.querySelector<HTMLDialogElement>('[data-reminder]')!, input = dialog.querySelector<HTMLSelectElement>('select')!, customers = accounts(state).filter(account => account.balance > 0);
      input.innerHTML = customers.map(account => `<option value="${escape(account.name)}">${escape(account.name)} · ${money(account.balance)}</option>`).join('');
      input.disabled = !customers.length;
      dialog.querySelector<HTMLButtonElement>('[data-demo-action="copy-reminder"]')!.disabled = !customers.length;
      dialog.querySelector('[data-copy-status]')!.textContent = '';
      const reminder = () => { const text = dialog.querySelector<HTMLTextAreaElement>('textarea')!; text.value = customers.length ? `Namaste ${input.value} ji, Sample Shop mein aapka ${money(balance(state, input.value))} udhaar baaki hai. Suvidha ke hisaab se payment kar dein. Dhanyavaad!` : 'No pending udhaar. Generate an udhaar bill first to preview a reminder.'; };
      input.onchange = reminder; reminder(); dialog.showModal();
    }
    if (action === 'close-reminder') document.querySelector<HTMLDialogElement>('[data-reminder]')!.close();
    if (action === 'copy-reminder') {
      const dialog = document.querySelector<HTMLDialogElement>('[data-reminder]')!, text = dialog.querySelector<HTMLTextAreaElement>('textarea')!;
      void navigator.clipboard?.writeText(text.value).then(() => dialog.querySelector('[data-copy-status]')!.textContent = 'Reminder copied. No message has been sent.').catch(() => { text.focus(); text.select(); dialog.querySelector('[data-copy-status]')!.textContent = 'Select and copy this text. No message has been sent.'; });
      if (!navigator.clipboard) { text.focus(); text.select(); dialog.querySelector('[data-copy-status]')!.textContent = 'Select and copy this text.'; }
    }
  });
  render(); if (state.entries.length) message('Your sample shop is restored in this browser tab.');
}
