import React, { Component } from 'react';
import { Breadcrumb, Button, ControlLabel, FormGroup, FormControl, FieldGroup } from 'react-bootstrap';

const employeeText = "An employee of the donation center will meet you at the specified location to pickup your items and bring them to the center.";
const volunteerText = "A volunteer, who is unafilliated with the donation center or Donatr, but is just another user of Donatr, will meet you at the specified location to pickup your items and bring them to the center.";

const employeeItem = "Please leave enough detail so the employee is prepared!";
const volunteerItem = "Please leave enough detail so the volunteer is prepared!";

class SchedulePickup extends Component {

    constructor() {
        super();
        this.togglePickup = this.togglePickup.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    togglePickup() {
        this.props.togglePickup();
    }


    handleBackClick() {
        this.props.goBack();
    }

    render() {
        return (
            <div className="schedule-pickup">
                <Button className="back" bsStyle="link" onClick={this.handleBackClick}>{"< Result"}</Button>
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
                </form>
                <Button bsStyle="primary" className="pickup-submit">Submit</Button>
            </div>
        );
    }
}

export default SchedulePickup;

