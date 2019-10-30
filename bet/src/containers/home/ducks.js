export const HOME_LOADING_START = 'home/loading_start';
export const HOME_LOADING_STARTED = 'home/loading_started';
export const HOME_LOADING_SUCCESS = 'home/loading_success';
export const HOME_LOADING_FAILED = 'home/loading_failed';

export const HOME_GETSPORT_LOADING_START = 'home/get_sport/loading_start';
export const HOME_GETSPORT_LOADING_STARTED = 'home/get_sport/loading_started';
export const HOME_GETSPORT_LOADING_SUCCESS = 'home/get_sport/loading_success';
export const HOME_GETSPORT_LOADING_FAILED = 'home/get_sport/loading_failed';

const io = require('socket.io-client');

const initialState = {
  loading: true,
  io: null,
  sportList: [],
  subList: {},
};

export const startLoading = () => {
  const ioClient = io.connect('http://localhost:19002');
  return {
    type: HOME_LOADING_START,
    payload: ioClient,
  };
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_LOADING_STARTED:
      return {...state, loading: true, io: action.payload};
    case HOME_LOADING_SUCCESS:
      return {...state, loading: false, sportList: action.payload};
    case HOME_LOADING_FAILED:
      return {...state, loading: false};
    case HOME_GETSPORT_LOADING_START:
      return {...state, loading: true, id: action.payload};
    case HOME_GETSPORT_LOADING_SUCCESS:
      return {...state, loading: false, subList: action.payload};
    case HOME_GETSPORT_LOADING_FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
}
