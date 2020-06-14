import React from 'react';
import firebase from 'firebase';

// function logout() {
//     console.log(firebase.auth().currentUser);
//     firebase.auth().signOut();
//     console.log(firebase.auth().currentUser);

//     return (
//         <div>successful logout</div>
//     )
// }
const db = firebase.firestore();
class logout extends React.Component {
    state = {
        isSignedIn: false,
        checkout: []
    }
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });
                if (user) {
                    this.setState({ uid: firebase.auth().currentUser.uid });
                    // console.log(this.state.uid);

                    this.unsubscribe = db
                        .collection('clients')
                        .doc(this.state.uid)
                        .collection('foodToGo')
                        .onSnapshot(snapshot => { this.setState({ checkout: snapshot.docs }); });
                }
            }
        );
        firebase.auth().signOut();
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        this.state.checkout.map(entry =>
            db.collection('clients')
                .doc(this.state.uid)
                .collection('foodToGo')
                .doc(entry.id)
                .delete()
        )
        return (
            < div > successful logout</div >
        )
    }
}

export default logout;




