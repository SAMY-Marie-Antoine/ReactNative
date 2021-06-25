import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';

function Register() {
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = (e) => {
        setUserName(e);
    }
    const handleUserLastName = (e) => {
        setUserLastName(e);
    }
    const handlePhone = (e) => {
        setPhone(e);
    }
    const handleEmail = (e) => {
        setEmail(e);
    }
    const handleAdress = (e) => {
        setAdress(e);
    }
    const handlePassword = (e) => {
        setPassword(e);
    }
    var db = firebase.firestore();
    const handleSubmit = (e) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)

            .then((userCredential) => {
                db.collection("users").doc(email).set({
                    userName: userName,
                    userLastName: userLastName,
                    phone: phone,
                    email: email,
                    adress: adress,
                    password: password

                })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                console.log("Succes" + user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }


    return (
        <View style={styles.register}>
            <Text style={styles.text}>Register</Text>
            <TextInput style={styles.input} placeholder="User Name"
                onChangeText={handleUserName} />
            <TextInput style={styles.input} placeholder="User LastName"
                onChangeText={handleUserLastName} />
            <TextInput style={styles.input} placeholder="User Phone"
                onChangeText={handlePhone} />
            <TextInput style={styles.input} placeholder="email"
                onChangeText={handleEmail} />
            <TextInput style={styles.input} placeholder="User Adress"
                onChangeText={handleAdress} />
            <TextInput style={styles.input} secureTextEntry={true} type="password" placeholder="password"
                onChangeText={handlePassword} />
            <View style={styles.button}>
                <Button
                    title="Inscription"
                    color="#f194ff"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    register: {
        margin: 15,
        color: "red"
    },
    input: {
        height: 45,
        borderColor: "black",
        borderWidth: 1,
        margin: 15,
        padding: 5
    },
    button: {
        margin: 5,
    },
    text: {
        alignSelf: 'center'
    }
});

export default Register;
