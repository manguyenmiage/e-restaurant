import React, {Component} from 'react'
import Popover from "@material-ui/core/Popover/Popover";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/Col";
import Typography from "@material-ui/core/es/Typography/Typography";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/es/Button/Button";


export default class TravelersPopover extends Component {

    state = {
        dateRange: {
            selection: {
                startDate: new Date(),
                endDate: null,
                key: 'selection',
            },
        },
        dateRangeWithDisabled: {
            selection: {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            },
        },
    }

    render() {

        return (
            <Popover
                anchorEl={this.props.anchorEl}
                open={this.props.open}
                onClose={this.props.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{width: '380px', height: '240px', padding: '12px 5px'}}>
                    <Container>
                        <Row>
                            <Col>
                                <label style={{margin: '10px 10px'}}>
                                    <Typography variant="overline" gutterBottom>
                                        Adultes
                                    </Typography>
                                </label>
                            </Col>
                            <Col>
                                <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                     aria-label="Minus">
                                    <strong><h3>-</h3></strong>
                                </Fab>
                                <span style={{margin: '5px 10px'}}>0</span>
                                <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                     aria-label="Add">
                                    <strong><h3>+</h3></strong>
                                </Fab>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label style={{margin: '10px 10px'}}>
                                    <Typography variant="overline" gutterBottom>
                                        Enfants <br/> 2 à 12 ans
                                    </Typography>
                                </label>
                            </Col>
                            <Col>
                                <Fab style={{margin: '10px 10px', outline: 'none'}} size="small" color="inherit"
                                     aria-label="Minus">
                                    <strong><h3>-</h3></strong>
                                </Fab>
                                <span style={{margin: '10px 10px'}}>0</span>
                                <Fab style={{margin: '10px 10px', outline: 'none'}} size="small" color="inherit"
                                     aria-label="Add">
                                    <strong><h3>+</h3></strong>
                                </Fab>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label style={{margin: '10px 10px'}}>
                                    <Typography variant="overline" gutterBottom>
                                        Bébés <br/> - 2 ans
                                    </Typography>
                                </label>
                            </Col>
                            <Col>
                                <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                     aria-label="Minus">
                                    <strong><h3>-</h3></strong>
                                </Fab>
                                <span style={{margin: '5px 10px'}}>0</span>
                                <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                     aria-label="Add">
                                    <strong><h3>+</h3></strong>
                                </Fab>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Popover>
        )
    }

}