import React, {Component} from 'react'
import {withStyles} from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import withSizes from 'react-sizes'
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography/Typography";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

const styles = theme => ({
    bScreen: {
        marginTop: '50px',
        marginLeft:'341px'
    },
    sScreen : {
        marginTop: '50px',
    },
    bigAvatar: {
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 60,
        height: 60,
    },
    media: {
        height: 140,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
    },
    card: {
        margin : '10px 10px',
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
            <div className={this.props.isMobile? classes.sScreen : classes.bScreen}>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col md="auto" xs={12} sm = {12} style={{textAlign:'center'}}>
                            <Avatar alt="avatar-user" src="/avatar/avatar1.jpg" className={classes.bigAvatar} />
                            <Typography variant="h4" gutterBottom>
                                Bienvenue {this.props.resultDataUser.name}
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={12} sm={12} >
                            <Card className={classes.card}>
                                <img src="/account/teamwork.png" style={{height: '180px', float:'right'}}/>
                                <CardContent>
                                    <Typography gutterBottom variat="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActionArea>
                                    <Link to="/">
                                        <CardContent>
                                            <Typography gutterBottom variat="h5" component="h2">
                                                Gérer vos informations personnelles
                                            </Typography>
                                        </CardContent>

                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={12} sm={12} >
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to='/'>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={6} xs={12} sm={12} >
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 900,
})
const mapStateToProps = state => ({
    resultDataUser : state.authentificationState.resultDataUser,
})

const HomeAccountStyled = withStyles(styles, {withTheme: true})(HomeAccount)
const HomeAccountConnect = connect(mapStateToProps)(HomeAccountStyled)
export default withSizes(mapSizesToProps)(HomeAccountConnect)