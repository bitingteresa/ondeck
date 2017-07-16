import * as C from '../constants';

export function deleteSneaker (response) {
  return {
    type: C.DELETE_SNEAKER,
    payoad: response
  };
}
