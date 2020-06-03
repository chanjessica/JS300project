import React from 'react';
import firebase from 'firebase';

function logout() {
    console.log(firebase.auth().currentUser);
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);

    return (
        <div>successful logout</div>
    )
}

export default logout;




