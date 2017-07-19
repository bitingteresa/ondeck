import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shoe from '../../assets/shoe.png';
import './Grid.scss';

class ColItem extends Component {
  static propTypes = {
    col: PropTypes.string,
    row: PropTypes.string,
    item: PropTypes.object,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    size: PropTypes.number,
    offset: PropTypes.number,
    children: PropTypes.any
  };

  onAdd () {
    const { onAdd, row, col } = this.props;

    if (onAdd instanceof Function) {
      onAdd(row, col);
    }
  }

  onRemove () {
    const { onRemove, row, col } = this.props;

    if (onRemove instanceof Function) {
      onRemove(row, col);
    }
  }

  renderRemove () {
    return (
      <i
        className='material-icons pull-right removeIcon'
        onClick={::this.onRemove}
      >
        clear
      </i>
    );
  }

  renderAdd () {
    return (
      <i
        className='material-icons addIcon'
        onClick={::this.onAdd}
      >
        add
      </i>
    );
  }

  renderEdit () {
    return (
      <i
        className='material-icons pull-right editIcon'
        onClick={::this.onAdd}
      >
        create
      </i>
    );
  }

  renderItem () {
    const { children } = this.props;

    return (
      <div className='text-left inventoryItem'>
        {this.renderRemove()}
        {this.renderEdit()}
        <img src={Shoe} alt='sneaker' className='img-responsive' /><br />
        {children}
      </div>
    );
  }

  render () {
    const { size, item, col, offset } = this.props;
    const setOffset = col === '1' ? `col-xs-offset-${offset}` : '';

    return (
      <span className={`col-xs-${size} text-center ${setOffset}`}>
        {Object.keys(item).length ? this.renderItem() : this.renderAdd()}
      </span>
    );
  }
}

export default ColItem;
