import React from 'react';
import Layout from './Hoc/Layout';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';

import PrivateRoute from './Components/authRoutes/privateRoutes';

const Routes = (props) => {

  console.log(props)

  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <Route exact component={SignIn} path="/sign_in"/>
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
}

export default Routes;

