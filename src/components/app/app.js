import React from "react";
import {Route, Switch} from "react-router-dom";
import './app.scss'

import ShopHeader from "../shop-header";
import {CartPage, HomePage} from "../pages";

const App = () => {
    return (
        <main role='main' className='container'>
                <ShopHeader total={250} numItems={5}/>
                <Switch>
                    <Route path='/'
                           component={HomePage}
                           exact
                    />
                    <Route path='/cart'
                           component={CartPage}/>
                </Switch>
        </main>

    )
}
export default App