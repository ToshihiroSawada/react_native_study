import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  //以下表示する為のプログラム
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreen />
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
