import React, {Component} from 'react';
import CustomizedAppBarConnect from "../AppBar/CustomizedAppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from "@material-ui/core";
import MenuItems from "../UserAccount/MenuItems";

const drawerWidth = 340;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#F5F5F5'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

class AccountDrawer extends Component {

    state =  {
        open: false
    }

    render() {
        const {classes, theme} = this.props;
        return(
            <div className={classes.root}>
                <CssBaseline />
                <CustomizedAppBarConnect
                    hidden={true}
                />
                <br/>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar}>
                    </div>
                    <Divider />
                    <MenuItems/>
                </Drawer>
            </div>
        )
    }

}
export default withStyles(styles, {withTheme: true})(AccountDrawer);