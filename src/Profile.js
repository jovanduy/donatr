import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

class Profile extends Component {

    constructor() {
        super();
        this.toggleSchedule = this.toggleSchedule.bind(this);
        this.toggleBenefits = this.toggleBenefits.bind(this);
        this.toggleHistory = this.toggleHistory.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.state = {
            schedule: false,
            benefits: false,
            history: false,
            settings: false
        };
    }

    toggleSchedule() {
        this.setState((prevState, props) => {
            return {
                schedule: !prevState.schedule
            };
        });
    }

    toggleBenefits() {
        this.setState((prevState, props) => {
            return {
                benefits: !prevState.benefits
            };
        });
    }

    toggleHistory() {
        this.setState((prevState, props) => {
            return {
                history: !prevState.history
            };
        });
    }

    toggleSettings() {
        this.setState((prevState, props) => {
            return {
                settings: !prevState.settings
            };
        });
    }


    render() {
        return (
            <div className="profile">
                <p>{this.props.username[0]}</p>
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
                        You've donated a lot
                    </Panel>
                    <ListGroupItem onClick={this.toggleHistory}>
                        Donation history
                        <span className="arrow">{this.state.history ? '∨' : '>'}</span>
                    </ListGroupItem>
                    <Panel collapsible expanded={this.state.history}>
                        You've donated a lot
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

