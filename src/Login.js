import React, { Component } from 'react';
import { FormGroup, Button, FormControl } from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username: ''
        };
    }

    handleUsernameChange(e) {
        const name = e.target.value;
        if (name) {
            this.setState({
                username: name
            });
        }
    }

    handleLogin() {
        const name = this.state.username ? this.state.username : 'user';
        this.props.login(name);
    }

    render() {
        return(
            <div className="login-form-div">
            <form className="login-form">
                <FormGroup controlId="username">
                    <FormControl
                        type="text"
                        placeholder="username"
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormControl
                        type="password"
                        placeholder="password"
                    />
                </FormGroup>

                <Button block className="login-button" onClick={this.handleLogin}>
                    login
                </Button>
                <Button block className="facebook login-button" onClick={this.handleLogin}>
                    <span className="fa fa-facebook-official"></span>  Login with Facebook
                </Button>
                <Button block className="google login-button" onClick={this.handleLogin}>
                    <span className="fa fa-google-plus"></span>  Sign in with Google
                </Button>
            </form>
            </div>
        );
    }
}

export default Login;

