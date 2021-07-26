import React from "react";
import './app.scss'
import {Route, Switch} from "react-router-dom";
import Navbar from "../navbar";
import {CartPage, HomePage} from "../pages";

const App = () => {
    return (
        <div>
                <Navbar/>
            <Switch>
                <Route path='/'
                       component={HomePage}
                       exact
                />
                <Route path='/cart'
                       component={CartPage}/>
            </Switch>
        </div>
    )
}
export default App