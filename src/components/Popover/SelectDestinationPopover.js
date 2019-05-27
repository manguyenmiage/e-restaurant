import React, {Component} from 'react'
import {FormControl, FormControlLabel, Typography, withStyles} from "@material-ui/core";
import {destinations} from "../../mock/trip";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Popover from "@material-ui/core/Popover/Popover";
import withSizes from 'react-sizes'

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

class SelectDestinationPopover extends Component {

    state = {}

    render() {
        const {classes} = this.props;
        return this.props.isMobile ? (

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
                                            color="default"
                                        />
                                    }
                                    label={destinations[key].name}
                                />
                            </div>

                        )
                    )}
                </FormControl>
            </Popover>


        ) : (
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
                                            color="default"
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
const mapSizesToProps = ({ width }) => ({
    isMobile: width < 600,
})


const SelectDestinationPopoverWithStyle = withStyles(styles, {withTheme: true})(SelectDestinationPopover);
export default withSizes(mapSizesToProps)(SelectDestinationPopoverWithStyle)