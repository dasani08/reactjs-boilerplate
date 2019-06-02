// For react router API: https://reacttraining.com/react-router/web/api/Route
import React from 'react'
import { Route } from 'react-router-dom'

const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />
      }}
    />
  )
}
export default GuestRoute
