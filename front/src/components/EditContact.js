import React from 'react';
import { Form, Container } from 'semantic-ui-react';

const avatarOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'https://react.semantic-ui.com/images/avatar/large/stevie.jpg',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'https://react.semantic-ui.com/images/avatar/large/christian.jpg',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Buster',
        text: 'Buster',
        value: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
        image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/steve.jpg' },
    },
]

class EditContact extends React.Component{
    constructor(props) {
        super(props);
        const {id, name, email, avatar} = props.location.state.contact;
        this.state = {id, name, email, avatar};
    }
    state = {name: '', email: '', avatar: ''}

    handleChange = (e, {name, value}) => { // name => name attr from Form, value => value attr from Form
        this.setState(
            {[name]: value}
        );
    }

    handleSubmit = () => {
        const { name, email, avatar } = this.state
        this.setState({ name: name, email: email , avatar: avatar })
        this.props.updateContactHandler(this.state);
        this.setState({name: "", email: "", avatar: ""})
        this.props.history.push("/");
    }

    render() {
        return(
            <div>
                <Container textAlign='center'>
                    <h2>Add Contact</h2>
                    {this.printForm()}
                </Container>
            </div>
        );
    }

    printForm(){
        const { name, email, avatar } = this.state
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
                    <Form.Select
                        fluid
                        name={'avatar'}
                        label='Avatar 👥'
                        value={avatar}
                        options={avatarOptions}
                        placeholder='Avatar'
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Button content='Update Contact' />
            </Form>
        );
    }

}

export default EditContact;
