import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({ division, hod, description }) => {
    return (
        <Card style={{ margin: '1rem 0' }}>
            <Card.Body>
                <Card.Title>{division}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{hod}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EventCard;