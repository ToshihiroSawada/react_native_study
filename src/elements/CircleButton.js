import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style } = this.props; //他で呼び出された際に変更可能な設定にする設定
    //以下表示する為のプログラム
    return (
      <View style={[styles.circleButton, style]}>
        <Text style={styles.circleButtonTitle}>
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
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 34,
    color: '#fff',
  },
});

export default CircleButton;
