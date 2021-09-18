import React from 'react';
import {List} from "semantic-ui-react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact}/>
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
