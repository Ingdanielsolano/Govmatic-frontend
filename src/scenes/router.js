import React from 'react';
import { Route, Switch, withRouter, Router } from 'react-router';
import { GrantList } from './list/index';
import { DetailGrant } from './list/detail';

const ShowPrivate = () => {

  return (
    <Switch>
      <Route exact path="/" component={GrantList} />
      <Route exact path="/detail" component={DetailGrant} />
    </Switch>
  )
}

export default withRouter(ShowPrivate)
