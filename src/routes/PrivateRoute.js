// For react router API: https://reacttraining.com/react-router/web/api/Route
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isLoggedIn = () => true

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn()) {
          return <Component {...props} />
        }
        return <Redirect to="/account/login" />
      }}
    />
  )
}
export default PrivateRoute
