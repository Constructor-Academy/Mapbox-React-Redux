import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../components/App";

const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Route path={'/'} component={App} />
            </Switch>
        </Router>
    </>

};

export default Routes;
