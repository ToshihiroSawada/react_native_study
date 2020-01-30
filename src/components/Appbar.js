import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    //以下表示する為のプログラム
    return (
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>MEMOT</Text>
      </View>
    );
    //以上表示する為のプログラム
  }
}
const styles = StyleSheet.create({
  //appbarのスタイリング
  appbar: {
    // position: 'absolute', //絶対的な位置づけ
    // // top: 0, //上から０
    // // left: 0, //左から０
    // // right: 0, //右から０
    // // height: 80, //高さ８０
    // // paddingTop: 30, //文字の位置調整
    // backgroundColor: '#225566',
    // justifyContent: 'center', //上下の位置設定（センター）
    // alignItems: 'center', //左右方向の位置設定（センター）
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 }, //影の幅、高さ設定
    // shadowRadius: 0, //影の丸さ設定
    // shadowOpacity: 1, //影の濃さ（１がMAX）
    // elevation: 100, //表示する優先度(高度)を設定する
  },
  //appbarのフォントのスタイリング
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Appbar;
