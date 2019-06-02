import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { Switch, withRouter } from 'react-router-dom'
import BlockUi from 'react-block-ui'

import './App.css'
import PrivateRoute from 'routes/PrivateRoute'
import Menu from 'components/layout/Menu'
import DashboardPage from 'components/admin/DashboardPage'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BlockUi blocking={this.props.isLoading}>
        <div className="App">
          <Menu />
          <Switch>
            <PrivateRoute
              exact
              path="/admin/dashboard"
              component={DashboardPage}
            />
          </Switch>
        </div>
      </BlockUi>
    )
  }
}

const mapStateToProps = state => {
  return state.ui.root
}
const mapDispatchToProps = () => ({})

export default hot(module)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
)
