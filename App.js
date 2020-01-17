import { createAppContainer } from 'react-navigation'; //react-navigationのcreateAppContainerをインポート
import { createStackNavigator } from 'react-navigation-stack'; //react-navigation-stackのcreateStackNavigatorをインポート
//画面遷移には、上記2つをインポートする必要が有る

import MemoListScreen from './src/screens/MemoListScreen';


const AppScreen = createStackNavigator({ //createStackNavigatorで画面を作成
  screen: {
    screen: MemoListScreen, //ホーム画面（MemoListScreen）を用意
    navigationOptions: {
      headerTitle: 'MEMOT', //画面上部のタイトルを'MEMOT'に変更
      headerStyle: {
        backgroundColor: '#225566', //バックグラウンドカラーを設定
      },
    },
  },
});

const App = createAppContainer(AppScreen); //AppScreenをcreateAppConteinerに入れて、コンテナ化


export default App;
