import { compose, withProps, lifecycle } from "recompose"
import {GoogleMap, withGoogleMap, withScriptjs, DirectionsRenderer} from "react-google-maps"
import React from 'react'
import {connect} from "react-redux";
import {doCreateItineary} from "../../actions/create_trip_actions";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");



const TripMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_API_KEY_GOOGLE_MAP,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `101.5vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
       /* componentDidMount() {
            let {listPos} = this.props
            const DirectionsService = new window.google.maps.DirectionsService();
            listPos.map((point) => {
                DirectionsService.route({
                    origin: new window.google.maps.LatLng(point['departLat'], point['departLng']),
                    destination: new window.google.maps.LatLng(point['arriveeLat'], point['arriveeLng']),
                    travelMode: window.google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        this.props.createItineary(result)
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                });
            } )

        }*/
       /* componentDidUpdate(prevProps) {
            console.log(prevProps.destinations)
           // if (prevProps.destinations) prevProps.destinations = []
        }*/
    })
)((props) => {
        var rendererOptions = {
            markerOptions : {
                icon : {
                    url : 'https://img.icons8.com/office/40/000000/place-marker.png'
                }
            }
        }
        return (
            <GoogleMap
                defaultZoom={props.zoom}
                defaultCenter={props.coordinates.france.coords}
            >

                {props.destinations.map((destination) => {
                    return destination == 'France' && (

                        <MarkerWithLabel
                            key={destination}
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
    directions : state.createTripState.listItineary,
    zoom : state.createTripState.zoom,
    coordinates : state.createTripState.coordinates,
    destinations : state.createTripState.destinations,
})

function mapDispatchToProps(disptach) {
    return {
        createItineary : itineary => disptach (doCreateItineary(itineary))
    }
}

const TripMapConnect = connect(mapStateToProps, mapDispatchToProps )(TripMap)
export default TripMapConnect


