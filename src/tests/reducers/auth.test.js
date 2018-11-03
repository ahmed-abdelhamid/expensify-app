import authReducer from '../../reducers/auth';

test('should add user id to state', () => {
  const action = {
    type: 'LOGIN',
    uid: '123abc'
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(action.uid);
});

test('should remove uid from state', () => {
  const stateDefault = { uid: '123abc' };
  const action = { type: 'LOGOUT' };
  const state = authReducer(stateDefault, action);
  expect(state).toEqual({});
});