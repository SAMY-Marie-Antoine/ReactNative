import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import firebase from 'firebase';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e);
    }

    const handlePassword = (e) => {
        setPassword(e);
    }

    const handleSubmit = (e) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
               console.log("succes" + user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }



    return (
        <View style={styles.login}>
            <Text>Login</Text>
            <TextInput style={styles.input} placeholder="email"
                onChangeText={handleEmail} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="password"
                onChangeText={handlePassword} />
            <View style={styles.button}>
                <Button
                    title="Connexion"
                    color="#f104ff"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    login: {
        margin: 15,
        color: "blue"
    },
    input: {
        height: 45,
        borderColor: "black",
        borderWidth: 2,
        margin: 15,
        padding: 5
    },
    button: {
        margin: 5
    },
    text: {
        alignSelf: 'center'
    }
});
export default Login;
