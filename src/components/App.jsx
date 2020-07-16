import React from 'react';

import {MainContainer} from './style';
import Map from './map/index';
import Nav from './navbar/index';
import Sidebar from './sidebar/index';

const Test = () => {

    return (
        <MainContainer>
            <Nav />
            <Map />
            <Sidebar />
        </MainContainer>
    )
}

export default Test;