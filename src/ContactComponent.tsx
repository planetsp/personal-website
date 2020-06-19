import React from 'react';
import { Button, Card,CardBody, CardHeader, ListGroup, ListGroupItem } from 'shards-react'
const ContactComponent = () => {
    return (
        <Card>
            <CardHeader>
                Contact
            </CardHeader>
            <CardBody>
                <h4>Contact Information</h4>

                <ListGroup>
                    <ListGroupItem>Email:
                        <Button>Click to reveal</Button>
                    </ListGroupItem>
                    <ListGroupItem>Github</ListGroupItem>
                    <ListGroupItem>Twitter</ListGroupItem>
                    <ListGroupItem>LinkedIn: Connect with me</ListGroupItem>
                </ListGroup>
            </CardBody>


        </Card>
    )
}

export default ContactComponent