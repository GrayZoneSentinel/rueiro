import React from 'react';
import Layout from './Hoc/Layout';

import { Switch } from 'react-router-dom';

import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/Matches';
import AddEditMatch from './Components/Admin/Matches/addEditMatch';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

const Routes = (props) => {

  console.log(props)

  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_members/edit_member" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_members/edit_member/:id" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_members" exact component={AdminMatches}/>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
        <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
      </Switch>
    </Layout>
  );
}

export default Routes;

