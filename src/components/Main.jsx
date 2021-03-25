import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from './About';
import Base from './Base';
import Client from './Client';
import Contents from './Contents';
import Home from './Home';
import NavPage from './Navbar';
import Partner from './Partner';
import Product from './Product';
import Read1 from './Read1';
import Read2 from './Read2';
import Read3 from './Read3';
import Read4 from './Read4';
import Services from './Services';
import Technology from './Technology';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavPage/>
            <Switch>
                <Route exact path="/" component={Contents}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/product" component={Product}/>
                <Route exact path="/technology" component={Technology}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/client" component={Client}/>
                <Route exact path="/partner" component={Partner}/>
                <Route exact path="/read1" component={Read1}/>
                <Route exact path="/read2" component={Read2}/>
                <Route exact path="/read3" component={Read3}/>
                <Route exact path="/read4" component={Read4}/>
                
                <Redirect to="/" />
            </Switch>
            <Base/>
            </>

         );
    }
}
 
export default Main;