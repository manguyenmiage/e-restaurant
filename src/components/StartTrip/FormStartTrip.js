import React, {Component} from 'react'
import {Formik} from "formik";
import {destinations, themes, housingType} from "../../mock/trip";
import {
    MenuItem,
    FormControl,
    InputLabel,
    Input,
    ListItemText,
    withStyles, Grid, Typography, FormControlLabel,
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

import {doCreateItineary, doSelectDestination} from "../../actions/create_trip_actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/es/FormGroup";
import green from '@material-ui/core/colors/green';
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
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
    rightIcon: {
        marginLeft: theme.spacing.unit,
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
            endDate : new Date(),
            destinations : []
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

    handleClickTheme = (event) => {
       // this.props.selectDestination(event.target.value)
    }

    render() {
        const {classes} = this.props;
        const length = console.log(this.state.destinations.length)
        return (
            <Formik
                initialValues={{
                    destinations: [],
                    themes: [],
                    housingType : []
                }}

                onSubmit={this.handleSubmit}
                render={({submitForm, values, handleChange}) => (
                    <div>
                        <Container>
                            <Row>
                                <Col xs={12} md={4}>
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
                                </Col>
                                <Col xs={12} md={4}>
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
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="select-multiple-destinations">Destinations</InputLabel>
                                        <Select
                                            multiple
                                            value={values.destinations}
                                            onChange={handleChange}
                                            input={<Input id="select-multiple-destinations"/>}
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
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="select-multiple-theme-trip">Thèmes du voyage favorites</InputLabel>
                                        <Select
                                            multiple
                                            value={values.themes}
                                            onChange={handleChange}
                                            input={<Input id="select-multiple-theme-trip"/>}
                                            renderValue={selected => selected.join(', ')}
                                            MenuProps={MenuProps}
                                            name="themes"
                                            onClick={this.handleClickTheme}
                                        >
                                            {Object.keys(themes).map((key) =>
                                                (<MenuItem key={key} value={themes[key].name}>
                                                        <Checkbox
                                                            checked={values.themes.indexOf(themes[key].name) > -1}/>
                                                        <ListItemText primary={themes[key].name}/>
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                </Col>
                            </Row>
                            <br/>
                            <Row className="justify-content-md-start">
                                <Col>
                                    <FormControl className={classes.formControl}>
                                        <label>
                                            <Typography variant="overline" gutterBottom>
                                                Type de logement
                                            </Typography>
                                        </label>
                                        {Object.keys(housingType).map((key) =>
                                            (
                                                <FormGroup
                                                    key={key}
                                                >
                                                    {Object.keys(housingType[key]).map((subKey) =>
                                                        (<FormControlLabel
                                                            key={subKey}
                                                            control={
                                                                <Checkbox
                                                                    key={subKey}
                                                                    value="checkedG"
                                                                    classes={{
                                                                        root: classes.root,
                                                                        checked: classes.checked,
                                                                    }}
                                                                />
                                                            }
                                                            label={housingType[key][subKey].name}
                                                        />))}
                                                </FormGroup>
                                            )
                                        )}
                                    </FormControl>
                                </Col>
                            </Row>
                        </Container>
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