import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';


const dateString = (date) => {
  const str = String(date);
  const str2 = str.split(',')[0]; //タイムスタンプからsecondsの値だけを取り出す
  const seconds = str2.split('=')[1]; //同上
  //toISOStringが使用できなかったため、タイムスタンプから計算により日付を出す
  const ts = seconds;
  const d = new Date(ts * 1000);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}-${month}-${day}`;
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state; //MemoListよりmemo: itemで受け渡したデータをparamsに格納
    this.setState({ memo: params.memo }); //params.memoをstateのmemoに格納する
  }

  //MemoEditScreenから渡ってきた情報をstateに入れるメソッド
  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state; //this.state.memo.bodyをmemo.bodyに省略したいので記述
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            {/*memo.bodyをsubstringしようとしたところエラーになり、型を(typeofで)調べたが、undefinedだったのでStringでキャストしている*/}
            <Text style={styles.memoHeaderTitle}>{String(memo.body).substring(0, 10)}</Text>
            <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          /*...memoでメモの情報をMemoEditScreenに渡す。this.returnMemo.bind(this)でメソッドごとMemoEditScreenに渡す */
          onPress={() => { this.props.navigation.navigate('MemoEdit', { ...memo, returnMemo: this.returnMemo.bind(this) }); }}
        />
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
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
