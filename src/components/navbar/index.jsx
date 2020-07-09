import React from 'react';

import {Navbar} from "./style";

import propulsionLogo from "../../assets/propulsion-academy-logo.png";

const Nav = () => {
    
    return  (
        <Navbar>
            <a href="https://propulsion.academy/" rel="noopener noreferrer" target="_blank"><img src={propulsionLogo} width="200" alt="Learn how to become a Full-Stack developer with Propulsion Academy"/></a>

            
        </Navbar>
    )
}

export default Nav;