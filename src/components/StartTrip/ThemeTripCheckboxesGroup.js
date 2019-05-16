import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {Divider, Grid, Typography} from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
     //   margin: theme.spacing.unit,
    },
    divider : {
        border: '1px solid black',
        color: '#FFFF00',
        height: '1px'
    }
});

class CheckboxesGroup extends React.Component {
    state = {
        gilad: false,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { gilad, jason, antoine } = this.state;
        const error = [gilad, jason, antoine].filter(v => v).length !== 2;


        return (
            <div className={classes.root}>
                <Typography component="title" variant="overline">
                    Thèmes du voyage favorites
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            checked={gilad}
                                            onChange={this.handleChange('gilad')} value="gilad" />
                                    }
                                    label="Architecture"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            checked={jason}
                                            onChange={this.handleChange('jason')} value="jason" />
                                    }
                                    label="Gastronomique"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            checked={antoine}
                                            onChange={this.handleChange('antoine')}
                                            value="antoine"
                                        />
                                    }
                                    label="Nature et Paysage"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl required error={error} component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            checked={gilad}
                                            onChange={this.handleChange('gilad')}
                                            value="gilad" />
                                    }
                                    label="Sports"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            checked={jason}
                                            onChange={this.handleChange('jason')}
                                            value="jason" />
                                    }
                                    label="Détente"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            checked={antoine}
                                            onChange={this.handleChange('antoine')}
                                            value="antoine"
                                        />
                                    }
                                    label="Shopping"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>


            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);