import get from 'lodash/get';
import reducerRegistry from './reducerRegistry';

export default class BaseReduxModule {
  constructor(reducerName) {
    this.reducerName = reducerName;
  }

  buildSelector = key => state => get(state, `[${this.reducerName}][${key}]`);

  createAction = name => `${this.reducerName}/${name}`;

  registerReducer = reducer =>
    reducerRegistry.register(this.reducerName, reducer);
}
