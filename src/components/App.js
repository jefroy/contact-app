import './App.css';
import React from 'react';
import HeaderCM from "./HeaderCM";
import AddContact from "./AddContact";
import {Container, Divider} from "semantic-ui-react";
import ContactList from "./ContactList";

function App() {
    const contacts = [
        {
            id: "1",
            name: "dipesh",
            email: "dipesh@gmail.com",
            img: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
        },
        {
            id: "2",
            name: "jerome",
            email: "jerome.ramsingh@gmail.com",
            img: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        },
        {
            id: "3",
            name: "steve",
            email: "steve.shamala@gmail.com",
            img: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        },
        {
            id: "4",
            name: "molly",
            email: "molly.rampersad@gmail.com",
            img: 'https://react.semantic-ui.com/images/avatar/large/molly.png'
        },
        {
            id: "5",
            name: "jenny",
            email: "jenny.maraj@gmail.com",
            img: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        },
    ];

    return (
        <div className="App">
            <Container>
                <HeaderCM/>
                <AddContact/>
                <Divider/>
                <ContactList contacts={contacts}/>
            </Container>
        </div>
    );
}

export default App;
