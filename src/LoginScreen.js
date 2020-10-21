import React from 'react';
import './App.css';
import {Form, Button} from 'react-bootstrap';

class LoginScreen extends React.Component {

    render() {
        return(
        <div>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username"/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"/>
                </Form.Group>
            </Form>
            <Button onClick={() => this.props.login("John","pass")}>Login</Button>
        </div>
        );
    }

}

export default LoginScreen;