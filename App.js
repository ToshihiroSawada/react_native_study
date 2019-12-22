import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

export default function App() {
  //以下表示する為のプログラム
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
        <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.momeTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/12/19</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.momeTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/12/19</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.momeTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/12/19</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.momeTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/12/19</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.momeTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/12/19</Text>
        </View>
      </View>
      <View>
        <Text>+</Text>
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
    //絶対的な位置を設定
    position: 'absolute', //絶対的な位置づけ
    top: 0, //上から０
    left: 0, //左から０
    right: 0, //右から０
    height: 80, //高さ６０
    backgroundColor: '#265366',
    justifyContent: 'center', //上下の位置設定（センター）
    alignItems: 'center', //左右方向の位置設定（センター）
    shadowColor: '#000',
    //影をつける設定のはずだが、IOSようなので、Andoroid用を探して設定する必要が有る。
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    //zIndexはappbarの方が、memoListより上の階層に有ることを宣言するためのもの
    zIndex: 10,
  },
  //appbarの色付け
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  //memoListの幅を画面いっぱいにする
  memoList: {
    width: '100%',
    flex: 1, //画面いっぱいにmemoListを広げるという設定
  },
  //memoListItemに影をつける
  memoListItem: {
    backgroundColor: '#fff', //memoListItemの背景色を設定
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  //タイトル(【講座のアイテム】の部分)のスタイリング
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  //日付のスタイリング
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
