import React, {Component} from 'react';
import Header from '../header';
import Waiting from '../waiting';
import Optimization from '../optimization';
import Finish from '../finish';
import Gifts from '../gifts';
import Webinar from '../webinar';
import Footer from '../footer';

export default class App extends Component {

    render() {  
        return (
            <div>
                <Header/>
                <Waiting/>
                <Optimization/>
                <Finish/>
                <Gifts/>
                <Webinar/>
                <Footer/>
            </div>
        )
    }
}