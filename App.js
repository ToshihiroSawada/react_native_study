import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/MemoList.js';
import Appbar from './src/components/Appbar.js';
import CircleButton from './src/elements/CircleButton.js';

export default function App() {
  //以下表示する為のプログラム
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
  //以上表示する為のプログラム
}

//スタイリング設定(CSSの様な役割をする)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6', //全体の背景色設定
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80, //memoListItemがappbarにかからないようにする設定
  },
});
