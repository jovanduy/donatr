import React, { Component } from 'react';

// displays the header that appears on every page
// including the DONATR button/text
// and also the Login/Profile icon depending on whether the user is logged in
class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="donatr" onClick={this.props.goHome}>DONATR</span>
                {
                    this.props.loggedIn ? 
                    <span className="fa fa-user-circle-o header-right" onClick={this.props.goProfile}></span>
                    :
                    <span className="login header-right" onClick={this.props.goLogin}>Login</span>
                }
            </header>
        );
    }
}

export default Header;

