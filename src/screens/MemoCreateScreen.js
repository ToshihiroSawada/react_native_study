import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCereateScreen extends React.Component {
    state = {
        body: '',
    }

    //DBにアクセスしてメモを登録する
    handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        db.collection(`users/${currentUser.uid/*firebase.auth()で取得したuidをユーザー識別で使用する*/}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
            .then((docRef) => {
                // console.log('success!!');
                console.log(docRef.id);
                this.props.navigation.goBack();
            })
            .catch((error) => {
                console.log('error!!!!!!!');
                console.error(error);
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
        <CircleButton
          name="check"
          onPress={this.handlePress.bind(this)}
        />
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

export default MemoCereateScreen;
