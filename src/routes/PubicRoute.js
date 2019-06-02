// For react router API: https://reacttraining.com/react-router/web/api/Route
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />
      }}
    />
  )
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRoute)
