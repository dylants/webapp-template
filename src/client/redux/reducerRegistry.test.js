import { ReducerRegistry } from './reducerRegistry';

describe('reducerRegistry', () => {
  let reducerRegistry;

  beforeEach(() => {
    reducerRegistry = new ReducerRegistry();
  });

  it('initializes with an empty reducers object', () => {
    expect(reducerRegistry.getReducers()).toEqual({});
  });

  it('registers new reducers', () => {
    const fooReducer = state => state;
    reducerRegistry.register('fooReducer', fooReducer);
    expect(reducerRegistry.getReducers()).toEqual({ fooReducer });
  });

  it('sets a change listener', () => {
    const listener = jest.fn();
    const fooReducer = state => state;
    reducerRegistry.setChangeListener(listener);
    reducerRegistry.register('fooReducer', fooReducer);
    expect(listener).toBeCalled();
  });
});
