import React, {Component} from 'react'
import {FormControl, FormControlLabel, Typography, withStyles} from "@material-ui/core";
import {transport} from "../../mock/trip";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Popover from "@material-ui/core/Popover/Popover";
import FormGroup from "react-bootstrap/es/FormGroup";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '&$checked': {
        },
    },

    checked: {},
    formControl: {
        margin: theme.spacing.unit,
        padding: '3px 3px'
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
    popCustomTransport: {
        width: '600px',
        minHeight: '500px'
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class SelectTransportPopover extends Component {

    render() {
        const {classes} = this.props;
        return (

            <Popover
                open={this.props.open}
                anchorEl={this.props.anchorEl}
                onClose={this.props.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className={classes.popCustomTransport}
            >
                <FormControl className={classes.formControl}>
                    <label>
                        <Typography variant="overline" gutterBottom>
                            Moyens de transports
                        </Typography>
                    </label>
                    {Object.keys(transport).map((key) =>
                        (
                            <FormGroup
                                key={key}
                            >
                                {Object.keys(transport[key]).map((subKey) =>
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
                                                color="default"
                                            />
                                        }
                                        label={transport[key][subKey].name}
                                    />))}
                            </FormGroup>
                        )
                    )}
                </FormControl>
            </Popover>


        )
    }

}

export default withStyles(styles, {withTheme: true})(SelectTransportPopover);