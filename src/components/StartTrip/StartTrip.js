import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FranceTripMap from '../TripMap/FranceTripMap'
import './StartTrip.css'

export default class StartTrip  extends Component {
    constructor (props) {
        super (props)
        this.state = {}
    }
    render () {
        var listPos = [
            {
                arriveeLat: 48.856614,
                arriveeLng: 2.3522219,
                departLat: 49.9,
                departLng: 2.3
            },
            {
                arriveeLat: 45.764043,
                arriveeLng: 4.835659,
                departLat: 48.856614,
                departLng: 2.3522219
            },
        ];
        return (
            <div className="paperCustom">
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <Paper className="paperCustom">

                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className="paperCustom">
                            <FranceTripMap
                                isMarkerShown
                                listPos = {listPos}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}