import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

class Screen extends Component {
  render() {
    return (
      <View>
        <Text>Hello here!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen);
