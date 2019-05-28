import React from 'react'
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import DirectionIcon from '@material-ui/icons/Directions'
import AccountIcon from '@material-ui/icons/AccountBox'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'

export default function AccountMenu (props) {

    const handleLogoutAndClose = () => {
        props.handleLogout()
        props.handleClose()
    }
    return (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.open}
            onClose={props.handleClose}
        >
            <MenuItem>
                <ListItemIcon>
                    <AccountIcon />
                </ListItemIcon>
                <Link to="/account">
                    Mon profil
                </Link>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <DirectionIcon />
                </ListItemIcon>
                <Link to="/start-trip">
                    Trouver un itinéraire
                </Link>
            </MenuItem>
            <MenuItem onClick={handleLogoutAndClose}>
                <ListItemIcon>
                    <PowerIcon />
                </ListItemIcon>
                Se déconnecter
            </MenuItem>
        </Menu>
    )
}