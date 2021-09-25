import React from 'react';
import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const ContactDetail = (props) => {
    let { id, name, email, avatar } = props.location.state.contact;
    return (
        <div className={'main'}>
            <div className={"ui card centered"}>
                <Card>
                    <Image src={avatar} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            {email}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <Link to={'/'}><Button color={'instagram'}>Back to Home</Button></Link>

        </div>
    );
}

export default ContactDetail;
