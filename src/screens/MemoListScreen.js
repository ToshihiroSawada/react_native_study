/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() { //MemoListScreen表示前に実行されるコンポーネント
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
        .then((querySnapshot) => {
          const memoList = [];
          querySnapshot.forEach((doc) => {
            memoList.push({ ...doc.data(), key: doc.id });
            //doc.dataをmemoListにpushして配列を作成する(...doc.data()は、bodyとcreatedOnの省略形)
          });
          this.setState({ memoList }); //memoList: memoList の省略形((グローバル変数: ローカル変数)が同一の名前の場合使用可能)
        })
        .catch((error) => {
          console.log(error);
        });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        {/*this.state.memoListで取得したメモの一覧をMemoListへ受け渡す*/}
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
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
