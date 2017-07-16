import * as C from '../constants';

export function deleteSneaker (response) {
  return {
    type: C.DELETE_SNEAKER,
    payoad: response
  };
}

export function addSneakerRequest (response) {
  return {
    type: C.ADD_SNEAKER_REQUEST
  };
}

export function addSneakerSuccess (response) {
  return {
    type: C.ADD_SNEAKER_SUCCESS,
    payload: response
  };
}

export function addSneakerError (response) {
  return {
    type: C.ADD_SNEAKER_ERROR,
    error: response
  };
}
