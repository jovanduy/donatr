import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

// Profile page component!
class Profile extends Component {

    constructor() {
        super();
        // this state basically just holds the values for whether or 
        // not each thing should be expanded
        this.state = {
            schedule: false,
            benefits: false,
            history: false,
            settings: false
        };
    }

    // callback to toggle whether the schedule section is expanded
    // by setting state.schedule to the opposite of whatever it
    // previously was
    toggleSchedule = () => {
        this.setState((prevState, props) => {
            return {
                schedule: !prevState.schedule
            };
        });
    }

    toggleBenefits = () => {
        this.setState((prevState, props) => {
            return {
                benefits: !prevState.benefits
            };
        });
    }

    toggleHistory = () => {
        this.setState((prevState, props) => {
            return {
                history: !prevState.history
            };
        });
    }

    toggleSettings = () => {
        this.setState((prevState, props) => {
            return {
                settings: !prevState.settings
            };
        });
    }


    render() {
        return (
            <div className="profile">
                <p className="username">{this.props.username[0]}</p>
                <p className="welcome">{ 'Welcome back, ' + this.props.username + '.'}</p>
                <ListGroup>
                    <ListGroupItem onClick={this.toggleSchedule}>
                        Scheduled pickups
                        <span className="arrow">{this.state.schedule ? '∨' : '>'}</span>
                    </ListGroupItem>
                    <Panel collapsible expanded={this.state.schedule}>
                        Hifdskal
                    </Panel>
                    <ListGroupItem onClick={this.toggleBenefits}>
                        Donation benefits overview
                        <span className="arrow">{this.state.benefits ? '∨' : '>'}</span>
                    </ListGroupItem>
                    <Panel collapsible expanded={this.state.benefits}>
                        You've donated
                        <h2>$475</h2>
                        worth of tax deductions.
                        <p className="details">What does this mean?</p>
                        <p className="more-info">view benefit breakdown</p>
                    </Panel>
                    <ListGroupItem onClick={this.toggleHistory}>
                        Donation history
                        <span className="arrow">{this.state.history ? '∨' : '>'}</span>
                    </ListGroupItem>
                    <Panel collapsible expanded={this.state.history}>
                        <span className="section">September 25, 2017</span>
                            <br/>
                            <span className="section">Donation to</span>
                            <span className="section-details">Goodwill, Jamaica Plain, MA</span>
                            <br/>
                            <span className="section">Goods donated</span>
                            <span className="section-details">blue couch, bag of clothing</span>
                            <br/>
                            <span className="section">Benefits accrued</span>
                            <span className="section-details">tax deductible donation valued at $400</span>

                        <p className="more-info">view more</p>
                    </Panel>
                    <ListGroupItem onClick={this.toggleSettings}>
                        Settings
                        <span className="arrow">{this.state.settings ? '∨' : '>'}</span>
                    </ListGroupItem>
                    <Panel collapsible expanded={this.state.settings}>
                        You've donated a lot
                    </Panel>
                    <ListGroupItem bsStyle="danger" onClick={this.props.logout}>Logout</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Profile;

