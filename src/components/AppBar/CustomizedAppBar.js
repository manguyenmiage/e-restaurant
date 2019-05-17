import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Directions from '@material-ui/icons/Directions';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountMenu from "../Menu/AccountMenu";
import AccountMenuMobile from "../Menu/AccountMenuMobile";
import {connect} from "react-redux";
import {doLogoutRequest} from "../../actions/authentification_actions";
import {Link} from "react-router-dom";
import trident from "../../assets/img/trident.png";
import Drawer from '@material-ui/core/Drawer';
import Cancel from '@material-ui/icons/CancelRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const drawerWidth = 340;

const styles = theme => ({
    root: {
        width: '100%',
    },
    bar:{
        height: '80px',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '300%',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class CustomizedAppBar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        openDrawer: false
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    };

    handleDrawerClose = () => {
        this.setState({ openDrawer: false });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl, openDrawer } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderAccoutMenu = (
            <AccountMenu
                anchorEl={anchorEl}
                open={isMenuOpen}
                handleClose={this.handleMenuClose}
                handleLogout={this.props.logoutRequest}
            />
        );

        const renderAccoutMobileMenu = (
            <AccountMenuMobile
                anchorEl={mobileMoreAnchorEl}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
                handleMobileMenuClose={this.handleMobileMenuClose}
                handleProfileMenuOpen={this.handleProfileMenuOpen}
                handleLogout={this.props.logoutRequest}
            />
        );

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="inherit" className={classes.bar}>
                    <Toolbar>
                        <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Link to="/dashboard">
                            <img className="logo" src={trident} alt="logo"/>
                        </Link>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Rechercher…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor="left"
                    transitionDuration={500}
                    open={openDrawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{ onBackdropClick: this.handleDrawerClose }}
                    SlideProps={{direction: 'right'}}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <Cancel />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key={'Start a trip'}>
                            <ListItemIcon><Directions color="primary" /></ListItemIcon>
                            <Link to="/start-trip" style={{ textDecoration: 'none' }} onClick={this.handleDrawerClose}>
                                <ListItemText primary={'Démarres ton voyage !'} />
                            </Link>
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                {renderAccoutMenu}
                {renderAccoutMobileMenu}
            </div>
        );
    }
}

CustomizedAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})
function mapDispatchToProps(disptach) {
    return {
        logoutRequest: () => disptach(doLogoutRequest())
    }
}

const CustomizedAppBarConnect = connect(mapStateToProps, mapDispatchToProps)(CustomizedAppBar)
export default withStyles(styles)(CustomizedAppBarConnect);