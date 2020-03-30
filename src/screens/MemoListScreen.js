/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  state2 = {
    //読み込み中のwaiting cursorのON・OFF用フラグ
    animating: true,
  }


  componentDidMount() { //MemoListScreen表示前に実行されるコンポーネント
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((querySnapshot) => {
        const memoList = [];
        querySnapshot.forEach((doc) => {
          //doc.dataをmemoListにpushして配列を作成する(...doc.data()は、bodyとcreatedOnの省略形)
          memoList.push({ ...doc.data(), key: doc.id });
        });
        this.state2 = { animating: false }; //読み込み中のwaiting cursorをOFFにする
        this.setState({ memoList }); //memoList: memoList の省略形((グローバル変数: ローカル変数)が同一の名前の場合使用可能)
      });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        {
          //読み込み中のwaiting cursorを読み込み中のみ表示
          this.state2.animating && <ActivityIndicator animating={this.state2.animating} color="#0000aa" size="large" style={styles.activityIndicator} />
        }
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
