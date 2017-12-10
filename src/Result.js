import React, { Component } from 'react';
import { Media, Button, Panel, Image } from 'react-bootstrap';
import map from './imgs/map.png';
import place from './imgs/location.png';

// component for an individual result page
class Result extends Component {
    constructor() {
        super();
        this.state = {
            modal: false
        };
    }

    handleRequestPickup = () => {
        if (this.props.loggedIn) {
            this.props.pickup();
        } else {
            this.props.goLogin();
        }
    }

    handleBackClick = () => {
        this.props.goBack();
    }

    render() {
        return (
            <div className="result">
                <Button className="back" bsStyle="link" onClick={this.handleBackClick}>{"< Results list"}</Button>
                <Media>
                    <Media.Left>
                        <div style={{width: "100px", height: "100px", backgroundColor:"gray", borderRadius: "50px", textAlign: "center"}}>
                            <span style={{lineHeight: "100px"}}>Logo</span>
                        </div>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>
                            <span className="res-title">{this.props.data.title}</span>
                            <span className="dist">{this.props.data.distance}</span>
                        </Media.Heading>
                        <a className="phone">{this.props.data.phone}</a>
                        <p className="address">{this.props.data.address}</p>
                    </Media.Body>
                </Media>
            <Image className="result-img" src={map} />
            <Image className="result-img" src={place} />

                <div className="result-info">
                    <p><span className="accept">accepts: </span><span>{this.props.data.accepts}</span></p>
                    <p><span className="accept">doesn't accept: </span><span>{this.props.data.no}</span></p>
                </div>
                <div className="hours">
                    <p className="bold">Hours:</p>
                    <p>S 7:00am - 5:00pm</p>
                    <p>M 7:00am - 5:00pm</p>
                    <p>T 7:00am - 5:00pm</p>
                    <p>W 7:00am - 5:00pm</p>
                    <p>T 7:00am - 5:00pm</p>
                    <p>F 7:00am - 5:00pm</p>
                    <p>S 7:00am - 5:00pm</p>
                </div>
                { this.props.loggedIn 
                    ? <Button bsStyle="primary" onClick={this.handleRequestPickup} className="schedule-pickup-btn">schedule pickup</Button>
                    : <Panel header={'Stop!'} bsStyle="danger" className="login-warning">
                        <p>You have to be logged in to schedule a pickup! Clicking this schedule button will prompt you to login and return you to this page.</p>
                        <Button bsStyle="primary" onClick={this.handleRequestPickup} className="schedule-pickup-btn">schedule pickup</Button>
                    </Panel>
                }
            </div>
        );
    }
}

export default Result;

