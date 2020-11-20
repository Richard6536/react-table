import React from 'react'
import { Create } from '../components/Create'
import { CrudList } from '../components/CrudList'
import { Edit } from '../components/Edit';
import { TableView } from '../components/TableView';
import { Navbar } from '../components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { CrearUsuario } from '../components/CrearUsuario';



export const AppRoute = () => {
    return (
        <Router>
        <Navbar />
            <div className="container mt-5">
                <Switch>
                    
                    <Route path="/crearUsuario" component={ CrearUsuario }/>

                    <Route path="/create" component={ Create }/>
                    <Route path="/edit/:id" component={ Edit }/>
                    <Route extact plath="/" component={ TableView } />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
