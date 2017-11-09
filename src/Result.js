import React, { Component } from 'react';
import { Media, Button, Modal } from 'react-bootstrap';

// component for an individual result page
class Result extends Component {
    constructor() {
        super();
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleVolunteerPickup = this.handleVolunteerPickup.bind(this);
        this.handleCenterPickup = this.handleCenterPickup.bind(this);
        this.handleRequestPickup = this.handleRequestPickup.bind(this);
        this.state = {
            modal: false
        };
    }

    handleRequestPickup() {
        if (this.props.loggedIn) {
            this.showModal();
        } else {
            this.props.goLogin();
        }
    }

    showModal() {
        this.setState({modal: true});
    }

    closeModal() {
        this.setState({modal: false});
    }

    handleBackClick() {
        this.props.goBack();
    }

    handleVolunteerPickup() {
        this.props.pickup(false);
    }
    
    handleCenterPickup() {
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
                <div style={{width: "40%", paddingTop: "30%", margin: "5px", display: "inline-block", backgroundColor:"gray", textAlign: "center"}}>
                    <span>Pic</span>
                </div>
                <div style={{width: "40%", paddingTop: "30%", margin: "5px", display: "inline-block", backgroundColor:"gray", textAlign: "center"}}>
                    <span>Map</span>
                </div>
                <p><span className="accept">accepts: </span><span>{this.props.data.accepts}</span></p>
                <p><span className="accept">doesn't accept: </span><span>{this.props.data.no}</span></p>
                <Button bsStyle="primary" onClick={this.handleRequestPickup}>schedule pickup</Button>
                <Modal show={this.state.modal} onHide={this.closeModal}>
                    <Modal.Header>
                        <Modal.Title>Schedule Pick-up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button block onClick={this.handleVolunteerPickup}>Volunteer Pick-up</Button>
                        <Button block onClick={this.handleCenterPickup}>Center Pick-up</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button block onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Result;

