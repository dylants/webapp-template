import reducerRegistry from './reducerRegistry';
import BaseReduxModule from './BaseReduxModule';

jest.mock('./reducerRegistry');

describe('BaseReduxModule', () => {
  const REDUCER_NAME = 'myReducer';
  let module;

  beforeEach(() => {
    module = new BaseReduxModule(REDUCER_NAME);
  });

  describe('buildSelector', () => {
    it('should return a function that allows access to a state element', () => {
      const func = module.buildSelector('myKey');
      expect(typeof func).toEqual('function');
      expect(
        func({
          [REDUCER_NAME]: {
            myKey: 'foo',
          },
        }),
      ).toEqual('foo');
    });

    describe('when the state does not exist', () => {
      it('returns undefined', () => {
        expect(module.buildSelector('myKey')()).toEqual(undefined);
      });
    });

    describe('when the state for a specific reducer does not exist', () => {
      it('returns undefined', () => {
        expect(module.buildSelector('myReducer')({})).toEqual(undefined);
      });
    });
  });

  describe('createAction', () => {
    it('should return the correct action string', () => {
      expect(module.createAction('foo')).toEqual(`${REDUCER_NAME}/foo`);
    });
  });

  describe('registerReducer', () => {
    it('should register the reducer', () => {
      module.registerReducer('a reducer');
      expect(reducerRegistry.register).toHaveBeenCalledWith(
        REDUCER_NAME,
        'a reducer',
      );
    });
  });
});
