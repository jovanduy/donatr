import React, { Component } from 'react';

// this component basically just renders the home page text
class Home extends Component {
    render() {
        return (
            <div className="home">
                <p className=" description about">
                    Can’t take your donations to a donation center?
                </p>
                <p className="description get-started">
                    What do you want to donate? Where? 
                </p>

                <p className="description get-started">
DONATR connects donors like you to volunteers who deliver donations to local organizations.
                </p>
            </div>
        );
    }
}

export default Home;

