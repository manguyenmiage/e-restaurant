import {compose, withProps, lifecycle, withStateHandlers, withHandlers} from "recompose"
import {GoogleMap, withGoogleMap, withScriptjs, DirectionsRenderer} from "react-google-maps"
import React from 'react'
import {connect} from "react-redux";
import {doCreateItineary} from "../../actions/create_trip_actions";

const {MarkerWithLabel} = require("react-google-maps/lib/components/addons/MarkerWithLabel");


/*Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) < 0;
    });
};*/

const TripMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_API_KEY_GOOGLE_MAP,
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `101.5vh`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({

    })
)((props) => {
        var rendererOptions = {
            markerOptions: {
                icon: {
                    url: 'https://img.icons8.com/office/40/000000/place-marker.png'
                }
            }
        }
        const lastDestinationsState = props.destinations[props.destinations.length -1]

        return (
            <GoogleMap
                defaultZoom={props.zoom}
                defaultCenter={props.coordinates.france.coords}
            >

                { lastDestinationsState && lastDestinationsState.map((destination) => {
                    if (destination && destination.toString() === 'France')
                        return (
                            <MarkerWithLabel
                                key={destination.toString()}
                                position={props.coordinates.france.coords}
                                labelAnchor={new window.google.maps.Point(0, 0)}
                                icon= {props.coordinates.france.url}
                            >
                                <div>{props.coordinates.france.name}</div>
                            </MarkerWithLabel>

                        )
                    if (destination && destination.toString() === 'Espagne')
                        return (
                            <MarkerWithLabel
                                key={destination.toString()}
                                position={props.coordinates.spain.coords}
                                labelAnchor={new window.google.maps.Point(0, 0)}
                                icon= {props.coordinates.spain.url}
                            >
                                <div>{props.coordinates.spain.name}</div>
                            </MarkerWithLabel>

                        )
                    if (destination && destination.toString() === 'Italie')
                        return (
                            <MarkerWithLabel
                                key={destination.toString()}
                                position={props.coordinates.italy.coords}
                                labelAnchor={new window.google.maps.Point(0, 0)}
                                icon= {props.coordinates.italy.url}
                            >
                                <div>{props.coordinates.italy.name}</div>
                            </MarkerWithLabel>

                        )
                    if (destination && destination.toString() === 'Pays-bas')
                        return (
                            <MarkerWithLabel
                                key={destination.toString()}
                                position={props.coordinates.holland.coords}
                                labelAnchor={new window.google.maps.Point(0, 0)}
                                icon= {props.coordinates.holland.url}
                            >
                                <div>{props.coordinates.holland.name}</div>
                            </MarkerWithLabel>

                        )
                })}
                {/*{props.directions && props.directions.map((direction) => <DirectionsRenderer directions={direction} options = {rendererOptions}  />)}*/}
            </GoogleMap>
        )

    }
)
const mapStateToProps = state => ({
    directions: state.createTripState.listItineary,
    zoom: state.createTripState.zoom,
    coordinates: state.createTripState.coordinates,
    destinations: state.createTripState.destinations,
    markerFranceAdded: state.createTripState.markerFranceAdded,
})

function mapDispatchToProps(disptach) {
    return {
        createItineary: itineary => disptach(doCreateItineary(itineary)),
    }
}

const TripMapConnect = connect(mapStateToProps, mapDispatchToProps)(TripMap)
export default TripMapConnect


