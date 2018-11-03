import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@init' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expenses[0]]);
});

test('Should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Gas Bill'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('Gas Bill');
});

test('Should not edit expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'Gas Bill'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});