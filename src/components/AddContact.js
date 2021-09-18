import React from 'react';
import {Button, Checkbox, Form, Container, Card} from 'semantic-ui-react';
import {logDOM} from "@testing-library/react";

class AddContact extends React.Component{
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state
        this.setState({ submittedName: name, submittedEmail: email })
    }

    render() {
        return(
            <div>
                <Container textAlign='center'>
                    <h2>Add Contact</h2>
                    {this.printForm()}
                    {console.log(this.state)}
                </Container>
            </div>
        );
    }

    printForm(){
        const { name, email, submittedName, submittedEmail } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group unstackable widths={2}>
                    <Form.Input
                        label='First Name 👨'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label={'e-mail 📧'}
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button content='Submit' />
            </Form>
            // <strong>onChange:</strong>
            // <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
            // <strong>onSubmit:</strong>
            // <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
        );
    }

}

export default AddContact;
