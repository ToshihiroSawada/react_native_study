import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

    //ログイン機能の実装
    handleSubmit() {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          //console.log('succcess!!!!!!!!!\n', user);
          this.props.navigation.navigate('Home', { currentUser: user }); //currentUserを参照できるように受け渡す
        })

        .catch((error) => {
          console.log(error);
        });
    }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
              ログイン
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
            <Text style={styles.buttonTitle}>ログインする</Text>
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

export default LoginScreen;
