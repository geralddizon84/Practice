import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import '../../App.css';
import '../Css/Nav.css';

class Contact extends Component {
  render() {
    return (
        <div>
            <ul>
                <Link to ="/">
                    <li class = "rightLogo">Icon</li> 
                </Link>
                <Link to ="/">
                    <li><span class = "homeBtn">Home</span></li> 
                </Link>
                <Link to ="/Contact">
                    <li>Contact</li>
                </Link>
                <Link to ="/AboutUs">
                    <li>About us</li>
                </Link>
                <Link to ="/Profile">
                    <li>Profile</li>
                </Link>
            </ul>
        </div>
    );
  }
}

export default Contact;
