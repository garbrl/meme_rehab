import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

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
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home game={game} handleGame={handleGame} />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
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