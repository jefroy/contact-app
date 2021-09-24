import React from 'react';
import { Form, Container } from 'semantic-ui-react';

class AddContact extends React.Component{
    state = {
        name: '', email: '', img: '',
        submittedName: '', submittedEmail: '', submittedImg: ''
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        this.state.img = 'https://react.semantic-ui.com/images/avatar/large/steve.jpg';
        const { name, email, img } = this.state
        this.setState({ submittedName: name, submittedEmail: email , submittedImg: img })
        this.props.addContactHandler(this.state);
        this.setState({submittedName:"", submittedEmail: "", name: "", email: "", img: ""})
        this.props.history.push("/");
    }

    render() {
        return(
            <div>
                <Container textAlign='center'>
                    <h2>Add Contact</h2>
                    {this.printForm()}
                    {/*{console.log(this.state)}*/}
                </Container>
            </div>
        );
    }

    printForm(){
        const { name, email, img } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group unstackable widths={2}>
                    <Form.Input
                        label='First Name 👨'
                        placeholder='Name'
                        name='name'
                        value={name}
                        type={'text'}
                        required
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label={'e-mail 📧'}
                        placeholder='Email'
                        name='email'
                        value={email}
                        required
                        type={'email'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button content='Add Contact' />
            </Form>
        );
    }

}

export default AddContact;
