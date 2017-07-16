import { makeGrid } from '../utils';
import ActionsMap from './ActionsMap';

const initialState = {
  inventory: makeGrid(5, 5)
};

initialState.inventory[2][2] = {
  brand: 'Nike',
  style: 'Jordans',
  size: 10,
  upc: 456783
};
initialState.inventory[2][4] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
initialState.inventory[2][1] = {
  brand: 'Nike',
  style: 'Jordans',
  size: 10,
  upc: 456783
};
initialState.inventory[1][1] = {
  brand: 'Nike',
  style: 'Jordans',
  size: 10,
  upc: 456783
};
initialState.inventory[1][3] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
initialState.inventory[4][3] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
initialState.inventory[4][2] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
initialState.inventory[4][1] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
initialState.inventory[4][4] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
initialState.inventory[4][5] = {
  brand: 'adidas',
  style: 'stripes',
  size: 10,
  upc: 12345
};
export default (state = initialState, action) => {
  return ActionsMap[action.type] ?
    ActionsMap[action.type](state, action) : state;
};
