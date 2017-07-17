import * as C from '../constants';

const deleting = (state, action) => {
  const { row, col } = action.payoad;
  const newInventory = { ...state.inventory };

  newInventory[row][col] = {};

  return Object.assign({}, state, { inventory: newInventory });
};

const adding = (state, bool) => {
  return Object.assign({}, state, { isAdding: bool });
};

const setting = (state, action) => {
  const { row, col } = action.position;
  const newData = { ...state };

  for (const prop in action.payload) {
    if (Object.prototype.hasOwnProperty.call(action.payload, prop)) {
      newData.inventory[row][col][prop] = action.payload[prop];
    }
  }
  newData.isAdding = false;

  return Object.assign({}, state, newData);
};

const erring = (state, action) => {
  return Object.assign({}, state, { isAdding: false, error: action.payload });
};

const ActionsMap = {
  [C.DELETE_SNEAKER]: (state, action) => deleting(state, action),
  [C.ADD_SNEAKER_REQUEST]: (state, bool) => adding(state, true),
  [C.ADD_SNEAKER_SUCCESS]: (state, action) => setting(state, action),
  [C.ADD_SNEAKER_ERROR]: (state, action) => erring(state, action)
};

export default ActionsMap;
