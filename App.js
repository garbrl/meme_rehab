import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './components/home.js';
import { GetUsers } from './firebase/users.js';
import { GetGame } from './firebase/games.js';

console.log(GetUsers());

export default function App() {
  const [game, setGame] = useState({});

  const handleGame = (code) => {
    if (code === "") return false;
    
    GetGame(code).then(newGame => {
      console.log("just waited", newGame);
      if(newGame.created_by) {
        setGame(newGame);
        return true;
      } else {
        return false;
      }
    })
  }

  useEffect(() => console.log("game", game), [game]);

  return (
    <>
      <Home game={game} handleGame={handleGame} />
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