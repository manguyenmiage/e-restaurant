import { compose, withProps, lifecycle } from "recompose"
import { GoogleMap, Marker, withGoogleMap, withScriptjs, DirectionsRenderer} from "react-google-maps"
import React , {Component} from 'react'
import {connect} from "react-redux";
import {doCreateItineary} from "../../actions/create_trip_actions";



const FranceTripMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_API_KEY_GOOGLE_MAP,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
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

        }
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
            defaultZoom={6}
            defaultCenter={{ lat: 46.227638, lng:  2.213749 }}
        >
            {props.directions && props.directions.map((direction) => <DirectionsRenderer directions={direction} options = {rendererOptions}  />)}
        </GoogleMap>
        )

}

)
const mapStateToProps = state => ({
    directions : state.createTripState.listItineary
})

function mapDispatchToProps(disptach) {
    return {
        createItineary : itineary => disptach (doCreateItineary(itineary))
    }
}

const FranceTripMapConnect = connect(mapStateToProps, mapDispatchToProps )(FranceTripMap)
export default FranceTripMapConnect


