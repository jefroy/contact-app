import './App.css';
import React from 'react';
import HeaderCM from "./HeaderCM";
import AddContact from "./AddContact";

function App() {
    return (
        <div className="App">
            <HeaderCM></HeaderCM>
            <AddContact></AddContact>
        </div>
    );
}

export default App;
