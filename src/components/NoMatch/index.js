import React from 'react';
import { hashHistory } from 'react-router';
import Grumpy from '../../assets/grumpy_cat.png';
import './NoMatch.scss';

const NoMatch = () => {
  return (
    <div className='no'>
      <div className='container'>
        <img src={Grumpy} alt='fine' onClick={() => hashHistory.push('/')} />
        <h1>Nope.</h1>
      </div>
    </div>
  );
};

export default NoMatch;
