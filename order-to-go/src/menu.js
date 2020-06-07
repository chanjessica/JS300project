import React from 'react';
import MenuEntries from './menuEntries';
import Checkout from './checkout';
import firebase from 'firebase';

export default class Menu extends React.Component {
    // console.log(this.props);

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
                        {/* {isSignedIn && <Checkout />} */}
                    </div>
                </div>
            </div>
        )
    }
}