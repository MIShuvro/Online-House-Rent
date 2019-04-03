import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import TopHeader from './TopHeader'
import './sass/main.scss'

export default class App extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <TopHeader />
          <Header />
          <Home />
        </div>
      </>
    )
  }
}
