import { makeGrid } from '../utils';

const initialState = {
  inventory: makeGrid(4, 4)
};

export default (state = initialState, action) => {
  return state;
};
