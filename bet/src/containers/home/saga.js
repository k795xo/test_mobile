import {put, call, takeLatest, select} from 'redux-saga/effects';

import {store} from 'bet/src/store';

const io = require('socket.io-client');

import {
  HOME_LOADING_START,
  HOME_LOADING_STARTED,
  HOME_LOADING_FAILED,
  HOME_LOADING_SUCCESS,
  HOME_GETSPORT_LOADING_START,
  HOME_GETSPORT_LOADING_STARTED,
  HOME_GETSPORT_LOADING_SUCCESS,
  HOME_GETSPORT_LOADING_FAILED,
} from './ducks';

function* loadHome() {
  try {
    const ioClient = io.connect('http://localhost:19002');

    yield put({type: HOME_LOADING_STARTED, payload: ioClient});

    ioClient.on('sport-list', list =>
      store.dispatch({type: HOME_LOADING_SUCCESS, payload: list}),
    );
  } catch (e) {
    yield put({type: HOME_LOADING_FAILED, payload: e});
  }
}

function* loadGetsport(action) {
  try {
    const state = yield select();

    yield put({type: HOME_GETSPORT_LOADING_STARTED});

    yield call(() => {
      state.home.io.emit('get-sport', {
        id: action.payload.id,
        meta_id: action.payload.meta_id,
      });
    });

    state.home.io.on('get-sport', list =>
      store.dispatch({type: HOME_GETSPORT_LOADING_SUCCESS, payload: list}),
    );
  } catch (e) {
    yield put({type: HOME_GETSPORT_LOADING_FAILED, payload: e});
  }
}

export default function*() {
  yield takeLatest(HOME_LOADING_START, loadHome);
  yield takeLatest(HOME_GETSPORT_LOADING_START, loadGetsport);
}
