import React, { Component } from 'react';
import xrp from './assets/xrp.jpeg'
import crypto from './assets/crypto.jpg'
import eth from './assets/eth.png'

export class App extends Component {
    render() {
        return <div>
            <h1>Hello from Class Component !!!!!</h1>
            <img src={xrp} alt=""/>
            <img src={crypto} alt=""/>
            <img src={eth} alt=""/>
        </div>
    }
}

export default App;