import React, {Component} from 'react'
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CustomLink from "../CustomLink/CustomLink";
import {personalProfileConstant} from '../../constants/user_data_constants'
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar/Avatar";

const styles = theme => ({
    card: {
        margin: '10px 10px',
    },
});

const typeConstant = {
    small: 'small',
    personalProfile: 'personalProfile'
}

class AccountCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes, type, iconPath, title, body, labelAction, link} = this.props;
        switch (type) {
            case typeConstant.small:
                return (
                    <Card className={classes.card}>
                        <img src={iconPath} style={{height: '120px', float: 'right', padding: '5px 5px'}}/>
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
            case typeConstant.personalProfile:
                return (
                    <div>
                        {Object.keys(personalProfileConstant).map((key) =>
                            (
                                <Card
                                    key={key}
                                    style={{margin:'20px 20px'}}
                                >
                                    <CardHeader
                                        title={key === 'civilityBloc' ? 'Civilité' : 'Contact'}
                                    />
                                    {Object.keys(personalProfileConstant[key]).map((subKey) =>
                                        (
                                            <CardActionArea
                                                key={subKey}
                                                style={{borderBottom: '1px inset #F5F5F5', padding: '30px 40px'}}
                                            >
                                                <Typography  style={{display: 'inline-block'}} variant="button" display="block" gutterBottom>
                                                    {personalProfileConstant[key][subKey]}
                                                </Typography>
                                                {subKey !== 'photo' ?
                                                    <Typography  style={{display: 'inline-block', float:'right'}}variant="button" display="block" gutterBottom>
                                                        {this.props.resultDataUser[subKey]}
                                                    </Typography> :
                                                    <Avatar alt="avatar-user" src={this.props.resultDataUser[subKey]} style={{float : 'right'}}/>
                                                }

                                            </CardActionArea>
                                        )
                                    )
                                    }
                                </Card>
                            )
                        )
                        }
                    </div>

                )
        }

    }
}
const mapStateToProps = state => ({
    resultDataUser : state.authentificationState.resultDataUser,
})
const AccountCardStyled = withStyles(styles, {withTheme: true})(AccountCard)
export default connect(mapStateToProps)(AccountCardStyled)
