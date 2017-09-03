/*
* @Author: Aaayang
* @Date:   2017-09-03 21:40:17
* @Last Modified by:   Aaayang
* @Last Modified time: 2017-09-03 22:15:31
*/


import React, { Component } from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.js';

import "./main.css";

render(
    <Greeter/>,
    document.querySelector("#root")
);