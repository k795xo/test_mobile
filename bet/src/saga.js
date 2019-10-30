import {all} from 'redux-saga/effects';
import home from 'bet/src/containers/home/saga';

export default function* root() {
  yield all([
    home()
  ])
}
