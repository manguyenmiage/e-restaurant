import React, {Component} from 'react'
import TripMap from '../TripMap/TripMap'
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
            <div>
                <TripMap
                    isMarkerShown
                    listPos={listPos}
                />
            </div>
        )
    }
}