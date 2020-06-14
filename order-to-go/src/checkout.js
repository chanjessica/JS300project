import React from 'react';
import firebase from 'firebase';

const db = firebase.firestore();

export default class Checkout extends React.Component {
    state = {
        isSignedIn: false,
        uid: ' ',
        checkout: [],
        newBalance: 0
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });
                if (user) {
                    this.setState({ uid: firebase.auth().currentUser.uid });

                    this.unsubscribe = db
                        .collection('clients')
                        .doc(this.state.uid)
                        .collection('foodToGo')
                        .onSnapshot(snapshot => { this.setState({ checkout: snapshot.docs }); });
                }
            }
        );
    }

    deleteOrder = (id) => (e) => {
        console.log(id);
        e.preventDefault();

        db.collection('clients')
            .doc(this.state.uid)
            .collection('foodToGo')
            .doc(id)
            .delete();
    }

    placeOrder = (cost) => (e) => {
        db.collection('clients')
            .doc(this.state.uid)
            .get()
            .then(data => {
                const newBalance = parseFloat(data.data().balance - cost, 0).toFixed(2);
                alert(`Hi ${data.data().firstName} ${data.data().lastName}, 
                \n$${cost} is deducted from your accountt (balance = $${data.data().balance} ) 
                \nYour new balance is $${ newBalance}
                \n\nThank you for your order! Please logout!`)
                this.setState({ newBalance });
                db.collection('clients').doc(this.state.uid).update({ balance: newBalance });
            });
    }

    render() {
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