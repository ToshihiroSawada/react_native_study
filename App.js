import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/MemoList.js';

//import BodyText from './src/elements/BodyText';

export default function App() {
  //以下表示する為のプログラム
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>MEMOT</Text>
      </View>
      <MemoList />
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddAddButtonTitle}>
        +
        </Text>
      </View>
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
  //appbarのスタイリング
  appbar: {
    position: 'absolute', //絶対的な位置づけ
    top: 0, //上から０
    left: 0, //左から０
    right: 0, //右から０
    height: 80, //高さ８０
    paddingTop: 30, //文字の位置調整
    backgroundColor: '#225566',
    justifyContent: 'center', //上下の位置設定（センター）
    alignItems: 'center', //左右方向の位置設定（センター）
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 }, //影の幅、高さ設定
    shadowRadius: 0, //影の丸さ設定
    shadowOpacity: 1, //影の濃さ（１がMAX）
    elevation: 100, //表示する優先度(高度)を設定する
  },
  //appbarのフォントのスタイリング
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  //+ボタンのスタイリング
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#F0F',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0.1, height: 2 }, //影の幅、高さ設定
    shadowRadius: 24, //影の丸さ設定
    shadowOpacity: 1, //影の濃さ（１がMAX）
    elevation: 10, //表示する優先度(高度)を設定する
  },
  //+ボタンのフォントのスタイリング
  memoAddAddButtonTitle: {
    fontSize: 32,
    lineHeight: 34,
    color: '#fff',
  },
});
