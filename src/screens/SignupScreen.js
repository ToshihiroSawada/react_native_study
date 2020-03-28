import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    //Signup(Firebaseの実装)
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      //正常終了
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      //以上終了(エラーケース)
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
              メンバー登録
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={(text) => { this.setState({ email: text }); }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Address"
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => { this.setState({ password: text }); }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#f7f">
            <Text style={styles.buttonTitle}>送信する</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
      fontSize: 28,
      alignSelf: 'center',
      marginBottom: 24,
  },
  input: {
      backgroundColor: '#eee',
      height: 48,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 8,
  },
  button: {
      backgroundColor: '#f0f',
      height: 48,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center', //文字(送信)を中央に配置
      width: '70%',
      alignSelf: 'center', //ボタンの位置を中央に配置
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupScreen;
