import React, { Component } from 'react';

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

