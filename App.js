import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  //以下表示する為のプログラム
  return (
    <View style={styles.container}>
      <Appbar />
      <LoginScreen />
    </View>
  );
  //以上表示する為のプログラム
}

//スタイリング設定(CSSの様な役割をする)
const styles = StyleSheet.create({
  container: {
    flex: 1, //画面いっぱいに広げる設定
    backgroundColor: '#fffdf6', //全体の背景色設定
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80, //memoListItemがappbarにかからないようにする設定
  },
});
