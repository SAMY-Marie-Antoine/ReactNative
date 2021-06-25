import React, { useState } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';


function Home() {
    const [users, setUsers] = useState([]);

    var db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
        var docs = Array();
        querySnapshot.forEach((doc) => {
            var single = Array(doc.id, doc.data())
            docs.push(single)
        });
        setUsers(docs)
    });
    
    return (
        <View style={styles.users}>
            {
                users.map((e) => {
                    return (
                        <View>
                            <tr>
                                <td><Text style={styles.text}>Identifiant: {e[0]}</Text></td><br/>
                                <td><Text style={styles.text2}>user Name: {e[1].userName}</Text></td><br/>
                                <td><Text style={styles.text2}>user LastName: {e[1].userLastName}</Text></td><br/>
                                <td><Text style={styles.text2}>user Phone: {e[1].phone}</Text></td><br/>
                                <td><Text style={styles.text2}>user Email: {e[1].email}</Text></td><br/>
                                <td><Text style={styles.text2}>user Adress: {e[1].adress}</Text></td><br/>
                            </tr>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = {
    users: {
        borderColor: "black",
        borderWidth: 2,
        margin: 15,
        padding: 5
    },
    text: {
        borderColor: "black",
        borderWidth: 2,
        align: 'center'
    },
    text2: {
        backgroundColor: "green",
    }
};

export default Home;