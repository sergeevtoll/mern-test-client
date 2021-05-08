import { Router } from 'express';
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import UpLoad from '../pages/UpLoad';
import LinksPage from '../pages/Catalog';

export const useRouts = (isAutentical:boolean) => {
  if (isAutentical) {
    return (
      <Switch>/
        <Route path='/catalog'>
          <LinksPage />
        </Route>
        <Route path='/upload'>
          <UpLoad />
        </Route>
        <Redirect to='/upload'/>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      <Redirect to='/'/>
    </Switch>
  )
}
