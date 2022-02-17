import React, { useState } from 'react';
import { Input, Layout, Text } from '@ui-kitten/components';
import { Button, Pressable, TextInput, StyleSheet, View } from "react-native-web";

export function Home({game, handleGame}) {
    const [gameInput, setGameInput] = useState("");

    const handleSubmit = () => {
        console.log("submit clicked");
        handleGame(gameInput);
    }

    return (
        !(game.created_by) ?
            <Layout>
                <Text category="h1">
                    Create or join a game
                </Text>
                <Input
                    style={styles.input}
                    // status='danger'
                    placeholder='enter game code'
                    value={gameInput}
                    onChangeText={setGameInput}
                />
                <Button onPress={handleSubmit}>Join</Button>
            </Layout>
            : <div>
                Joined game - created by {game.created_by}
            </div>
    );
}

const styles = StyleSheet.create({
    input: {
      flex: 1,
      margin: 2,
    }
  });