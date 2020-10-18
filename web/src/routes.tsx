import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphonagesMap from './pages/OrphonagesMap';
import Orphonage from './pages/Orphanage';
import CreateOrphonage from './pages/CreateOrphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/app' component={OrphonagesMap} />
        <Route path='/orphanages/create' exact component={CreateOrphonage} />
        <Route path='/orphanages/:id' component={Orphonage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;