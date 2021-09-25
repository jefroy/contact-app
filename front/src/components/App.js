import React, {useDebugValue} from 'react';
import HeaderCM from "./HeaderCM";
import AddContact from "./AddContact";
import {Container, Divider, Segment} from "semantic-ui-react";
import ContactList from "./ContactList";
import {useState, useEffect} from "react";
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
    const LOCAL_STORAGE_KEY = "contacts";

    const retrieveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
    }

    // use state stuff
    const [contacts, setContacts] = useState([]);
    const addContactHandler = async (contact) => {
        const request = {
            id: uuid(),
            ...contact
        };
        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data]);
    }
    const updateContactHandler = async (contact) => {
        const response = await api.put(`/contacts/${contact.id}`, contact);
        const {id, name, email, avatar} = response.data;
        setContacts(
            contacts.map((contact) => {
                return contact.id === id ? {...response.data} : contact;
            })
        );
    }

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrieveContacts();
            allContacts ? setContacts(allContacts): setContacts([]);
        }
        getAllContacts();
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    const removeContactHandler = async (id) => { // prop filling to get the id from the ContactList comp, which gets it from the ContactCard comp
        await api.delete(`/contacts/${id}`);
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
                                path={"/add"}
                                render={(props) => (
                                    <AddContact
                                        {...props}
                                        addContactHandler={addContactHandler}
                                    />
                                )}
                            />
                            <Route
                                path={"/edit"}
                                render={(props) => (
                                    <EditContact
                                        {...props}
                                        updateContactHandler={updateContactHandler}
                                    />
                                )}
                            />
                            <Route
                                path={"/contact/:id"}
                                component={ContactDetail}
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
