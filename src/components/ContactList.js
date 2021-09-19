import React from 'react';
import {List} from "semantic-ui-react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id) => { // prop filling to get the id from the delete btn from contact card
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        // debugger;
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    });


    return(
        <div>
            <List divided verticalAlign='middle'>
                {renderContactList}
            </List>
        </div>
    );
}

export default ContactList;
