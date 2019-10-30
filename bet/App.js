/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from 'bet/src/store';

import Screen from 'bet/src/containers/home/Screen';


const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Screen />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
