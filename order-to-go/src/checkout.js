import React from 'react';
import firebase from 'firebase';

const db = firebase.firestore();

export default class Checkout extends React.Component {
    state = {
        isSignedIn: false,
        uid: ' ',
        checkout: [],
        profile: []
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });
                console.log(this.state.isSignedIn);
                console.log(user);
                console.log(this.props.history);
                if (user) {
                    this.setState({ uid: firebase.auth().currentUser.uid });
                    console.log(this.state.uid);

                    this.unsubscribe = db
                        .collection('clients')
                        .doc(this.state.uid)
                        // .doc('c1sbmzh62uhSP8ChIeDlIehj7Va2')
                        .collection('foodToGo')
                        .onSnapshot(snapshot => { this.setState({ checkout: snapshot.docs }); });
                }
                // else {
                //     this.props.history.push('/')
                // }
            }
        );
    }

    deleteOrder = (id) => (e) => {
        console.log(id);
        e.preventDefault();

        db.collection('clients')
            .doc(this.state.uid)
            // .doc('c1sbmzh62uhSP8ChIeDlIehj7Va2')
            .collection('foodToGo')
            .doc(id)
            .delete();
    }

    placeOrder = (cost) => (e) => {
        alert(`total cost ${cost}`);
        e.preventDefault();
        // return (e) => {
        //     alert(`total cost ${cost}`);
        // }
    }

    render() {
        console.log(firebase.auth().currentUser);
        console.log(this.state.checkout);

        const listItems = this.state.checkout.map(entry =>
            <li key={entry.id}>
                {entry.data().dish}    ${entry.data().price}
                <button onClick={this.deleteOrder(entry.id)} type="button" className="btn-info btn-xs float-right"> Remove</button>
            </li>
        );

        const cost = this.state.checkout.reduce((total, entry) => parseFloat(total) + parseFloat(entry.data().price), 0).toFixed(2);

        return (
            <>
                <h4>Your Cart:</h4>
                <ol>
                    {listItems}
                </ol>
                <div className="total">
                    <h5>Total = ${cost}
                        <button onClick={this.placeOrder(cost)} type="button" className="btn btn-xs btn-warning float-right">Place Order</button></h5>
                </div>
            </>
        )
    }
}