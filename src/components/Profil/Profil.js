import React , {Component} from 'react'
import './Profil.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {withRouter} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import {connect} from "react-redux";
import {doSnackBarClose} from "../../actions/profile_actions";

 class Profil  extends Component {
    constructor (props) {
        super (props)
        this.state = {
            open: null,
            vertical: 'top',
            horizontal: 'center',
        }
    }

     componentDidMount() {
        console.log(this.props)

         if (this.props.loggedIn && !this.props.showSnackBar) {
             this.setState({open : true})
         } else {
             this.setState({open: false})
         }
     }

     handleClose = () => {
         this.setState({ open: false })
         this.props.snackBarClose()
     };

    render () {
        const { vertical, horizontal, open } = this.state;
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
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Vous êtes connecté</span>}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
    showSnackBar: state.profileState.showSnackBar,
})
function mapDispatchToProps(disptach) {
    return {
        snackBarClose: () => disptach(doSnackBarClose())
    }
}

const ProfilConnect = connect(mapStateToProps, mapDispatchToProps)(Profil)
export default withRouter(ProfilConnect)