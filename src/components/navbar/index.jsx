import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {Navbar} from "./style";

import propulsionLogo from "../../assets/propulsion-academy-logo.png";

const Nav = () => {

    const [togglePlace, setTogglePlace] = useState(false)
    
    const dispatch = useDispatch();

    const AddNewPlace = () => {
        setTogglePlace(!togglePlace)
        dispatch({type:"INIT_NEW_LOCATION"})
    }

    return  (
        <Navbar state={togglePlace}>
            <a href="https://propulsion.academy/" rel="noopener noreferrer" target="_blank"><img src={propulsionLogo} width="200" alt="Learn how to become a Full-Stack developer with Propulsion Academy"/></a>

            <button 
                className={useState ? "diffCursor" : null} 
                onClick={AddNewPlace}
            >
                {togglePlace ? "Choose your location" : "ADD A PLACE"}
            </button>

        </Navbar>
    )
}

export default Nav;