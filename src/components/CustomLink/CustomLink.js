import React from 'react';
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const link = {
    textDecoration: 'none'
}

function CustomLink(props) {

    return props.type === 'account' && (
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
    );
}

export default CustomLink;