import {combineReducers} from 'redux';

import home from './containers/home/ducks';

export default combineReducers({
  home: home,
});
