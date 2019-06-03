import React, {Component} from 'react'
import {withStyles} from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import withSizes from 'react-sizes'
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography/Typography";
import {connect} from "react-redux";

const styles = theme => ({
    bScreen: {
        marginTop: '50px',
        marginLeft:'341px'
    },
    sScreen : {
        marginTop: '50px',
    },
    bigAvatar: {
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 60,
        height: 60,
    },
});

class HomeAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={this.props.isMobile? classes.sScreen : classes.bScreen}>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col md="auto" xs={12} sm = {12} style={{textAlign:'center'}}>
                            <Avatar alt="avatar-user" src="/avatar/avatar1.jpg" className={classes.bigAvatar} />
                            <Typography variant="h4" gutterBottom>
                                Bienvenue {this.props.resultDataUser.name}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 900,
})
const mapStateToProps = state => ({
    resultDataUser : state.authentificationState.resultDataUser,
})

const HomeAccountStyled = withStyles(styles, {withTheme: true})(HomeAccount)
const HomeAccountConnect = connect(mapStateToProps)(HomeAccountStyled)
export default withSizes(mapSizesToProps)(HomeAccountConnect)