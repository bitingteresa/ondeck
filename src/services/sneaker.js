import axios from 'axios';
import * as Sneaker from '../actions/sneaker';

export function deleteSneaker (data) {
  return (dispatch) => {
    dispatch(Sneaker.deleteSneaker(data));
  };
}

export function addSneaker(data, pos) {
  return (dispatch) => {
    const url = '#';

    dispatch(Sneaker.addSneakerRequest());
    axios.get(url)
      .then(
        (resp) => {
          dispatch(Sneaker.addSneakerSuccess(data, pos));
        }
      )
      .catch(
        (resp) => {
          dispatch(Sneaker.addSneakerError(resp.data));
        }
      );
  };
}

export function clearSneakers () {
  return (dispatch) => {
    dispatch(Sneaker.clearSneakers());
  };
}
