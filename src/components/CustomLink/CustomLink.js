import React from 'react';
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const link = {
    textDecoration: 'none'
}

const type = {
    ACCOUNT : 'account',
}
function CustomLink(props) {
    switch (props.type) {
        case type.ACCOUNT:
            return (
                <Link
                    style={link}
                    to={props.url}
                >
                    <CardContent>
                        <Typography gutterBottom variat="h5" component="h2">
                            {props.labelAction}
                        </Typography>
                    </CardContent>
                </Link>
            )
        default:
            return (
                <Link
                    style={link}
                    to={props.url}
                >
                    {props.label}
                </Link>
            )

    }
}

export default CustomLink;