import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './components/home.js';
import { GetUsers } from './firebase/users.js';
import { GetGame } from './firebase/games.js';

console.log(GetUsers());
console.log(GetGame("AAA"));

const [game, setGame] = useState({});

const handleGame = (newGame) => {
  if(newGame.created_by) {
    setGame(newGame);
    return true;
  } else {
    return false;
  }
}

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});