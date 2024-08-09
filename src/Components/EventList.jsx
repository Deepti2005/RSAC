import React from 'react';
import EventCard from './EventCard';
import { Container, Row, Col } from 'react-bootstrap';

const events = [
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
    { division: 'NAME OF DIVISION', hod: 'NAME', description: 'DUMMY DATA lorem ipsum doro sienf aokenn cowjeann enfn anwoqdn ajc' },
];

const EventsList = () => {
    return (
        <Container>
            <Row>
                {events.map((event, index) => (
                    <Col key={index} md={4}>
                        <EventCard
                            division={event.division}
                            hod={event.hod}
                            description={event.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default EventsList;