import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({ //カスタムフォントのセットを行う
  pencil: '\uf303', //pencilと指定した場合、f303のユニコードのカスタムフォントを表示
  plus: '\uf067', //plusと指定した場合、f067のユニコードのカスタムフォントを表示
  check: '\uf00c', //checkと指定した場合、f00cのユニコードのカスタムフォントを表示
}, 'FontAwsome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false, //fontLoadedのデフォルト値をfalseに設定
  }

  //カスタムフォントが読み込まれてからfontLoadedをtrueにする
  async componentDidMount() { //asyncで非同期処理
    await Font.loadAsync({ //awaitで結果が返ってくるまで一時停止
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color } = this.props; //他で呼び出された際に変更可能な設定にする設定
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
        {
          this.state.fontLoaded ? ( //fontLoadedがtrueだった場合にカスタムフォントのレンダリングを行う
            <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
          ) : null
        }
      </View>
    );
    //以上表示する為のプログラム
  }
}

const styles = StyleSheet.create({
  //+ボタンのスタイリング
  circleButton: {
    fontFamily: 'FontAwsome',
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
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
