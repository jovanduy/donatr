import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// displays when you are first taken to our app 
// to choose which version to run
class SelectVersion extends Component {
    selectControl = () => {
        this.props.select(1);
    }
    selectGhost = () => {
        this.props.select(2);
    }

    selectMad = () => {
        this.props.select(3);
    }


    render() {
        return (
            <div className="version-selector">
                <Button block bsStyle="default" onClick={this.selectControl()} >
                    control
                </Button>
                <Button block bsStyle="primary" onClick={this.selectGhost()} >
                    ghost text
                </Button>
                <Button block bsStyle="success" onClick={this.selectMad()} >
                    mad libs
                </Button>
            </div>
        );
    }
}

export default SelectVersion;

