import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sneaker from './SneakerReducer';

export default combineReducers({
  form: formReducer,
  sneaker
});
