import React, { useState } from 'react';
import { Card, Button, Input, Layout, Text } from '@ui-kitten/components';
import { Pressable, TextInput, StyleSheet, View } from "react-native-web";
import { CurrentUser } from '../../firebase/auth_state_listener';
import { AnonSignUp } from '../../firebase/auth_anon_sign_in';

export function SignUp() {
    const [usernameInput, setUsernameInput] = useState("");

    const handleSubmit = () => {
        console.log("sign up clicked");
        AnonSignUp().then(result => {
            console.log("anonymous authentication succeeded? ", result);
        })
    }

    return (
        !(CurrentUser.uid) ?
            <Card style={styles.card}>
                <Text category="h1">
                    Reveal yourself!
                </Text>
                <Input
                    style={styles.input}
                    // status='danger'
                    placeholder='enter name'
                    value={usernameInput}
                    onChangeText={setUsernameInput}
                />
                <Button onPress={handleSubmit}>Submit name</Button>
            </Card>
            : <Card style={styles.card}>
                signed_up with uid {CurrentUser.uid}
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