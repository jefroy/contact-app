import React from 'react';
import {Button, Image, List} from "semantic-ui-react";

const ContactCard = (props) => {
    let {id, name, email, img} = props.contact;
    return (
        <List.Item>
            <Image avatar src={img} />
            <List.Content>
                <List.Header as='a'>{id} - {name}</List.Header>
                <List.Description as='a'>{email}</List.Description>
            </List.Content>
            <List.Content style={{paddingRight: '50%'}} floated={'right'}><Button color={'red'}>🚮</Button></List.Content>
        </List.Item>
    );
}

export default ContactCard;
