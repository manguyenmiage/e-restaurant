import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Map from '@material-ui/icons/Map';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Hotel from '@material-ui/icons/Hotel';
import Commute from '@material-ui/icons/Commute';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CalendarToday from '@material-ui/icons/CalendarToday';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountMenu from "../Menu/AccountMenu";
import AccountMenuMobile from "../Menu/AccountMenuMobile";
import {Link} from "react-router-dom";
import trident from "../../assets/img/trident.png";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase/InputBase";
import Badge from "@material-ui/core/Badge/Badge";
import {fade} from "@material-ui/core/styles/colorManipulator";
import {doLogoutRequest} from "../../actions/authentification_actions";
import connect from "react-redux/es/connect/connect";
import Tooltip from '@material-ui/core/Tooltip';
import {Typography} from "@material-ui/core";
import DatesRangePopover from "../Menu/DatesRangePopover";
import SelectDestinationMenu from "../Menu/SelectDestinationPopover";
import TravelersPopover from "../Menu/TravelersPopover";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
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
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

const menuTrip = {
    dates: {
        id: 1,
        name: 'Dates du voyage'
    },
    destinations: {
        id: 2,
        name: 'Destinations'
    },
    voyageurs: {
        id: 3,
        name: 'Voyageurs'
    },
    housing: {
        id: 4,
        name: 'Logements'
    },
    transports: {
        id: 5,
        name: 'Transport'
    },
    themes: {
        id: 6,
        name: 'Thèmes'
    }
}
const LABEL_DATES = menuTrip.dates.name
const LABEL_DESTINATIONS = menuTrip.destinations.name
const LABEL_TRAVELERS = menuTrip.voyageurs.name
const LABEL_HOUSING = menuTrip.housing.name
const LABEL_TRANSPORTS = menuTrip.transports.name
const LABEL_THEMES = menuTrip.themes.name

class MiniDrawer extends React.Component {
    state = {
        open: false,
        openPopoverDestination: false,
        anchorEl: null,
        anchorDatesRangeEl: null,
        anchorSelectDestinationEl: null,
        anchorTravelersEl: null,
        mobileMoreAnchorEl: null,
    };

    handleProfileMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
        this.handleMobileMenuClose();
    };

    handleDatesRangePopoverClose = () => {
        this.setState({anchorDatesRangeEl: null})
    }

    handleDatesRangePopoverOpen = event => {
        this.setState({anchorDatesRangeEl: event.currentTarget});
    };

    handleTravelersPopoverClose = () => {
        this.setState({anchorTravelersEl: null})
    }

    handleClickTravelersPopoverOpen = event => {
        this.setState({anchorTravelersEl: event.currentTarget});
    };

    handleClickPopoverDestination = event => {
        this.setState({
            anchorSelectDestinationEl: event.currentTarget,
        });
    };

    handleClosePopoverDestination = () => {
        this.setState({
            anchorSelectDestinationEl: null,
        });
    };


    handleMobileMenuOpen = event => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, theme} = this.props;

        const {anchorEl, mobileMoreAnchorEl, anchorDatesRangeEl, anchorSelectDestinationEl, anchorTravelersEl} = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const isDatesRangeMenuOpen = Boolean(anchorDatesRangeEl);
        const isPopoverDestinationOpen = Boolean(anchorSelectDestinationEl);
        const isPopoverTravelersOpen = Boolean(anchorTravelersEl);

        const renderAccoutMenu = (
            <AccountMenu
                anchorEl={anchorEl}
                open={isMenuOpen}
                handleClose={this.handleMenuClose}
                handleLogout={this.props.logoutRequest}
            />
        );

        const renderDatesRangePopover = (
            <DatesRangePopover
                anchorEl={anchorDatesRangeEl}
                open={isDatesRangeMenuOpen}
                handleClose={this.handleDatesRangePopoverClose}
            />
        );

        const renderSelectDestinationPopover = (
            <SelectDestinationMenu
                anchorEl={anchorSelectDestinationEl}
                open={isPopoverDestinationOpen}
                handleClose={this.handleClosePopoverDestination}
            />
        );

        const renderTravelersPopover = (
            <TravelersPopover
                anchorEl={anchorTravelersEl}
                open={isPopoverTravelersOpen }
                handleClose={this.handleTravelersPopoverClose}
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
                <CssBaseline/>
                <AppBar position="fixed" color="inherit" className={classNames(classes.appBar, {
                    [classes.appBarShift]: this.state.open,
                })}>
                    <Toolbar>
                        <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit"
                                    aria-label="Open drawer">
                            <MenuIcon/>
                        </IconButton>
                        <Link to="/dashboard">
                            <img className="logo" src={trident} alt="logo"/>
                        </Link>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Rechercher…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        {Object.keys(menuTrip).map((labelMenu) => {
                            if (menuTrip[labelMenu].name === LABEL_DATES)
                                return (
                                    <Tooltip title={LABEL_DATES} aria-label={labelMenu} key={labelMenu}>
                                        <ListItem button key={labelMenu} onClick={this.handleDatesRangePopoverOpen}>
                                            <ListItemIcon><CalendarToday/></ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant="button" gutterBottom>
                                                    {LABEL_DATES}
                                                </Typography>
                                            }/>
                                        </ListItem>
                                    </Tooltip>
                                )
                            if (menuTrip[labelMenu].name === LABEL_DESTINATIONS)
                                return (
                                    <Tooltip title={LABEL_DESTINATIONS} aria-label={labelMenu} key={labelMenu}>
                                        <ListItem button key={labelMenu} onClick={this.handleClickPopoverDestination}>
                                            <ListItemIcon><Map/></ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant="button" gutterBottom>
                                                    {LABEL_DESTINATIONS}
                                                </Typography>
                                            }/>
                                        </ListItem>
                                    </Tooltip>

                                )
                            if (menuTrip[labelMenu].name === LABEL_TRAVELERS)
                                return (
                                    <Tooltip title={LABEL_TRAVELERS} aria-label={labelMenu} key={labelMenu}>
                                        <ListItem button key={labelMenu} onClick={this.handleClickTravelersPopoverOpen}>
                                            <ListItemIcon><PersonAdd/></ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant="button" gutterBottom>
                                                    {LABEL_TRAVELERS}
                                                </Typography>
                                            }/>
                                        </ListItem>
                                    </Tooltip>

                                )
                            if (menuTrip[labelMenu].name === LABEL_HOUSING)
                                return (
                                    <Tooltip title={LABEL_HOUSING} aria-label={labelMenu} key={labelMenu}>
                                        <ListItem button key={labelMenu}>
                                            <ListItemIcon><Hotel/></ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant="button" gutterBottom>
                                                    {LABEL_HOUSING}
                                                </Typography>
                                            }/>
                                        </ListItem>
                                    </Tooltip>

                                )
                            if (menuTrip[labelMenu].name === LABEL_TRANSPORTS)
                                return (
                                    <Tooltip title={LABEL_TRANSPORTS} aria-label={labelMenu} key={labelMenu}>
                                        <ListItem button key={labelMenu}>
                                            <ListItemIcon><Commute/></ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant="button" gutterBottom>
                                                    {LABEL_TRANSPORTS}
                                                </Typography>
                                            }/>
                                        </ListItem>
                                    </Tooltip>

                                )
                            if (menuTrip[labelMenu].name === LABEL_THEMES)
                                return (
                                    <Tooltip title={LABEL_THEMES} aria-label={labelMenu} key={labelMenu}>
                                        <ListItem button key={labelMenu}>
                                            <ListItemIcon><FavoriteBorder/></ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant="button" gutterBottom>
                                                    {LABEL_THEMES}
                                                </Typography>
                                            }/>
                                        </ListItem>
                                    </Tooltip>

                                )
                        })}
                    </List>
                </Drawer>
                {renderAccoutMenu}
                {renderAccoutMobileMenu}
                {renderDatesRangePopover}
                {renderSelectDestinationPopover}
                {renderTravelersPopover}
            </div>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})

function mapDispatchToProps(disptach) {
    return {
        logoutRequest: () => disptach(doLogoutRequest())
    }
}

const MiniDrawerConnect = connect(mapStateToProps, mapDispatchToProps)(MiniDrawer)
export default withStyles(styles, {withTheme: true})(MiniDrawerConnect);