import React, { Component } from "react";
import { dataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
from "react-router-dom";
import { Connector } from "./shop/Connector";
export default class App extends Component {
render() {
return <Provider store={ dataStore }>
<Router>
<Switch>
<Route path="/shop" component={ Connector } />
<Redirect to="/shop" />
</Switch>
</Router>
</Provider>
}
}