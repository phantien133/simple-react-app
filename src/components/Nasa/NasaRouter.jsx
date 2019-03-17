import React from 'react';
import { Route } from 'react-router-dom';

import PersistedList from './PersistedList';
import Search from './Search';

const NasaRouter = () => (
  <React.Fragment>
    <Route path="/search" component={Search} exact />
    <Route path="/list" component={PersistedList} exact />
  </React.Fragment>
);


export default NasaRouter;
