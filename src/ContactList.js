import React from "react";
import './App.css';
import {Form, Button} from 'react-bootstrap';

import "./App.css";

class ContactList extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addContact(contact) {
    var timestamp = new Date().getTime();
    contact['key'] = timestamp;
    console.log('BEFORE: this.state.contacts: '+ this.state.contacts.length);
    // update the state object
    this.state.contacts.push(contact);
    // set the state
    this.setState({ contacts: this.state.contacts });
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;
    
    var contact = {
      name : name,
      phone : phone,
      email : email
    };
    this.props.addContact(contact);
  }

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-3">
            <input type="text" name="name" className="form-control" id="nameInput" placeholder="Name" />
          </div>
          <div className="col-md-3">
            <input type="text" name="phone" className="form-control" id="phoneInput" placeholder="Phone" />
          </div>
          <div className="col-md-3">
            <input type="email" name="email" className="form-control" id="emailInput" placeholder="Email" />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-plus"></i>Add</button>
          </div>
        </div>
      </form>
        <p>To be added...</p>
      </>
    );
  }
}

export default ContactList;