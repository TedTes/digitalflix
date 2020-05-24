import React from "react";
import { dataStore,persistor } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
from "react-router-dom";
import { Connector } from "./shop/Connector";
import { PersistGate } from 'redux-persist/integration/react'
export default function App () {

return <Provider store={ dataStore }>
    <PersistGate loading={null} persistor={persistor}>
<Router>
<Switch>
<Route path="/shop" component={ Connector } />
<Redirect to="/shop" />
</Switch>
</Router>
</PersistGate>
</Provider>
}
