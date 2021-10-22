import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import './HeaderComponent.css'

export class HeaderComponent extends Component {
    render() {
      return (
        <header class="header-content header">
          <div class="log-content">
            <img src={logo} alt="logo"></img>
            <div class="emp-text-content">
              <span class="emp-text">EMPLOYEE</span>
              <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>
      )
    }
  }
  
  export default HeaderComponent