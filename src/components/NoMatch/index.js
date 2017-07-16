import React from 'react';
import { hashHistory } from 'react-router';
import Diamond from '../../assets/diamond.gif';
import './NoMatch.scss';

const NoMatch = () => {
  return (
    <div className='no'>
      <div className='container'>
        <img src={Diamond} alt='fine' onClick={() => hashHistory.push('/')} />
        <h1>Making coal into diamonds.</h1>
      </div>
    </div>
  );
};

export default NoMatch;
