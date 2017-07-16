export const makeGrid = (rows, cols) => {
  // returns a grid object with keys being the position
  const grid = {};

  // make a row
  for (let i = 1; i <= rows; i += 1) {
    const rowObj = {};

    // make all the cols for the row
    for (let j = 1; j <= cols; j += 1) {
      rowObj[j] = {};
    }
    grid[i] = rowObj;
  }

  return grid;
};
