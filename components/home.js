import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity } from "react-native-web";

export function Home({game, handleGame}) {
    const [gameInput, setGameInput] = useState("");

    const handleSubmit = () => {
        console.log("submit clicked");
        handleGame(gameInput);
    }

    return (
        !(game.created_by) ?
            <div>
                <Text>
                    Create a game or join a game
                </Text>
                <TextInput 
                    placeholder="room code" 
                    onChangeText={ code => setGameInput(code)} 
                />
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>Join</Text>
                </TouchableOpacity>
                
            </div>
            : <div>
                Joined game - created by {game.created_by}
            </div>
    );
}