import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <div className='homeContent'>
        {this.renderHeader()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {

  };

  return newState;
};

export default connect(mapStateToProps, {})(Home);
