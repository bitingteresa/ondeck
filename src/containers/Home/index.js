import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid';
import Row from '../../components/Grid/Row';
import ColItem from '../../components/Grid/ColItem';
import './Home.scss';

class Home extends Component {

  onAdd (row, col) {
    console.log('Adding', row, col);
  }

  onRemove (row, col) {
    console.log('Removing!', row, col);
  }

  renderHeader () {
    return (
      <div className='header'>
        <h1>On Deck</h1>
      </div>
    );
  }

  renderItem (item, rowId) {
    const size = Math.floor(12 / (Object.keys(item).length));

    return Object.keys(item).map((key) => {
      const props = {
        col: key,
        row: rowId,
        item: item[key],
        onAdd: this.onAdd,
        onRemove: this.onRemove,
        size,
        key
      };

      return (
        <ColItem {...props} />
      );
    });
  }

  renderGrid () {
    const { inventory } = this.props;

    return (
      <Grid>
        {Object.keys(inventory).map((row) => {
          return (
            <Row key={row}>
              {this.renderItem(inventory[row], row)}
            </Row>
          );
        })}
      </Grid>
    );
  }

  render () {
    return (
      <div className='container'>
        {this.renderHeader()}
        {this.renderGrid()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {
    inventory: state.sneaker.inventory
  };

  newState.inventory[2][2] = {
    brand: 'Nike',
    style: 'Jordans',
    size: 10,
    upc: 456783
  };
  newState.inventory[2][4] = {
    brand: 'adidas',
    style: 'stripes',
    size: 10,
    upc: 12345
  };
  newState.inventory[2][1] = {
    brand: 'Nike',
    style: 'Jordans',
    size: 10,
    upc: 456783
  };
  newState.inventory[2][3] = {
    brand: 'adidas',
    style: 'stripes',
    size: 10,
    upc: 12345
  };
  newState.inventory[1][1] = {
    brand: 'Nike',
    style: 'Jordans',
    size: 10,
    upc: 456783
  };
  newState.inventory[1][3] = {
    brand: 'adidas',
    style: 'stripes',
    size: 10,
    upc: 12345
  };
  newState.inventory[4][3] = {
    brand: 'adidas',
    style: 'stripes',
    size: 10,
    upc: 12345
  };
  return newState;
};

export default connect(mapStateToProps, {})(Home);
