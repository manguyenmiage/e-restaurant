import React from 'react'
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import DirectionIcon from '@material-ui/icons/Directions'
import AccountIcon from '@material-ui/icons/AccountBox'
import PowerIcon from '@material-ui/icons/PowerSettingsNew'
import CustomLink from "../CustomLink/CustomLink";

export default function AccountMenu (props) {

    const handleLogoutAndClose = () => {
        props.handleLogout()
        props.handleClose()
        var elem = document.getElementById("botfuel");
        elem.remove();
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
                <CustomLink
                    url="/account/"
                    label="Mon profil"
                />
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <DirectionIcon />
                </ListItemIcon>
                <CustomLink
                    url="/start-trip/"
                    label=" Trouver un itinéraire"
                />
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