import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    //memo: {}で一括管理すると、keyが消えてしまうため、必要なデータだけ個別管理
    body: '',
    key: '',
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ body: params.body, key: params.key }); //paramsからbodyとkeyだけを取り出す
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const newDate = firebase.firestore.Timestamp.now(); //更新用のタイムスタンプ
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body, //firebaseのメモデータを更新
        createdOn: newDate, //firebaseのタイムスタンプを更新
      })
      .then(() => {
        const { navigation } = this.props;
        //memoのデータをMemoDetailScreenに渡すが、MemoEditScreenにはmemoがないので、オブジェクトを作成する
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        navigation.goBack(); //前の画面に戻る
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton name="check" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
      backgroundColor: '#fff',
      flex: 1, //画面いっぱいに表示する設定
      paddingTop: 32, //上の余白を32に設定
      paddingLeft: 16, //左の余白を16に設定
      paddingRight: 16, //右の余白を16に設定
      paddingBottom: 16, //下の余白を16に設定
      fontSize: 16,
  },
});

export default MemoEditScreen;
