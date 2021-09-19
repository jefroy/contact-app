import React from 'react';
import { Header, Icon, Divider, Card } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const HeaderCM = () => {
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Link to={'/'}><Icon name='users' circular /></Link>
                <Header.Content>Contact Manager</Header.Content>
            </Header>
            <Divider/>
        </div>
    );
}

export default HeaderCM;
