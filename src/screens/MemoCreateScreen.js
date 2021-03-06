import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCereateScreen extends React.Component {
  state = {
    body: '',
  }

  state2 = {
    //読み込み中のwaiting cursorのON・OFF用フラグ
    animating: true,
    disable: true,
  }

  //DBにアクセスしてメモを登録する
  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid/*firebase.auth()で取得したuidをユーザー識別で使用する*/}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={80}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
          underlineColorAndroid="transparent" //AndroidのTextInputでに下線が出ないようにする設定(表示されなかったが一応入れておく)
          textAlignVertical="top" //TextInputのテキストの配置を画面の一番上から配置する設定
        />
        <CircleButton
          name="check"
          onPress={this.handlePress.bind(this)}
        />
      </KeyboardAvoidingView>
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

export default MemoCereateScreen;
