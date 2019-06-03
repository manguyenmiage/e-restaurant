import React, {Component} from 'react'
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Link} from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const styles = theme => ({
    card: {
        margin: '10px 10px',
        height:'200px',
    },
});

class AccountCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes, iconPath, title, body, labelAction, link} = this.props;
        return (
            <Card className={classes.card}>
                <img src={iconPath} style={{height: '150px', float: 'right', padding: '5px 5px'}}/>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CustomLink
                        type='account'
                        url={link}
                        labelAction={labelAction}
                    >
                    </CustomLink>
                </CardActionArea>
            </Card>
        )
    }
}

export default withStyles(styles, {withTheme: true})(AccountCard)
