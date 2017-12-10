import React, { Component } from 'react';

// this component basically just renders the home page text
class Home extends Component {
    render() {
        return (
            <div className="home">
                <p className=" description about">
                    Can’t take your donations to a donation center?
                </p>
                <p className="description">
                    We'll help you make a difference!
                </p>
                <p className="description">
                    DONATR connects donors like you to volunteers who pickup your donations and deliver them to local organizations. <span className="learn-more">Learn more about us.</span>
                </p>
                <p className="description get-started">
                    What do you want to donate? Where? 
                </p>
            </div>
        );
    }
}

export default Home;

