import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/01/01</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            講座のアイデアです。
          </Text>
        </View>

        <CircleButton name="pencil" color="white" style={styles.editButton} onPress={() => { this.props.navigation.navigate('MemoEdit'); }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //画面いっぱいにmemoListを広げる設定
    width: '100%', //幅を画面いっぱいに広げる設定
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center', //上下の設定（センター）
    padding: 10,
    marginBottom: 4,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold', //太字設定
    color: '#fff',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30, //余白上
    paddingLeft: 20, //余白左
    paddingRight: 20, //余白右
    paddingBottom: 20, //余白下
    backgroundColor: '#fff', //メモ詳細部分の背景色
    flex: 1, //画面いっぱいに広げる設定
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
