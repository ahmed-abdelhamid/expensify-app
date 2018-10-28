import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses',() => {
  const result = totalExpenses([]);
  expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const result = totalExpenses([expenses[0]]);
  expect(result).toBe(195);
});

test('Should correctly add up a multiple expense', () => {
  const result = totalExpenses(expenses);
  expect(result).toBe(114195);
});