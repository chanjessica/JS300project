import React from 'react';
import firebase from 'firebase';

const db = firebase.firestore();

// db.collection('journalEntries').doc('yY1FbU9zMJI4elJPFfAN').update({ name: '' })
// const newValue = prompt('What is your entry?', 'default value');

export default class MenuEntries extends React.Component {

    state = {
        isSignedIn: false,
        entries: []
    }

    componentDidMount() {
        this.unsubscribe = db.collection('foodToGo')
            .onSnapshot(snapshot => { this.setState({ entries: snapshot.docs }); });
    }
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    buyIt = (item) => (e) => {
        console.log(firebase.auth().currentUser.uid);

        const signedIn = firebase.auth().currentUser.uid != null ? true : false;

        this.setState({ isSignedIn: signedIn });
        console.log(signedIn);

        console.log(item);
        e.preventDefault();
        const uid = firebase.auth().currentUser.uid;

        console.log(uid);

        db.collection('clients').doc(uid)
            .collection('foodToGo').add({
                orderDate: new Date(),
                dish: item.dish,
                price: item.price
            })
    }

    render() {
        // this.state.entries.map(entry => console.log(entry.data()));  //return array 
        console.log(this.state.isSignedIn);


        const listItems = this.state.entries.map(entry =>
            <tr key={entry.id}>
                <td> {entry.data().dish} </td>
                <td> ${entry.data().price}</td>
                {/* {this.state.isSignedIn && */}
                <td>  <button onClick={this.buyIt(entry.data())} type="submit">order it</button> </td>
                {/* } */}
            </tr>);

        return (
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Entry</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table >
        )
    }
}