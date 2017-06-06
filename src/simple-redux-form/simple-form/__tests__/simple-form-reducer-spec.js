import simpleFormReducer from '../simple-form-reducer.js';

import { changeName, changeGender } from '../simple-form-actions.js';

describe('Reducer: simpleFormReducer', () => {
  it('should have a valid initial state', () => {
    const initialState = simpleFormReducer(undefined, {});
    expect(initialState).toEqual({ name: '', gender: '' });
  });

  it('should update gender when changeGender is fired', () => {
    const newState = simpleFormReducer(undefined, changeGender('unit gender'));
    expect(newState).toEqual({ name: '', gender: 'unit gender' });
  });

  it('should update name when changeName is fired', () => {
    const newState = simpleFormReducer(undefined, changeName('unit name'));
    expect(newState).toEqual({ name: 'unit name', gender: '' });
  });

  it('should not mutate the state', () => {
    const currentState = Object.freeze({
      name: 'current name',
      gender: 'current gender',
    });

    const newState = simpleFormReducer(currentState, changeName('unit name'));
    expect(newState).toEqual({ name: 'unit name', gender: 'current gender' });

    const newState2 = simpleFormReducer(currentState, changeGender('unit gender'));
    expect(newState2).toEqual({ name: 'current name', gender: 'unit gender' });
  });
});
