import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Styles } from './styles/contact.js';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
// add Longitude and latutude herre
    static defaultProps = {
        center: {
            lat: 25.28437,
            lng: 82.98108
        },
        zoom: 12
    };

    render() {
        return (
            <Styles>
                {/* Google Map */}
                <div className="google-map-area">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent lat={25.28437} lng={82.98108} text="My Marker" />
                    </GoogleMapReact>
                </div>
            </Styles>
        )
    }
}

export default GoogleMap