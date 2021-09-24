import React, {useDebugValue} from 'react';
import HeaderCM from "./HeaderCM";
import AddContact from "./AddContact";
import {Container, Divider, Segment} from "semantic-ui-react";
import ContactList from "./ContactList";
import {useState, useEffect} from "react";
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    // use state stuff
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, {id: uuid(), ...contact}]);
    }

    useEffect(() => {
        const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        getContacts ? setContacts(getContacts): setContacts([]);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    const removeContactHandler = (id) => { // prop filling to get the id from the ContactList comp, which gets it from the ContactCard comp
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        })
        setContacts(newContactList);
    }

    return (
        <div>
            <Container>
                <Segment inverted color={'grey'}>
                    <Router>
                        <HeaderCM/>
                        <Switch>
                            <Route
                                path={"/"} exact
                                render={(props) => (
                                    <ContactList
                                        {...props}
                                        contacts={contacts}
                                        getContactId={removeContactHandler}
                                    />
                                )}
                            />
                            <Route
                                path={"/add"} exact
                                render={(props) => (
                                    <AddContact
                                        {...props}
                                        addContactHandler={addContactHandler}
                                    />
                                )}
                            />
                        </Switch>
                        <Divider/>
                    </Router>
                </Segment>
            </Container>
        </div>
    );
}

export default App;
