import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from '../redux/store';
import SprocketsContainer from './SprocketsContainer';

describe('Sprockets Client Test', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <SprocketsContainer />
      </Provider>,
    );
  });

  it('displays the sprockets', () => {
    const sprockets = component.find('[data-testid="sprocket"]');
    expect(sprockets.length).toEqual(2);
    expect(sprockets.at(0).text()).toEqual('sprocket A');
    expect(sprockets.at(1).text()).toEqual('sprocket B');
  });
});
