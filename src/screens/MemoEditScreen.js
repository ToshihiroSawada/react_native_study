import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="Hi" />
        <CircleButton name="check" onPress={() => { this.props.navigation.goBack(); }} />
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
