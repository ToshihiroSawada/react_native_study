import { createAppContainer } from 'react-navigation'; //react-navigationのcreateAppContainerをインポート
import { createStackNavigator } from 'react-navigation-stack'; //react-navigation-stackのcreateStackNavigatorをインポート
//画面遷移には、上記2つをインポートする必要が有る

import firebase from 'firebase';
//firebaseのバージョン7.9.0以降下記のインポートを行わないと、firebaseと通信が行えなくなった
import { decode, encode } from 'base-64';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen.js';
import MemoEditScreen from './src/screens/MemoEditScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen.js';
import MemoCereateScreen from './src/screens/MemoCreateScreen';

import ENV from './env.json';

//firebaseのバージョン7.9.0以降のatob、btoaのwarningの対策
if (!global.btoa) { global.btoa = encode; }
if (!global.atob) { global.atob = decode; }

// eslint-disable-next-line
require("firebase/firestore");

//Login(firebaseの準備)
const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_MS_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MSM_ID,
};
firebase.initializeApp(firebaseConfig); //firebaseを初期化して準備する

const AppScreen = createStackNavigator({ //createStackNavigatorで画面を作成
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Home: { //Homeは何も指定しない場合のヘッダータイトルになる
      screen: MemoListScreen, //ホーム画面（MemoListScreen）を用意
    },
    MemoDetail: {
      screen: MemoDetailScreen,
    },
    MemoEdit: {
      screen: MemoEditScreen,
    },
    MemoCreate: {
      screen: MemoCereateScreen,
    },
  }, { //画面を用意する部分の外(以下の部分)にdefaultNavigationOptionsを出すことによって、全画面共通のオプションを作成できる
  defaultNavigationOptions: {
    headerTitle: 'MEMOT', //ヘッダータイトルを'MEMOT'に変更
    headerTintColor: '#fff', //左上に表示される矢印の色を指定
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
