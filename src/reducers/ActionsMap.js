import * as C from '../constants';

const deleting = (state, action) => {
  const { row, col } = action.payoad;
  const newInventory = { ...state.inventory };

  newInventory[row][col] = {};

  return Object.assign({}, state, { inventory: newInventory });
};

const ActionsMap = {
  [C.DELETE_SNEAKER]: (state, action) => deleting(state, action)
};

export default ActionsMap;
