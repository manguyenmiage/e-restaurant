import React from 'react'
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from "@material-ui/core/SvgIcon/SvgIcon";

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
                <Link to="/profil">
                    Mon compte
                </Link>
            </MenuItem>
            <MenuItem onClick={handleLogoutAndClose}>Se déconnecter</MenuItem>
        </Menu>
    )
}