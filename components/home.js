import React, { useState } from 'react';
import { Card, Button, Input, Layout, Text } from '@ui-kitten/components';
import { Pressable, TextInput, StyleSheet, View } from "react-native-web";

export function Home({room, handleRoom}) {
    const [roomInput, setRoomInput] = useState("");

    const handleSubmit = () => {
        console.log("submit clicked");
        handleRoom(roomInput);
    }

    return (
        !(room.created_by) ?
            <Card style={styles.card}>
                <Text category="h1">
                    Create or join a room
                </Text>
                <Input
                    style={styles.input}
                    // status='danger'
                    placeholder='enter room code'
                    value={roomInput}
                    onChangeText={setRoomInput}
                />
                <Button onPress={handleSubmit}>Join</Button>
            </Card>
            : <Card style={styles.card}>
                Joined room - created by {room.created_by}
            </Card>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        margin: 2
    },
    card: {
        textAlign: "center",
        margin: 20
    }
  });