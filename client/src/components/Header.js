import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href='/'>HOme </a></li>
          <li> <a href='/favorite'>fav</a> </li>
        </ul>

      </div>
    )
  }
}

export default Header
