import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel, Table, Image, Button, Media, Label } from 'react-bootstrap';

// Pickup Success page component
class PickupSuccess extends Component {

    render() {
        return (
            <div className="profile pickup-success">
                <h3 style={{display: "block", textAlign: 'center', margin: 'auto', display: 'table'}}><Label bsStyle="success">Successfully scheduled pickup!</Label></h3>
                <br />
                <p>Your next pickup is</p>
                <h2 className="date">Dec. 15 at 12pm</h2>
                <Media>
                    <Media.Left>
                        <span className="profile fa fa-user-circle-o"></span>
                    </Media.Left>
                    <Media.Body>
                        <span className="section">Your driver is</span>
                        <br />
                        <span>Amon M.</span>
                    </Media.Body>
                    <Media.Right>
                        <Button bsStyle="primary" className="schedule-pickup-btn">contact driver</Button>
                    </Media.Right>
                </Media>
                <span className="section">Pickup address</span>
                <br />
                <span>1000 Olin Way, Needham, MA 02492</span>
                <br />
                <Button bsStyle="primary" className="schedule-pickup-btn">edit pickup</Button>
            </div>
        );
    }
}

export default PickupSuccess;

