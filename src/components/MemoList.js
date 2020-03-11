import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MemoList extends React.Component {
  //itemは取得したメモの情報になる({ item } = dataの省略形)
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
        <View style={styles.memoListItem}>
          {/*受け渡されたmemoListのbody部分を格納する*/}
          <Text style={styles.momeTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>2019/12/19</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
        <View style={styles.memoList}>
          {/*renderItemにrenderMemoでレンダリングしたものを格納し、出力する*/}
          <FlatList data={this.props.memoList} renderItem={this.renderMemo} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  //memoListの幅を画面いっぱいにする
  memoList: {
    flex: 1, //画面いっぱいにmemoListを広げる設定
    width: '100%', //幅を画面いっぱいに広げる設定
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
