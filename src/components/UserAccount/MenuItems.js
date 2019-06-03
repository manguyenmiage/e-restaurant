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
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


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
        name: 'Profil d\'hôte'
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


export default class MenuItems extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <List>
                    {Object.keys(menuAccountItems).map((labelMenu) => {
                        if (menuAccountItems[labelMenu].name === LABEL_HOME)
                            return (
                                <Link to="/account" style={{textDecoration:'none'}}>
                                    <ListItem button key={labelMenu}>
                                        <ListItemIcon><ViewList/></ListItemIcon>
                                        <ListItemText primary={
                                            <Typography variant="button" gutterBottom>
                                                {LABEL_HOME}
                                            </Typography>
                                        }/>
                                    </ListItem>
                                </Link>

                            )
                        if (menuAccountItems[labelMenu].name === LABEL_PERSONNALDATA)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon><PermContactCalendar/></ListItemIcon>
                                    <ListItemText primary={
                                        <Typography variant="button" gutterBottom>
                                            {LABEL_PERSONNALDATA}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )
                        if (menuAccountItems[labelMenu].name === LABEL_TRAVELLERPROFIL)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon><CardTravel/></ListItemIcon>
                                    <ListItemText primary={
                                        <Typography variant="button" gutterBottom>
                                            {LABEL_TRAVELLERPROFIL}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )
                        if (menuAccountItems[labelMenu].name === LABEL_HOSTPROFIL)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon><HowToReg/></ListItemIcon>
                                    <ListItemText primary={
                                        <Typography variant="button" gutterBottom>
                                            {LABEL_HOSTPROFIL}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )
                        if (menuAccountItems[labelMenu].name === LABEL_CONFIGURATION)
                            return (
                                <ListItem button key={labelMenu}>
                                    <ListItemIcon><Settings/></ListItemIcon>
                                    <ListItemText primary={
                                        <Typography variant="button" gutterBottom>
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