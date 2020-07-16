import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import ReactMapGL, {Marker, Popup} from "react-map-gl";

import {Card, Icons, IconWhite} from "./style";
import { faRocket, faBeer, faHandPeace } from "@fortawesome/free-solid-svg-icons";

import ModalComp from "../modal/index";

const Map = () => {

    const modalRef = useRef();

    const dispatch = useDispatch();

    const [viewport, setViewport] = useState({
        latitude: 47.388,
        longitude: 8.523,
        width: "100%",
        height: "100vh",
        zoom: 15,
        minZoom: 10,
        maxZoom: 18,
        trackResize: true,
    });
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [lngLat, setLngLat] = useState(null)

    let propulsionMarkers = useSelector(state => state.marker.propulsionLocation)
    let new_location = useSelector(state => state.settings.new_location)
    let userMarkers = useSelector(state => state.marker.userLocation)
    let selectedMarker = useSelector(state => state.marker.selectedMarker)

    useEffect(() => {
        if(selectedMarker)
        {
            setSelectedInfo(selectedMarker)
            dispatch({type: "RESET_MARKER"})
        }
    }, [selectedMarker, dispatch])

    const whichIconBro = type => {
        switch(type)
        {
            case "home":
                return faRocket;
            case "restaurant":
                return faBeer;
            default:
                return faHandPeace;
        }
    }

    const clickOnDaMap = e => {
        setSelectedInfo(null)
        if(new_location)
        {
            setLngLat(e.lngLat)
            modalRef.current.openModal()
            
        } else {
            modalRef.current.closeModal()
        }
    }

    const handleLocation = ({title, content, selectedValue}) => {
        dispatch({
            type:"ADD_LOCATION", 
            payload: {
                longitude: lngLat[0],
                latitude: lngLat[1],
                title,
                content,
                selectedValue
            }
        })
    }

    const renderTheMarkers = (name, source) => {
        if(source) 
        {
            return (
                source.map(marker => (
                <Marker 
                    key={marker.properties.id} 
                    latitude={marker.geometry.coordinates[1]}
                    longitude={marker.geometry.coordinates[0]}
                >
                    <IconWhite 
                        type={name}
                        icon={
                            whichIconBro(marker.properties.type)
                        }
                        onMouseEnter={e => setSelectedInfo(marker)}
                    />
                </Marker>
            )))
            
        } else {
            return null;
        }
    }
    
    return (
        <>
        <ModalComp modalRef={modalRef} handleLocation={handleLocation}/>
    
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}

            /*
                CHANGE THE STYLE OF THE MAP
            */
            mapStyle="mapbox://styles/mapbox/streets-v11"
            // mapStyle="mapbox://styles/guir/ckcfwddbi0idl1jo5ojkdh77v"
            // mapStyle="mapbox://styles/guir/ckcfwdxzn0jus1ipfqre7cz02"

            doubleClickZoom={true}
            style={{
                left: "0",
                top: "0",
                position: "fixed",
                width: "100vw",
                height: "100vh",
            }}

            // ADDITIONAL RULES ON THE MAP
            onClick={clickOnDaMap}
        >

            {/* RENDER ALL THE ICONS IN THE STATE */}
            {renderTheMarkers("propulsion", propulsionMarkers)}
            {renderTheMarkers("user", userMarkers)}

            {/* GET THE INFO IF CLICK ON AN ICON */}
            {
                selectedInfo ?
                (
                    <Popup
                        latitude={selectedInfo.geometry.coordinates[1]}
                        longitude={selectedInfo.geometry.coordinates[0]}
                        onClose={() => setSelectedInfo(null)}
                    >
                        <Card>
                            <Icons 
                                source={selectedInfo.properties.source}
                                icon={
                                    whichIconBro(selectedInfo.properties.type)
                                }
                            />
                            <h3>{selectedInfo.properties.name}</h3>
                            <p>{selectedInfo.properties.description}</p>
                        </Card>
                    </Popup>
                ) : null

            }
        </ReactMapGL>
        </>
    )
}

export default Map;