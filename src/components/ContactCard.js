import React from 'react';
import {Button, Icon, Image, List} from "semantic-ui-react";

const ContactCard = (props) => {
    let {id, name, email, img} = props.contact;
    return (
        <List.Item>
            <Image avatar src={img} />
            <List.Content>
                <List.Header>{id.substring(0,4)} - {name}</List.Header>
                <List.Description as='a'>{email}</List.Description>
            </List.Content>
            <List.Content style={{paddingRight: '70%'}} floated={'right'}>
                <Icon link name='close' onClick={() => props.clickHandler(id)}/>
            </List.Content>
        </List.Item>
    );
}

export default ContactCard;
