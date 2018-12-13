import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import logo from '../Images/GuamPowerLogo.png';
import '../Css/Home.css';


class Home extends Component {
  render() {
    return (
        <React.Fragment>
            <Col>
                <Row>
                    <AppBar  style={{backgroundColor:"white"}}>
                        <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            <Link to ="/"></Link>
                            <img className = "logo" src = {logo}></img>
                        </Typography>
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
                            <li className="fas fa-search"></li>
                        </Link>     
                        </Toolbar>
                    </AppBar>
                </Row>
            </Col>
            <Col> 
                <Row>
                <div style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80), linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.54))',
                        backgroundSize: 'cover, cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                        width: '100%',
                        textAlign: 'center',
                        paddingTop: 100,
                        paddingBottom: 100,
                        height: 200
                    }}>
                        <p className="mainTitle">LOREM IPSUM</p>
                        <hr style={{width:'50%'}}/>
                        <p className="sideTitle">LOREM IPSUM</p>
                    </div>
                </Row>
            </Col>
        <Col>
            <Grid fluid>
                <Row>
                    <Col style={{paddingTop:10, paddingBottom:10}} xs={12} sm={12} md={4} lg={4}>
                        <p style={{textAlign:"center", }}>lorem ipsum</p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} style={{paddingTop:10, paddingBottom:10}}>
                        <p style={{textAlign:"center"}}>lorem ipsum</p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} style={{paddingTop:10, paddingBottom:10}}>
                        <p style={{textAlign:"center"}}>lorem ipsum</p>
                    </Col>
                </Row>
            </Grid>
        </Col>
        <Col>
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} >
                        <div style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80), linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.54))',
                            backgroundSize: 'cover, cover',
                            backgroundPosition: 'center',
                            backgroundBlendMode: 'multiply',
                            width: '100%',
                            textAlign: 'center',
                            paddingTop: 100,
                            paddingBottom: 100,
                            height: 200
                        }}>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div>
                            <p style={{fontSize:40, margin:0}}>LOREM IPSUM</p>
                            <hr style={{width:'50%',textAlign:'left'}}/>
                            <p style={{fontSize:20, marginTop:'0'}}>LOREM IPSUM</p>
                            <p style={{}}>LOREM IPSUM</p>
                            <h4>LOREM IPSUM</h4>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </Col>
        
        <Col style={{backgroundColor:"red"}}>
            <Grid fluid>
                <Row>
                    <Col>
                        <div style={{padding:" 20px  0px"}}>All rights reserved</div>
                    </Col>
                </Row>
            </Grid>
        </Col>

        </React.Fragment>


    );
  }
}

export default Home;
