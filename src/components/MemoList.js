import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const dateString = (date) => {
  const str = String(date);
  const str2 = str.split(',')[0];
  const seconds = str2.split('=')[1];
  //toISOStringが使用できなかったため、タイムスタンプから計算により日付を出す
  const ts = seconds;
  const d = new Date(ts * 1000);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}-${month}-${day}`;
};

class MemoList extends React.Component {
  //itemは取得したメモの情報になる({ item } = dataの省略形)
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
        <View style={styles.memoListItem}>
          {/*受け渡されたmemoListのbody部分を格納する*/}
          <Text style={styles.momeTitle}>{item.body.substring(0, 10)}</Text>
    <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
        <View style={styles.memoList}>
          {/*renderItemにrenderMemoでレンダリングしたものを格納し、出力する*/}
          <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
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
