import React, {Component} from 'react'
import Popover from "@material-ui/core/Popover/Popover";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/Col";
import Typography from "@material-ui/core/es/Typography/Typography";
import Fab from '@material-ui/core/Fab';
import withSizes from 'react-sizes'

class TravelersPopover extends Component {

    render() {

        return this.props.isMobile ? (
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
                <div style={{width: '350px', height: '240px', padding: '5px 5px'}}>
                    <Container>
                        <Row>
                            <label style={{margin: '10px 10px', marginRight:'40px'}}>
                                <Typography variant="overline" gutterBottom>
                                    Adultes
                                </Typography>
                            </label>
                            <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                 aria-label="Minus">
                                <strong><h3>-</h3></strong>
                            </Fab>
                            <span style={{margin: '15px 10px'}}>0</span>
                            <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                 aria-label="Add">
                                <strong><h3>+</h3></strong>
                            </Fab>
                        </Row>
                        <Row>
                            <label style={{margin: '10px 10px', marginRight:'27px'}}>
                                <Typography variant="overline" gutterBottom>
                                    Enfants <br/> 2 à 12 ans
                                </Typography>
                            </label>
                            <Fab style={{margin: '10px 10px', outline: 'none'}} size="small" color="inherit"
                                 aria-label="Minus">
                                <strong><h3>-</h3></strong>
                            </Fab>
                            <span style={{margin: '15px 10px'}}>0</span>
                            <Fab style={{margin: '10px 10px', outline: 'none'}} size="small" color="inherit"
                                 aria-label="Add">
                                <strong><h3>+</h3></strong>
                            </Fab>
                        </Row>
                        <Row>
                            <label style={{margin: '10px 10px', marginRight:'50px'}}>
                                <Typography variant="overline" gutterBottom>
                                    Bébés <br/> - 2 ans
                                </Typography>
                            </label>
                            <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                 aria-label="Minus">
                                <strong><h3>-</h3></strong>
                            </Fab>
                            <span style={{margin: '15px 10px'}}>0</span>
                            <Fab style={{margin: '5px 10px', outline: 'none'}} size="small" color="inherit"
                                 aria-label="Add">
                                <strong><h3>+</h3></strong>
                            </Fab>
                        </Row>
                    </Container>
                </div>

            </Popover>
        ) : (
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
const mapSizesToProps = ({ width }) => ({
    isMobile: width < 600,
})

export default withSizes(mapSizesToProps)(TravelersPopover)