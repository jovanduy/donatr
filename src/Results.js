import React, { Component } from 'react';
import { Media, Image } from 'react-bootstrap';

class Results extends Component {
    constructor() {
        super();
        this.getResults = this.getResults.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    }

    getResults() {
        return this.props.data.map(function(data) {
            return (
                <Media className="resultSummary" onClick={() => this.handleSelection(data)}>
                    <Media.Left>
                        <div style={{width: "100px", height: "100px", backgroundColor: "gray", borderRadius: "50px"}}></div>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>
                            <span className="res-title">{data.title}</span>
                            <span className="dist">{data.distance}</span>
                        </Media.Heading>
                        <p><span bsClass="accept">accepts: </span><span>{data.accepts}</span></p>
                        <p><span bsClass="accept" style={{fontWeight:"700"}}>doesn't accept: </span><span>{data.no}</span></p>
                        <p className="address">{data.address}</p>
                    </Media.Body>
                </Media>
            );
        }.bind(this));
    }

    handleSelection(result) {
        this.props.selectResult(result);
    }

    render() {
        /*let results = this.props.data.map(function(data) {
            return (
                <Media onClick={() => this.selectResult(data)}>
                    <Media.Left>
                        <div style={{width: "100px", height: "100px", backgroundColor: "gray", borderRadius: "50px"}}></div>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>
                            <span className="res-title">{data.title}</span>
                            <span className="dist">{data.distance}</span>
                        </Media.Heading>
                        <p><span bsClass="accept">accepts: </span><span>{data.accepts}</span></p>
                        <p><span bsClass="accept" style={{fontWeight:"700"}}>doesn't accept: </span><span>{data.no}</span></p>
                        <p className="address">{data.address}</p>
                    </Media.Body>
                </Media>
            );
        });*/
        return (
            <div className="results ">
                {this.getResults()}
            </div>
        );
    }
}

export default Results;

