import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { Home } from './components/home.js';
import { GetUsers } from './firebase/users.js';
import { GetRoom } from './firebase/rooms.js';

console.log(GetUsers());

export default function App() {
  const [room, setRoom] = useState({});

  const handleRoom = (code) => {
    if (code === "") return false;
    
    GetRoom(code).then(newRoom => {
      console.log("just waited", newRoom);
      if(newRoom.created_by) {
        setRoom(newRoom);
        return true;
      } else {
        return false;
      }
    })
  }

  useEffect(() => console.log("room", room), [room]);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Home room={room} handleRoom={handleRoom} />
      <Layout style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Layout>
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