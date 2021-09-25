import React from 'react';
import {Button, Header, List} from "semantic-ui-react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";
import SearchCM from "./SearchCM";

const ContactList = (props) => {

    const deleteContactHandler = (id) => { // prop filling to get the id from the delete btn from contact card
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    });


    return(
        <div>
            <Header as='h2' icon textAlign='center'>
                Contact List
            </Header>
            <SearchCM contacts={props.contacts}/>
            <Link to={"/add"}><Button positive>Add Contact +</Button></Link>
            <List divided verticalAlign='middle'>
                {renderContactList}
            </List>
        </div>
    );
}

export default ContactList;
