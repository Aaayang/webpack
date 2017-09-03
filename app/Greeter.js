/*
* @Author: Aaayang
* @Date:   2017-09-03 21:39:59
* @Last Modified by:   Aaayang
* @Last Modified time: 2017-09-03 22:40:42
*/

// CommonJS规范
var config = require('./config.json');

import React, { Component } from 'react';

import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter;