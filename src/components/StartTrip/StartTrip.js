import React, {Component} from 'react'
import TripMap from '../TripMap/TripMap'
import './StartTrip.css'
import CustomizedSnackbars from "../SnackBar/CustomizedSnackBar";
import {doSnackBarClose} from "../../actions/dashboard_actions";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";

const BotfuelWebChat = window.BotfuelWebChat



class StartTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: null,
            vertical: 'bottom',
            horizontal: 'left',
        }
    }
    componentDidMount() {
        BotfuelWebChat.init({
            appToken: process.env.REACT_APP_WEBCHAT_TOKEN,
            size: {
                width: 350,
                height: 450
            },
            startOpen: false,
            startFullScreen: false,
            theme: {
                buttons: {
                    close: true,
                    fullScreen: false,
                },
                colors: {
                    background: '#ffffff',
                    main: '#34CE7E',
                    primary: '#34CE7E'
                },
                layout: {
                    compact: true,
                    rounded: false,
                    shadowed: true,
                    noHeader: false,
                    noBorder: false,
                    noHelpMessage: false
                },
                sanitizeDOM: true,
                startButtonStyle: 'bubble',
                dialogStyle: 'hover',
                fixed: false,
                fluid: false,
                images: {
                    botAvatar: '/avatar/bot.png',
                    startButton: '/avatar/comment.png',
                },
            },
            labels: {
                sendButtonLabel: 'Envoyer',
                messageInputPlaceholder: 'Ecrire un message...',
                webchatHeaderTitle: 'Comment je peux t\'aider?',
                helpMessage: 'Ravie de te connaître. Moi c\'est Amé, le superbot qui t\'aide à planifier ton voyage.',
                onboardingMessage: ['Bienvenue à Tripoverflow!', 'Comment vas-tu ?']
            }
        });
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
    render() {
        const { vertical, horizontal, open } = this.state;
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
                <TripMap
                    isMarkerShown
                    listPos={listPos}
                />
                <CustomizedSnackbars
                    variant = "success"
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    message={'Bienvennue ' + this.props.user.fbDisplayName}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
    resultDataUser : state.authentificationState.resultDataUser,
    user : state.authentificationState.user,
    showSnackBar: state.dashboardState.showSnackBar,
})

function mapDispatchToProps(disptach) {
    return {
        snackBarClose: () => disptach(doSnackBarClose())
    }
}

const StartTripConnect = connect(mapStateToProps, mapDispatchToProps)(StartTrip)
export default withRouter(StartTripConnect)
