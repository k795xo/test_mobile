import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  SectionList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {startLoading} from 'bet/src/containers/home/ducks';
import {Loading} from 'bet/src/UIKit/Loading';

import {HOME_GETSPORT_LOADING_START} from './ducks';

import {store} from 'bet/src/store';

class Screen extends Component {
  componentDidMount(): void {
    this.props.loadData();
  }

  loadSubSection(id): void {
    store.dispatch({
      type: HOME_GETSPORT_LOADING_START,
      payload: {id: id, meta_id: 'tfcygvu672geube'},
    });
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    const sections = this.props.sportList.map(currentValue => {
      currentValue.data = [];
      if (
        typeof this.props.subList.meta !== 'undefined' &&
        currentValue.id == this.props.subList.meta.id
      ) {
        currentValue.data = this.props.subList.response;
      }
      return currentValue;
    });

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.header}>Выберите элемент</Text>
          <SectionList
            sections={sections}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <TouchableOpacity onPress={() => this.loadSubSection(section.id)} style={styles.sectionHeader}><Text>{section.name}</Text></TouchableOpacity>}
            keyExtractor={(item, index) => index}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.home.loading,
    io: state.home.io,
    sportList: state.home.sportList,
    subList: state.home.subList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => {
      dispatch(startLoading());
    },
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 24,
  },
  sectionHeader: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    paddingLeft: 20,
    fontSize: 18,
    height: 44,
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen);
