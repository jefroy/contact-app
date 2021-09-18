import React from 'react';
import { Header, Icon, Divider, Card } from 'semantic-ui-react';

const HeaderCM = () => {
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>Contact Manager</Header.Content>
            </Header>
            <Divider/>
        </div>
    );
}

export default HeaderCM;
