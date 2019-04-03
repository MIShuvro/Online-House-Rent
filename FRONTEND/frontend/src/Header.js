import React from 'react'

const Header = () => {
  return (
    
    <header className='header'>
      <img src={('./img/logo.png')} alt='logo' className='header__logo' />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <button className='btn header__btn'>View our properties</button>
    </header>
    
  )
}

export default Header
