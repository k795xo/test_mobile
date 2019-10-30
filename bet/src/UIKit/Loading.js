import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ size }) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large"/>
    </View>
  );
};

const styles = {
  spinnerContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export { Loading };
