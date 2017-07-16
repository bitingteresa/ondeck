import { makeGrid } from '../utils';
import ActionsMap from './ActionsMap';

const initialState = {
  inventory: makeGrid(5, 5)
};

export default (state = initialState, action) => {
  return ActionsMap[action.type] ?
    ActionsMap[action.type](state, action) : state;
};
