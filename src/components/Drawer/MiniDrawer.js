import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Map from '@material-ui/icons/Map';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Hotel from '@material-ui/icons/Hotel';
import Commute from '@material-ui/icons/Commute';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountMenu from "../Menu/AccountMenu";
import AccountMenuMobile from "../Menu/AccountMenuMobile";
import {doLogoutRequest} from "../../actions/authentification_actions";
import connect from "react-redux/es/connect/connect";
import Tooltip from '@material-ui/core/Tooltip';
import {Typography} from "@material-ui/core";
import DatesRangePopover from "../Popover/DatesRangePopover";
import SelectDestinationMenu from "../Popover/SelectDestinationPopover";
import TravelersPopover from "../Popover/TravelersPopover";
import SelectHousingPopover from "../Popover/SelectHousingPopover";
import SelectTransportPopover from "../Popover/SelectTransportPopover";
import SelectThemesPopover from "../Popover/SelectThemesPopover";
import CustomizedAppBarConnect from "../AppBar/CustomizedAppBar";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor:'#F5F5F5'
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
        anchorSelectHousingEl: null,
        anchorSelectTransportEl: null,
        anchorSelectThemesEl: null,
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

    handleClickPopoverHousing = event => {
        this.setState({
            anchorSelectHousingEl: event.currentTarget,
        });
    };

    handleClosePopoverHousing = () => {
        this.setState({
            anchorSelectHousingEl: null,
        });
    };

    handleClickPopoverTransport = event => {
        this.setState({
            anchorSelectTransportEl: event.currentTarget,
        });
    };

    handleClosePopoverTransport = () => {
        this.setState({
            anchorSelectTransportEl: null,
        });
    };

    handleClickPopoverThemes = event => {
        this.setState({
            anchorSelectThemesEl: event.currentTarget,
        });
    };

    handleClosePopoverThemes = () => {
        this.setState({
            anchorSelectThemesEl: null,
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

        const {
            anchorEl,
            mobileMoreAnchorEl,
            anchorDatesRangeEl,
            anchorSelectDestinationEl,
            anchorTravelersEl,
            anchorSelectHousingEl,
            anchorSelectTransportEl,
            anchorSelectThemesEl,
        } = this.state;

        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const isDatesRangeMenuOpen = Boolean(anchorDatesRangeEl);
        const isPopoverDestinationOpen = Boolean(anchorSelectDestinationEl);
        const isPopoverTravelersOpen = Boolean(anchorTravelersEl);
        const isPopoverHousingOpen = Boolean(anchorSelectHousingEl);
        const isPopoverTransportOpen = Boolean(anchorSelectTransportEl);
        const isPopoverThemesOpen = Boolean(anchorSelectThemesEl);

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

        const renderHousingPopover = (
            <SelectHousingPopover
                anchorEl={anchorSelectHousingEl}
                open={isPopoverHousingOpen}
                handleClose={this.handleClosePopoverHousing}
            />
        );

        const renderTransportPopover = (
            <SelectTransportPopover
                anchorEl={anchorSelectTransportEl}
                open={isPopoverTransportOpen}
                handleClose={this.handleClosePopoverTransport}
            />
        );

        const renderThemesPopover = (
            <SelectThemesPopover
                anchorEl={anchorSelectThemesEl}
                open={isPopoverThemesOpen}
                handleClose={this.handleClosePopoverThemes}
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
                <CustomizedAppBarConnect
                    openDrawer={this.handleDrawerOpen}
                    open={this.state.open}
                    hidden={false}
                />
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
                                        <ListItem button key={labelMenu} onClick={this.handleClickPopoverHousing}>
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
                                        <ListItem button key={labelMenu} onClick={this.handleClickPopoverTransport}>
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
                                        <ListItem button key={labelMenu} onClick={this.handleClickPopoverThemes}>
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
                {renderHousingPopover}
                {renderTransportPopover}
                {renderThemesPopover}
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