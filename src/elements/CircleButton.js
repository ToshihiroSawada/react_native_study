import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props; //他で呼び出された際に変更可能な設定にする設定
    let bgColor = '#f0f'; //backgroundColorのデフォルト値の設定
    let textColor = '#fff'; //colorのデフォルト値の設定(テキスト用)

    //colorの値が'white'だった場合スタイルを変更
    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#f0f';
    }
    //以下表示する為のプログラム
    //{ backgroundColor: bgColor }と{ color: textColor }で上記の変数をスタイルに適応
    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
         {this.props.children}
        </Text>
      </View>
    );
    //以上表示する為のプログラム
  }
}

const styles = StyleSheet.create({
  //+ボタンのスタイリング
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
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
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 34,
  },
});

export default CircleButton;
