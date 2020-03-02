import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


class MemoListScreen extends React.Component {
  //DBにアクセスしてメモを登録する
  //eslint-disable-next-line
  handlePress() { 
    const db = firebase.firestore();
    const uid = 'aaaaa';
    db.collection(`users/${uid}/memos`).add({
      body: 'test memo',
      createdOn: '2017-12-12',
    })
      .then((docRef) => {
        console.log('success!!');
        console.log(docRef.id);
      })
      .catch((error) => {
        console.log('error!!!!!!!');
        console.error(error);
      });
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
