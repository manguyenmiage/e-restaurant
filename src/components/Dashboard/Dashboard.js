import React , {Component} from 'react'
import './Dashboard.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {doSnackBarClose} from "../../actions/dashboard_actions";
import CustomizedSnackbars from "../SnackBar/CustomizedSnackBar";

 class Dashboard  extends Component {
    constructor (props) {
        super (props)
        this.state = {
            open: null,
            vertical: 'bottom',
            horizontal: 'left',
        }
    }

     componentDidMount() {
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
                                   DASHBOARD
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <CustomizedSnackbars
                    variant = "success"
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    message={'Bienvennue ' + this.props.user.email}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
    user : state.authentificationState.user,
    showSnackBar: state.dashboardState.showSnackBar,
})
function mapDispatchToProps(disptach) {
    return {
        snackBarClose: () => disptach(doSnackBarClose())
    }
}

const DashBoardConnect = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default withRouter(DashBoardConnect)