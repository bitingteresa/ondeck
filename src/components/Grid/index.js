import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Grid extends Component {
  static propTypes = {
    grid: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
  };

  // delete func
  // add/Edit func -> goes to redux form

  createRows () {
    const { grid } = this.props;

    return Object.keys(grid).map((rowId) => {
      return this.renderRow(grid[rowId], rowId);
    });
  }

  createCols (row) {
    const size = Math.floor(12 / (Object.keys(row).length));

    return Object.keys(row).map((colId) => {
      return this.renderCol(row[colId], colId, size);
    });
  }

  renderRow (row, id) {
    return (
      <div key={id} className='row'>{this.createCols(row)}</div>
    );
  }

  renderCol (col, id, size) {
    return (
      <span key={id} className={`col-xs-${size} text-center`}>Placeholder</span>
    );
  }

  render () {
    return (
      <div>{this.createRows()}</div>
    );
  }
}

export default Grid;
