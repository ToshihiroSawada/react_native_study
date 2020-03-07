import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


class MemoListScreen extends React.Component {
  //paramsとして、ユーザー情報をMemoCreateScreenへ受け渡す
  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('MemoCreate', { CurrentUser: params.currentUser });
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //画面いっぱいに広げる設定
    width: '100%', //幅を画面いっぱいに広げる設定
    backgroundColor: '#fffdf6',
  },
});

export default MemoListScreen;
