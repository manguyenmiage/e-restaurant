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
    /* withStateHandlers(initialState,{
             'setMarkerFrance' : setMarkerFrance()
         }
     ),*/
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
        const length = props.destinations.length
        const lastDestinationsState = props.destinations[length -1]
        return (
            <GoogleMap
                defaultZoom={props.zoom}
                defaultCenter={props.coordinates.france.coords}
            >

                { lastDestinationsState && lastDestinationsState.map((destination) => {
                    console.log(props.destinations)
                    return destination && destination.toString() === 'France' && (
                        <MarkerWithLabel
                            key={destination.toString()}
                            position={props.coordinates.france.coords}
                            labelAnchor={new window.google.maps.Point(0, 0)}
                            labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
                        >
                            <div>{props.coordinates.france.name}</div>
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


