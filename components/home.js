import React, { useState } from 'react';
import { Button, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native-web";

export function Home({game, handleGame}) {
    const [gameInput, setGameInput] = useState("");

    const handleSubmit = () => {
        console.log("submit clicked");
        handleGame(gameInput);
    }

    return (
        !(game.created_by) ?
            <View>
                <Text>
                    Create a game or join a game
                </Text>
                <TextInput 
                    placeholder="room code" 
                    onChangeText={ code => setGameInput(code)} 
                />
                <Button onPress={handleSubmit}>Join</Button>
            </View>
            : <div>
                Joined game - created by {game.created_by}
            </div>
    );
}