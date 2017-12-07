import React, { Component } from 'react';
import { Media, Button, Modal, Well, Panel } from 'react-bootstrap';

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
            this.handleVolunteerPickup();
        } else {
            this.props.goLogin();
        }
    }

    handleBackClick = () => {
        this.props.goBack();
    }

    handleVolunteerPickup = () => {
        this.props.pickup(false);
    }
    
    handleCenterPickup = () => {
        this.props.pickup(true);
    }

    render() {
        return (
            <div className="result">
                <Button className="back" bsStyle="link" onClick={this.handleBackClick}>{"< Results"}</Button>
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
                <div className="result-pictures">
                    <div style={{width: "43%", paddingTop: "32.25%", margin: "5px", display: "inline-block", backgroundColor:"gray", textAlign: "center"}}>
                        <span>Pic</span>
                    </div>
                    <div style={{width: "43%", paddingTop: "32.25%", margin: "5px", display: "inline-block", backgroundColor:"gray", textAlign: "center"}}>
                        <span>Map</span>
                    </div>
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
                <p><span className="accept">accepts: </span><span>{this.props.data.accepts}</span></p>
                <p><span className="accept">doesn't accept: </span><span>{this.props.data.no}</span></p>
                { !this.props.loggedIn &&
                    <Panel header={'Stop!'} bsStyle="danger">
                        You have to be logged in to schedule a pickup! Clicking this schedule button will prompt you to login and return you to this page.
                    </Panel>
                }
                <Button bsStyle="primary" onClick={this.handleRequestPickup}>schedule pickup</Button>
            </div>
        );
    }
}

export default Result;

