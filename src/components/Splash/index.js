import React from 'react';
import PropTypes from 'prop-types';
import WhiteDiamond from '../../assets/white_diamond.png';
import './Splash.scss';

const Splash = (props) => {
  return (
    <div className='splash'>
      <div className='parent'>
        <section>
          <img src={WhiteDiamond} alt='on deck' />
        </section>
        <section>
          <h1 className='first'>ON</h1>
          <h1 className='second'>DECK</h1>
        </section>
      </div>
      <div className='centerButton'>
        <button className='btn btn-primary' onClick={props.start}>Start</button>
      </div>
    </div>
  );
};

Splash.propTypes = {
  start: PropTypes.func
};

export default Splash;
