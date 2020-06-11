import React from 'react';
import MenuEntries from './menuEntries';
import Checkout from './checkout';
import firebase from 'firebase';

const db = firebase.firestore();

export default class Menu extends React.Component {
    state = {
        isSignedIn: false,
    }
    componentDidMount() {
        // const signedIn = firebase.auth().currentUser.uid != null ? true : false;

        // this.setState({ isSignedIn: signedIn });
        // console.log(signedIn);

        this.unsubscribe = db.collection('foodToGo')
            .onSnapshot(snapshot => { this.setState({ entries: snapshot.docs }); });
    }
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        // console.log(firebase.auth().currentUser);
        return (
            <div className="container">
                <div className="row">
                    <h1>Login and place your order</h1>
                    <div className="col-md-8"><MenuEntries /></div>
                    {/* <div className="col-md-4"> <Checkout data={MenuEntries.orderArray} /></div> */}
                    <div className="col-md-4">
                        <Checkout />
                        {/* {this.state.isSignedIn && <Checkout />} */}
                    </div>
                </div>
            </div>
        )
    }
}