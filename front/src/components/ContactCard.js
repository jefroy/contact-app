import React from 'react';
import {Button, Icon, Image, List} from "semantic-ui-react";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
    let {id, name, email, avatar} = props.contact;
    return (
        <List.Item>
            <Image avatar src={avatar} />
            <List.Content>
                <Link to={
                    {
                        pathname: `/contact/${id}`, // will match the path as the route in App.js
                        state: { contact: props.contact} // pass these props into that comp from App.js route (ContactDetail)
                    }
                }>
                    <List.Header>{id.substring(0,4)} - {name}</List.Header>
                    <List.Description as='a'>{email}</List.Description>
                </Link>
            </List.Content>
            <List.Content style={{paddingRight: '70%'}} floated={'right'}>
                <Icon link name='close' onClick={() => props.clickHandler(id)}/>
                <Link to={  {pathname: `/edit`, state: {contact: props.contact}}  }>
                    <Icon link name='edit' />
                </Link>
            </List.Content>
        </List.Item>
    );
}

export default ContactCard;
