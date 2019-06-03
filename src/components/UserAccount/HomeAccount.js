import React, {Component} from 'react'
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        marginTop: '50px',
        marginLeft:'341px'
    },
});

class HomeAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                HOME ACCOUNT
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(HomeAccount)