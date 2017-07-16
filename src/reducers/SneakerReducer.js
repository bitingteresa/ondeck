import { makeGrid } from '../utils';

const initialState = {
  inventory: makeGrid(5, 5)
};

export default (state = initialState, action) => {
  return state;
};
