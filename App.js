import { createAppContainer } from 'react-navigation'; //react-navigationのcreateAppContainerをインポート
import { createStackNavigator } from 'react-navigation-stack'; //react-navigation-stackのcreateStackNavigatorをインポート
//画面遷移には、上記2つをインポートする必要が有る

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen.js';
import MemoEditScreen from './src/screens/MemoEditScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen.js';


const AppScreen = createStackNavigator({ //createStackNavigatorで画面を作成
    Home: { //Homeは何も指定しない場合のヘッダータイトルになる
      screen: MemoListScreen, //ホーム画面（MemoListScreen）を用意
    },
    MemoDitail: {
      screen: MemoDetailScreen,
    },
    MemoEdit: {
      screen: MemoEditScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  }, { //画面を用意する部分の外(以下の部分)にdefaultNavigationOptionsを出すことによって、全画面共通のオプションを作成できる
  defaultNavigationOptions: {
    headerTitle: 'MEMOT', //ヘッダータイトルを'MEMOT'に変更
    headerStyle: {
      backgroundColor: '#225566', //バックグラウンドカラーを設定
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

const App = createAppContainer(AppScreen); //AppScreenをcreateAppConteinerに入れて、コンテナ化


export default App;
