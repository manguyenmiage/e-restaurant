import React, {Component} from 'react'
import TripMap from '../TripMap/TripMap'
import FormStartTrip from './FormStartTrip'
import './StartTrip.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default class StartTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        var listPos = [
            {
                arriveeLat: 48.856614,
                arriveeLng: 2.3522219,
                departLat: 49.9,
                departLng: 2.3
            },
            {
                arriveeLat: 45.764043,
                arriveeLng: 4.835659,
                departLat: 48.856614,
                departLng: 2.3522219
            },
        ];
        return (
            <div>
                <Container style={{maxWidth : '100%', marginTop: '60px'}}>
                    <Row>
                        <Col xs={12} md={3}>
                            <Card style={{borderColor : 'white'}}>
                                <Card.Body>
                                    <FormStartTrip/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={9}>
                            <Card style={{borderColor : 'white'}}>
                                <Card.Body>
                                    <TripMap
                                        isMarkerShown
                                        listPos={listPos}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}