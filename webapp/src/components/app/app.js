import React, {Component} from 'react';
import Header from '../header';
import Waiting from '../waiting';

export default class App extends Component {

    render() {  
        return (
            <div>
                <Header/>
                <Waiting/>
            </div>
        )
    }
}