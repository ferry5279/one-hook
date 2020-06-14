import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import PrivateRoute from '@@/PrivateRoute'
import { Login, Home, Lian ,One,Two} from './assembly'
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/lian",
    component: Lian,
    children: [
      {
        path: "/lian/:cid",
        component: Lian,
      }
    ]
  },
 
]
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/lian/:cid" component={Lian} />
      <Route path="/home" component={Home} />
      <PrivateRoute>{renderRoutes(routes)}</PrivateRoute>
      </Switch>
      </BrowserRouter>
    )
  }
}
