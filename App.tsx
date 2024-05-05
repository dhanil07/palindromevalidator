
import React, { useState } from 'react';
import {
  View, TextInput, Button, Text, StyleSheet, ToastAndroid, Image, Alert } from 'react-native';


export default function App() {
  const [text, setText] = useState('');

const checkPalindrome = () => {
  const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversedText = processedText.split('').reverse().join('');

  if (processedText == reversedText) {
    ToastAndroid.show('', ToastAndroid.SHORT);
    Alert.alert('This is a Palindrome!', 'Yaa Anda benar',[
      {
        text: 'OKE TOL',
      },
    ]);
  } else {
    ToastAndroid.show('This is Not a Palindrome.', ToastAndroid.SHORT);
    Alert.alert('This is Not a Palindrome.', 'Bukan yeee',[
      {
        text: 'OKE TOL',
      },
    ]);
  }
};
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hallo, Anak Anakku</Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/ac/a7/8d/aca78d623386d17029342754600fdf3e.jpg',
          }}
          style={{ width: 150, height: 150 }}
        />
      
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="isi disek broww"
      />
      <Button 
        color="green" title="Validasi" onPress={checkPalindrome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

