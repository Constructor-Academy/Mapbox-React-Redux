import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {Navbar, MapSettings} from "./style";

import propulsionLogo from "../../assets/propulsion-academy-logo.png";

const Nav = () => {

    const [togglePlace, setTogglePlace] = useState(false)

    const mapStyles = [
        "mapbox://styles/mapbox/streets-v11",
        "mapbox://styles/guir/ckcfwddbi0idl1jo5ojkdh77v",
        "mapbox://styles/guir/ckcfwdxzn0jus1ipfqre7cz02"
    ]

    
    const dispatch = useDispatch();

    const AddNewPlace = () => {
        setTogglePlace(!togglePlace)
        dispatch({type:"INIT_NEW_LOCATION"})
    }

    return  (
        <Navbar state={togglePlace}>
            <a href="https://propulsion.academy/" rel="noopener noreferrer" target="_blank"><img src={propulsionLogo} width="200" alt="Learn how to become a Full-Stack developer with Propulsion Academy"/></a>

            <button 
                id="addPlaceBtn"
                className={useState ? "diffCursor" : null} 
                onClick={AddNewPlace}
            >
                {togglePlace ? "Choose your location" : "ADD A PLACE"}
            </button>

            <MapSettings>
                <h3><u>Map style</u></h3>
                <label onClick={e => {dispatch({type: "CHANGE_MAP_STYLE", payload: mapStyles[e.currentTarget.childNodes[0].defaultValue]})}}>
                    <input type="radio" name="plan" value="0" defaultChecked />
                    Classic
                </label>

                <label onClick={e => {dispatch({type: "CHANGE_MAP_STYLE", payload: mapStyles[e.currentTarget.childNodes[0].defaultValue]})}}>
                    <input type="radio" name="plan" value="1" />
                    Black & White
                </label>

                <label onClick={e => {dispatch({type: "CHANGE_MAP_STYLE", payload: mapStyles[e.currentTarget.childNodes[0].defaultValue]})}}>
                    <input type="radio" name="plan" value="2" />
                    Blueprint
                </label>
            </MapSettings>

        </Navbar>
    )
}

export default Nav;