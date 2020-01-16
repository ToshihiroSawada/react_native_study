import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
              メンバー登録
          </Text>
          <TextInput style={styles.input} value="Email Address" />
          <TextInput style={styles.input} value="Password" />
          <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor="#f7f">
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
