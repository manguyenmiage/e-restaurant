import React, {Component} from 'react'
import {FormControl, FormControlLabel, Typography, withStyles} from "@material-ui/core";
import {themes} from "../../mock/trip";
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
        padding: '3px 3px',
        maxWidth:'500px',
        minHeight: '200px'
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

class SelectThemesPopover extends Component {

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
            >
                <FormControl className={classes.formControl}>
                    <label>
                        <Typography variant="overline" gutterBottom>
                            Thèmes du voyages
                        </Typography>
                    </label>
                    {Object.keys(themes).map((key) =>
                        (
                            <FormGroup
                                key={key}
                            >
                                {Object.keys(themes[key]).map((subKey) =>
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
                                        label={themes[key][subKey].name}
                                    />))}
                            </FormGroup>
                        )
                    )}
                </FormControl>
            </Popover>


        )
    }

}

export default withStyles(styles, {withTheme: true})(SelectThemesPopover);