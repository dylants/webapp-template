import BaseReduxModule from '../../redux/BaseReduxModule';

const { buildSelector, createAction, registerReducer } = new BaseReduxModule(
  'sprockets',
);

/*
 * Actions
 */
const LOADING_SPROCKETS = createAction('LOADING_SPROCKETS');
const LOADING_SPROCKETS_SUCCESS = createAction('LOADING_SPROCKETS_SUCCESS');

/*
 * Action Creators
 */
const loadingSprockets = () => ({ type: LOADING_SPROCKETS });
const loadingSprocketsSuccess = payload => ({
  payload,
  type: LOADING_SPROCKETS_SUCCESS,
});

export function loadSprockets() {
  return dispatch => {
    dispatch(loadingSprockets());
    return fetch('/api/sprockets')
      .then(res => res.json())
      .then(sprockets => dispatch(loadingSprocketsSuccess(sprockets)));
  };
}

/*
 * Reducer
 */
const initialState = { isLoading: true, sprockets: [] };
registerReducer((state = initialState, action) => {
  switch (action.type) {
    case LOADING_SPROCKETS:
      return { ...state, isLoading: true };
    case LOADING_SPROCKETS_SUCCESS:
      return { ...state, isLoading: false, sprockets: action.payload };
    default:
      return state;
  }
});

/*
 * Selectors
 */
export const selectors = {
  isLoading: buildSelector('isLoading'),
  sprockets: buildSelector('sprockets'),
};
