import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavLink to="/admin/dashboard">Admin</NavLink>
        |
        <NavLink to="/cat">Cat</NavLink>
        |
        <NavLink to="/dog">Dog</NavLink>
      </React.Fragment>
    )
  }
}

export default Menu
