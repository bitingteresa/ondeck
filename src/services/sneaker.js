import axios from 'axios';
import * as Sneaker from '../actions/sneaker';

export function deleteSneaker (data) {
  return (dispatch) => {
    dispatch(Sneaker.deleteSneaker(data));
  };
}
