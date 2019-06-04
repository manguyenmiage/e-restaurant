import React, {Component} from 'react'
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ViewList from "@material-ui/icons/ViewList";
import CardTravel from "@material-ui/icons/CardTravel";
import HowToReg from "@material-ui/icons/HowToReg";
import Settings from "@material-ui/icons/Settings";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {Typography, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {routes} from '../../constants/routes_constants'


const menuAccountItems = {
    home: {
        id: 1,
        name: 'Accueil'
    },
    personnalData: {
        id: 2,
        name: 'Informations personnelles'
    },
    travellerProfil: {
        id: 3,
        name: 'Profil voyageur'
    },
    hostProfil: {
        id: 4,
        name: 'Profil guide'
    },
    configuration: {
        id: 5,
        name: 'Configuration compte'
    },
}
const LABEL_HOME = menuAccountItems.home.name
const LABEL_PERSONNALDATA = menuAccountItems.personnalData.name
const LABEL_TRAVELLERPROFIL = menuAccountItems.travellerProfil.name
const LABEL_HOSTPROFIL = menuAccountItems.hostProfil.name
const LABEL_CONFIGURATION = menuAccountItems.configuration.name


const styles = theme => ({
    navLinkActive: {
        color: '#4285F4',
        fontWeight: 'bold'
    },
    navLink: {
        // color: 'black',
    },
});

const link = {
    textDecoration: 'none'
}

class MenuItems extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <List>
                    {Object.keys(menuAccountItems).map((labelMenu) => {
                        if (menuAccountItems[labelMenu].name === LABEL_HOME)
                            return (
                                <Link to={routes.USER_ACCOUNT}
                                      style={link}
                                      key={menuAccountItems[labelMenu].name}>
                                    <ListItem button key={labelMenu}>
                                        <ListItemIcon
                                            className=
                                                {
                                                    this.props.location.pathname === routes.USER_ACCOUNT
                                                        ? classes.navLinkActive
                                                        : classes.navLink
                                                }>
                                            <ViewList/>
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <Typography
                                                variant="button"
                                                gutterBottom
                                                className=
                                                    {
                                                        this.props.location.pathname === routes.USER_ACCOUNT
                                                            ? classes.navLinkActive
                                                            : classes.navLink
                                                    }
                                            >
                                                {LABEL_HOME}
                                            </Typography>
                                        }/>
                                    </ListItem>
                                </Link>

                            )
                        if (menuAccountItems[labelMenu].name === LABEL_PERSONNALDATA)
                            return (
                                <Link to={routes.PERSONAL_INFO}
                                      style={link}
                                      key={menuAccountItems[labelMenu].name}>
                                    <ListItem button key={labelMenu}>
                                        <ListItemIcon
                                            className=
                                                {
                                                    this.props.location.pathname === routes.PERSONAL_INFO
                                                        ? classes.navLinkActive
                                                        : classes.navLink
                                                }>
                                            <PermContactCalendar/>
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <Typography
                                                variant="button"
                                                gutterBottom
                                                className=
                                                    {
                                                        this.props.location.pathname === routes.PERSONAL_INFO
                                                            ? classes.navLinkActive
                                                            : classes.navLink
                                                    }>
                                                {LABEL_PERSONNALDATA}
                                            </Typography>
                                        }/>
                                    </ListItem>
                                </Link>

                            )
                        if (menuAccountItems[labelMenu].name === LABEL_TRAVELLERPROFIL)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon
                                        className=
                                            {
                                                this.props.location.pathname === routes.PROFILE_TRAVELER
                                                    ? classes.navLinkActive
                                                    : classes.navLink
                                            }>
                                        <CardTravel/>
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography
                                            variant="button"
                                            gutterBottom
                                            className=
                                                {
                                                    this.props.location.pathname === routes.PROFILE_TRAVELER
                                                        ? classes.navLinkActive
                                                        : classes.navLink
                                                }>
                                            {LABEL_TRAVELLERPROFIL}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )
                        if (menuAccountItems[labelMenu].name === LABEL_HOSTPROFIL)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon
                                        className=
                                            {
                                                this.props.location.pathname === routes.PROFILE_HOST
                                                    ? classes.navLinkActive
                                                    : classes.navLink
                                            }
                                    >
                                        <HowToReg/>
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography
                                            variant="button"
                                            gutterBottom
                                            className=
                                                {
                                                    this.props.location.pathname === routes.PROFILE_HOST
                                                        ? classes.navLinkActive
                                                        : classes.navLink
                                                }>
                                            {LABEL_HOSTPROFIL}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )
                        if (menuAccountItems[labelMenu].name === LABEL_CONFIGURATION)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon
                                        className=
                                            {
                                                this.props.location.pathname === routes.CONFIGURATION_ACCOUNT
                                                    ? classes.navLinkActive
                                                    : classes.navLink
                                            }>
                                        <Settings/>
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <Typography
                                            variant="button"
                                            gutterBottom
                                            className=
                                                {
                                                    this.props.location.pathname === routes.CONFIGURATION_ACCOUNT
                                                        ? classes.navLinkActive
                                                        : classes.navLink
                                                }>
                                            {LABEL_CONFIGURATION}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )
                    })}
                </List>
            </div>
        )
    }
}

const MenuItemsStyle = withStyles(styles, {withTheme: true})(MenuItems)
export default withRouter(MenuItemsStyle)