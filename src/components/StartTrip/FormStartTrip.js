import React, {Component} from 'react'
import {Formik} from "formik";
import {destinations} from "../../mock/destinations";
import {
    MenuItem,
    FormControl,
    InputLabel,
    Input,
    ListItemText,
    withStyles, Grid, CircularProgress, FormControlLabel, Typography,
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

import {doCreateItineary, doSelectDestination} from "../../actions/create_trip_actions";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ThemeTripCheckboxesGroup from "./ThemeTripCheckboxesGroup";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: '96%',
        marginLeft: '20px',
        marginRight:'20px'
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

class FormStartTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate : new Date()
        };
    }

    handleChangeStartDate = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleChangeEndDate = (date) => {
        this.setState({
            startDate: date
        });
    }
    handleClickDestination = (event) => {
        this.props.selectDestination(event.target.value)
    }

    render() {
        const {classes} = this.props;
        return (
            <Formik
                initialValues={{
                    destinations: [],
                }}

                onSubmit={this.handleSubmit}
                render={({submitForm, values, handleChange}) => (
                    <div>
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <label>
                                        <Typography variant="overline" gutterBottom>
                                           Date de départ
                                        </Typography>
                                    </label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChangeStartDate}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <label>
                                        <Typography variant="overline" gutterBottom>
                                            Date de retour
                                        </Typography>
                                    </label>
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleChangeEndDate}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Destinations</InputLabel>
                                    <Select
                                        multiple
                                        value={values.destinations}
                                        onChange={handleChange}
                                        input={<Input id="select-multiple-checkbox"/>}
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
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <div className={classes.formControl}>
                                    <hr/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                  <ThemeTripCheckboxesGroup/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>

                )}
            />
        )
    }
}

FormStartTrip.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    directions: state.createTripState.listItineary,
    zoom: state.createTripState.zoom,
})

function mapDispatchToProps(disptach) {
    return {
        createItineary: itineary => disptach(doCreateItineary(itineary)),
        selectDestination: destination => destination && disptach(doSelectDestination(destination)),

    }
}

const FormStartTripConnect = connect(mapStateToProps, mapDispatchToProps)(FormStartTrip)
export default withStyles(styles, {withTheme: true})(FormStartTripConnect);