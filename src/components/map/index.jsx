import React, { useState } from 'react';

import ReactMapGL from "react-map-gl";

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 47.380,
        longitude: 8.517,
        width: "100%",
        height: "100vh",
        zoom: 13,
        minZoom: 10,
        maxZoom: 18,
        trackResize: true,
      });

    return (
    
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {
            setViewport(viewport);
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            doubleClickZoom={true}
            style={{
            left: "0",
            top: "0",
            position: "fixed",
            width: "100vw",
            height: "100vh",
            }}
        >
            
        </ReactMapGL>
        
    )
}

export default Map;