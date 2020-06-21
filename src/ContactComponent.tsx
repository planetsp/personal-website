import React from 'react';
import { Button, Card,CardBody, CardHeader, ListGroup, ListGroupItem } from 'shards-react'
import './App.css';

const ContactComponent = () => {
    return (
        <Card className={'card'}>
            <CardHeader>
                Contact
            </CardHeader>
            <CardBody>
                <h4>Contact Information</h4>

                <ListGroup>
                    <ListGroupItem>Email:
                        <a href={"/"}> See resume</a>
                    </ListGroupItem>
                    <br/>
                    <ListGroupItem> Github:
                        <a href={"https://github.com/planetsp"}> planetsp</a>
                    </ListGroupItem>
                    <br/>
                    <ListGroupItem> Twitter:
                        <a href={"https://twitter.com/kusi_kevin"}> @kusi_kevin</a>
                    </ListGroupItem>
                    <br/>
                    <ListGroupItem> LinkedIn:
                        <a href={"https://www.linkedin.com/in/kevin-kusi-b90355164/"}> Connect with me</a>
                    </ListGroupItem>
                </ListGroup>
            </CardBody>


        </Card>
    )
}

export default ContactComponent