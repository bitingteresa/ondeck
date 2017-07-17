import * as C from '../constants';

export function deleteSneaker (response) {
  return {
    type: C.DELETE_SNEAKER,
    payoad: response
  };
}

export function addSneakerRequest () {
  return {
    type: C.ADD_SNEAKER_REQUEST
  };
}

export function addSneakerSuccess (response, position) {
  return {
    type: C.ADD_SNEAKER_SUCCESS,
    payload: response,
    position
  };
}

export function addSneakerError (response) {
  return {
    type: C.ADD_SNEAKER_ERROR,
    error: response
  };
}

export function clearSneakers () {
  return {
    type: C.CLEAR_SNEAKERS
  };
}
