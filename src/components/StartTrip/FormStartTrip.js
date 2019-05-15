import React , {Component} from 'react'
import {Formik} from "formik";
import {destinations} from "../../mock/destinations";
import {
    MenuItem,
    FormControl,
    InputLabel,
    Input,
    ListItemText,
    withStyles,
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

import {doCreateItineary, doSelectDestination} from "../../actions/create_trip_actions";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
        height: '100vh'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

/*const addMenuItem = (key, value, values) => (
    <MenuItem key={key} value={value.name}>
        <Checkbox checked={values.destinations.indexOf(value.name) > -1}/>
        <ListItemText primary={value.name}/>
    </MenuItem>
)

const test = (destinations, values) => {
    Object.entries(destinations).forEach(
        ([key, value]) => {
            addMenuItem (key, value, values)
        })
}*/
class FormStartTrip  extends Component {

    handleClickDestination = (event) => {
        this.props.selectDestination(event.target.value)
    }

    render () {
        const { classes } = this.props;
        return (
            <Formik
                initialValues={{
                    destinations: [

                    ],
                }}

                onSubmit={this.handleSubmit}
                render={({submitForm, values, handleChange}) => (
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="select-multiple-checkbox">Destinations</InputLabel>
                            <Select
                                multiple
                                value={values.destinations}
                                onChange={handleChange}
                                input={<Input id="select-multiple-checkbox" />}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                                name="destinations"
                                onClick={this.handleClickDestination}
                            >
                                {Object.keys(destinations).map((key) =>
                                    (<MenuItem key={key} value={destinations[key].name}>
                                            <Checkbox
                                                checked={values.destinations.indexOf(destinations[key].name) > -1}/>
                                            <ListItemText primary={destinations[key].name}/>
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                )}
            />
        )
    }
}
FormStartTrip.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    directions : state.createTripState.listItineary,
    zoom : state.createTripState.zoom,
})

function mapDispatchToProps(disptach) {
    return {
        createItineary : itineary => disptach (doCreateItineary(itineary)),
        selectDestination : destination => disptach (doSelectDestination(destination)),
    }
}
const FormStartTripConnect = connect(mapStateToProps, mapDispatchToProps)(FormStartTrip)
export default withStyles(styles, { withTheme: true })(FormStartTripConnect);