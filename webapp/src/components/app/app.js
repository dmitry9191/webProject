import React, {Component} from 'react';
import Header from '../header';
import Waiting from '../waiting';
import Optimization from '../optimization';
import Finish from '../finish';

export default class App extends Component {

    render() {  
        return (
            <div>
                <Header/>
                <Waiting/>
                <Optimization/>
                <Finish/>
            </div>
        )
    }
}