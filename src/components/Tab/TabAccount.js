import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import CardTravel from '@material-ui/icons/CardTravel';
import HowToReg from '@material-ui/icons/HowToReg';
import Settings from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import ViewList from "@material-ui/icons/ViewList";

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 55,
        /*   bottom: 0,*/
    },
});

function TabAccount(props) {
    const {classes} = props
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Accueil" icon={<ViewList/>}/>
                    <Tab label="Informations personnelles" icon={<PermContactCalendar/>}/>
                    <Tab label="Profil voyageur" icon={<CardTravel/>}/>
                    <Tab label="Profil d'hôte" icon={<HowToReg/>}/>
                    <Tab label="Configuration compte" icon={<Settings/>}/>
                </Tabs>
            </AppBar>
            {value === 0 &&
            <TabContainer>
                <Typography variant={"overline"}>
                    Accueil
                </Typography>
            </TabContainer>}
            {value === 1 &&
            <TabContainer>
                <Typography variant={"overline"}>
                    Informations personnelles
                </Typography>
            </TabContainer>}
            {value === 2 &&
            <TabContainer>
                <Typography variant={"overline"}>
                    Profil voyageur
                </Typography>
            </TabContainer>}
            {value === 3 &&
            <TabContainer>
                <Typography variant={"overline"}>
                    Profil guide
                </Typography>
            </TabContainer>}
            {value === 4 &&
            <TabContainer>
                <Typography variant={"overline"}>
                    Configuration compte
                </Typography>
            </TabContainer>}
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(TabAccount);