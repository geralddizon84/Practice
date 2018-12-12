import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import '../Css/Home.css';
import '../Css/Nav.css';
import logo from '../Images/GuamPowerLogo.png';


class Home extends Component {
  render() {
    return (
        <React.Fragment>
        <div style={{flexGrow: 1}}>
            <AppBar position="static" style={{backgroundColor:"white"}}>
            <Toolbar>
                <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                <ul>
                    <Link to ="/">
                        <img class = "logo" src = {logo}></img>
                    </Link>   
                </ul>
                </Typography>
                <ul>
                    <Link to ="/">
                    </Link>
                    <Link to ="/Contact">
                    
                    </Link>
                    <Link to ="/AboutUs">
                        <li>HOME</li>
                    </Link>
                    <Link to ="/Profile">
                        <li>WHAT WE DO</li>
                    </Link>
                    <Link to ="/Profile">
                        <li>LOGIN</li>
                    </Link>
                    <Link to ="/Profile">
                        <li class="fas fa-search"></li>
                    </Link>
                </ul>
             </Toolbar>
            </AppBar>
        </div>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                <div class = "bgMain">
                    <Row center="lg" center = "xs">
                        <div class = " ">
                            <p class = "mainTitle" >LOREM IPSUM</p>
                            <hr/>
                            <p class = "sideTitle" >BRINGING ENERGY SOLUTIONS TO YOU</p>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={4} xs={12}>
                <p>Gerald</p>
            </Col>
            <Col lg={4} xs={12}>
                <p>Gerald</p>
            </Col>
            <Col lg={4} xs={12}>
                <p>Gerald</p>
            </Col>
        </Row>

        </React.Fragment>
        
        /*<React.Fragment>
            <Grid>
                <Row>
                    <Col sm={12} xs ={12} lg={false} md={false} style={{textAlign: 'center'}}>
                        <ul>
                            <Link to ="/">
                                <img class = "logo" src = {logo}></img>
                            </Link>   
                        </ul>
                    </Col>
                    <Col sm={false} xs={false} lg={2} md = {4}>
                        <ul>
                            <Link to ="/">
                                <img class = "logo" src = {logo}></img>
                            </Link>   
                        </ul>
                    </Col>
                    <Col lg={3} xs = {4} md = {4}>
                    </Col>
                    <Col lg={7} xs = {4} md = {4}>
                            <Link to ="/">
                            </Link>
                            <Link to ="/Contact">
                                <li>WHO WE ARE</li>
                            </Link>
                            <Link to ="/AboutUs">
                                <li>OUR BRANDS</li>
                            </Link>
                            <Link to ="/Profile">
                                <li>OUR COMMITMENT</li>
                            </Link>
                            <Link to ="/Profile">
                                <li>CAREER</li>
                            </Link>
                            <Link to ="/Profile">
                                <li>INVESTORS</li>
                            </Link>
                            <Link to ="/Profile">
                            </Link>
                    </Col>
                </Row>
            </Grid>
                
            </React.Fragment>*/
    );
  }
}

export default Home;
