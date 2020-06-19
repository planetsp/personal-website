import React from 'react';
import { Button, Card, CardHeader, ListGroup, ListGroupItem } from 'shards-react'
const ContactComponent = () => {
    return (
        <Card>
            <CardHeader>
                Contact
            </CardHeader>
            <h1>Contact Information</h1>
            <ListGroup>
                <ListGroupItem>Email:
                    <Button>Click to reveal</Button>
                </ListGroupItem>
                <ListGroupItem>Github</ListGroupItem>
                <ListGroupItem>Twitter</ListGroupItem>
                <ListGroupItem>LinkedIn: Connect with me</ListGroupItem>
            </ListGroup>

        </Card>
    )
}

export default ContactComponent