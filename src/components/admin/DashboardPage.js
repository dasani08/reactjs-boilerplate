import React from 'react'
import { connect } from 'react-redux'
import { getCats } from 'reducers/admin'

class DashboardPage extends React.Component {
  render() {
    return <div>Dashboard</div>
  }
}

const mapStateToProps = state => {
  return state.admin
}
const mapDispatchToProps = dispatch => ({
  getCats: () => dispatch(getCats())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)
