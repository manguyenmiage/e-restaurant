import React, {Component} from 'react'
import {FormControl, FormControlLabel, Typography, withStyles} from "@material-ui/core";
import {destinations} from "../../mock/trip";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import green from "@material-ui/core/colors/green";
import Popover from "@material-ui/core/Popover/Popover";

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
    popCustom: {
        width: '600px'
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class SelectionMenu extends Component {

    state = {}

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
                className={classes.popCustom}
            >
                <FormControl className={classes.formControl}>
                    <label>
                        <Typography variant="overline" gutterBottom>
                            Destinations
                        </Typography>
                    </label>
                    {Object.keys(destinations).map((key) =>
                        (
                            <div key={key}>
                                <FormControlLabel
                                    key={key}
                                    control={
                                        <Checkbox
                                            key={key}
                                            value="checkedG"
                                            classes={{
                                                root: classes.root,
                                                checked: classes.checked,
                                            }}
                                        />
                                    }
                                    label={destinations[key].name}
                                />
                                <img src={destinations[key].url} alt={key} style={{float:'right'}}/>
                                <label>
                                    <Typography variant="body1" gutterBottom>
                                        {destinations[key].description}
                                    </Typography>
                                </label>
                            </div>

                        )
                    )}
                </FormControl>
            </Popover>


        )
    }

}

export default withStyles(styles, {withTheme: true})(SelectionMenu);