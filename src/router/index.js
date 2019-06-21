import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom"

import Home from "../view/home/home"
import About from "../view/about/about"
import Book from "../view/book/book"
import Details from "../view/details/details"
import User from "../view/user/user"

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/home" />
                )} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/book" component={Book} />
                <Route path="/details" component={Details} />
                <Route path="/user" component={User} />
            </Switch>
        )
    }
}

export default RouterIndex;