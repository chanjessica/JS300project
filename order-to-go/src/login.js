import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// import { render } from '@testing-library/react';

const uiConfig = {
    signInFlow: 'popup',
    // signInSuccessUrl: '/menu',
    signInSuccessUrl: process.env.PUBLIC_URL + '/#/menu',
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
}

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1> Please Login  </h1>
                <p> Sign In:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>


        )
    }
}



