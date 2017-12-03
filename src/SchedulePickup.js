import React, { Component } from 'react';
import { Breadcrumb, Button, ControlLabel, FormGroup, FormControl, FieldGroup, ListGroup, ListGroupItem, Modal, Label } from 'react-bootstrap';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const employeeText = "An employee of the donation center will meet you at the specified location to pickup your items and bring them to the center.";
const volunteerText = "A volunteer, who is unafilliated with the donation center or Donatr, but is just another user of Donatr, will meet you at the specified location to pickup your items and bring them to the center.";

const employeeItem = "Please leave enough detail so the employee is prepared!";
const volunteerItem = "Please leave enough detail so the volunteer is prepared!";


BigCalendar.momentLocalizer(moment);
class SchedulePickup extends Component {

    constructor() {
        super();
        this.togglePickup = this.togglePickup.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.confirmPickup = this.confirmPickup.bind(this);
        this.state = {
            modal: false,
            date: null,
            labelStyle: {display: "none"}
        };
    }

    // callback to show the modal dialog
    showModal() {
        this.setState({modal: true, labelStyle: {display: "none"}});
    }

    // callback to close the modal dialog
    // called when the cancel button of the dialog is pressed
    closeModal() {
        this.setState({modal: false});
    }

    // callback for when user presses the "use other kind of pickup" button
    // in order to toggle the type of pickup (employee/center vs. volunteer)
    togglePickup() {
        this.setState({labelStyle: {display: "none"}});
        this.props.togglePickup();
    }

    // callback for when the user clicks confirm in the modal popup
    confirmPickup() {
        this.closeModal();
        this.setState({labelStyle: {display: "block", textAlign: 'center', margin: 'auto', display: 'table'}});
    }

    // callback for when user presses the "back" button
    handleBackClick() {
        this.props.goBack();
    }

    render() {
        return (
            <div className="schedule-pickup">
                <h3 style={this.state.labelStyle}><Label bsStyle="success">Successfully scheduled pickup!</Label></h3>
                <Button className="back" bsStyle="link" onClick={this.handleBackClick} active={false}>{"< Result"}</Button>
                <h4>{this.props.title}</h4>
                <p className="pickup-summary">{this.props.center ? employeeText : volunteerText}</p>
                <Button bsStyle="primary" onClick={this.togglePickup}>{"use" + (this.props.center ? " volunteer" : " employee") + " pickup instead" }</Button>
                <form>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>
                            <p className="pickup-items">Items to be picked up:</p>
                            <p className="pickup-items-summary">{this.props.center ? employeeItem : volunteerItem }</p>
                        </ControlLabel>
                        <FormControl componentClass="textarea" />
                    </FormGroup>
                    <FormGroup controlId="address">
                        <ControlLabel>
                            Pickup location:
                        </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="address"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>
                            Pickup Date
                        </ControlLabel>
                        <FormControl
                            type="date" name="pickup-date"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>
                            Pickup Time Range
                        </ControlLabel>
                        {'From '}
                        <FormControl
                            type="time" name="start-time"
                        />
                        {' to '}
                        <FormControl
                            type="time" name="start-time"
                        />

                    </FormGroup>
                </form>
                <Button bsStyle="primary" className="pickup-submit" onClick={this.showModal}>Submit</Button>
                <Modal show={this.state.modal} onHide={this.closeModal}>
                    <Modal.Header>
                        <Modal.Title>Confirm into</Modal.Title>
                        <p>{(this.props.center ? "Employee" : "Volunteer") + " pick-up"}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup>
                            <ListGroupItem>
                                <p>Items to be picked up:</p>
                                <p className="pickup-items-summary">1 large futon</p>
                                <p className="pickup-items-summary">5 small pillows</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>Address:</p>
                                <p className="pickup-items-summary">1000 Olin Way,</p>
                                <p className="pickup-items-summary">Needham, MA 02492</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>Time:</p>
                                <p className="pickup-items-summary">Sunday, October 29, 2017</p>
                                <p className="pickup-items-summary">12PM - 2PM</p>
                            </ListGroupItem>
                            <ListGroupItem bsStyle="info" onClick={this.confirmPickup}>
                                Confirm
                            </ListGroupItem>
                            <ListGroupItem bsStyle="danger" onClick={this.closeModal}>
                                Cancel
                            </ListGroupItem>
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default SchedulePickup;

