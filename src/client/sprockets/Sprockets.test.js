import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock';

import store from '../redux/store';
import SprocketsContainer from './SprocketsContainer';

describe('Sprockets Client Test', () => {
  let component;

  async function yieldToAsyncCalls() {
    await new Promise(resolve => setTimeout(resolve, 1));
    component.update();
  }

  beforeEach(() => {
    fetchMock.mock('*', {
      body: [
        {
          name: 'sprocket A',
        },
        {
          name: 'sprocket B',
        },
      ],
    });
    component = mount(
      <Provider store={store}>
        <SprocketsContainer />
      </Provider>,
    );
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('displays the sprockets', async () => {
    const loader = component.find('[data-testid="loader"]');
    expect(loader.length).toEqual(1);

    await yieldToAsyncCalls();

    const sprockets = component.find('[data-testid="sprocket"]');
    expect(sprockets.length).toEqual(2);
    expect(sprockets.at(0).text()).toEqual('sprocket A');
    expect(sprockets.at(1).text()).toEqual('sprocket B');
  });
});
