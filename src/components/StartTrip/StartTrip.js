import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TripMap from '../TripMap/TripMap'
import FormStartTrip from './FormStartTrip'
import './StartTrip.css'

export default class StartTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
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
                <Grid container spacing={24}>
                    <Grid item xs={4} sm={3}>
                        <FormStartTrip/>
                    </Grid>
                    <Grid item xs={8} sm={9}>
                        <TripMap
                            isMarkerShown
                            listPos={listPos}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}