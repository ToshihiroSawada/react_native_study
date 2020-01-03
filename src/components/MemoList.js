import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    //以下表示する為のプログラム
    return (
        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.momeTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/12/19</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.momeTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/12/19</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.momeTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/12/19</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.momeTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/12/19</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.momeTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/12/19</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.momeTitle}>aaaaa</Text>
            <Text style={styles.memoDate}>2019/12/19</Text>
          </View>
        </View>
    );
    //以上表示する為のプログラム
  }
}
const styles = StyleSheet.create({
  //memoListの幅を画面いっぱいにする
  memoList: {
    width: '100%',
    flex: 1, //画面いっぱいにmemoListを広げるという設定
  },
  //memoListItemに影をつける
  memoListItem: {
    padding: 15,
    backgroundColor: '#fff', //memoListItemの背景色を設定
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


export default MemoList;
