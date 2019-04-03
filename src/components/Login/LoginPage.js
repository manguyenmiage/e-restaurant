import React , {Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import LoginForm from "./LoginForm";

class LoginPage  extends Component {
    constructor (props) {
        super (props)
        this.state = {}
    }
    render () {
        return (
            <div className="loginBody">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Card className="LoginCard">
                                <Card.Body>
                                    <LoginForm/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default LoginPage