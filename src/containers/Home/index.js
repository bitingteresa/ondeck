import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid';
import './Home.scss';

class Home extends Component {

  renderHeader () {
    return (
      <div className='header'>
        <h1>On Deck</h1>
      </div>
    );
  }

  render () {
    return (
      <div className='container'>
        {this.renderHeader()}
        <Grid grid={this.props.inventory} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {
    inventory: state.sneaker.inventory
  };

  return newState;
};

export default connect(mapStateToProps, {})(Home);
