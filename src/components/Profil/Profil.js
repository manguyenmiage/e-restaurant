import React , {Component} from 'react'
import './Profil.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {withRouter} from "react-router-dom";

 class Profil  extends Component {
    constructor (props) {
        super (props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Card className="LoginCard">
                                <Card.Body>
                                   PROFIL
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default withRouter(Profil)