import React from 'react'

const Home = () => {
  return (
    <section className='homes'>
      <div className='home'>
        <img src={require('./img/house-1.jpeg')} alt='House 1' className='home__img' />
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full' />
        </svg>
        <h5 className='home__name'>Beautiful Familiy House</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin' />
          </svg>
          <p>NARAIL</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-profile-male' />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-expand' />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-key' />
          </svg>
          <p>$1,200</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img src={require('./img/house-2.jpeg')} alt='House 2' className='home__img' />
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full' />
        </svg>
        <h5 className='home__name'>Rose Villa</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin' />
          </svg>
          <p>CHOTTROGRAM</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-profile-male' />
          </svg>
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-expand' />
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-key' />
          </svg>
          <p>$2,750</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img src={require('./img/house-3.jpeg')} alt='House 3' className='home__img' />
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full' />
        </svg>
        <h5 className='home__name'>Green Garden</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin' />
          </svg>
          <p>SHAVER</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-profile-male' />
          </svg>
          <p>4 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-expand' />
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-key' />
          </svg>
          <p>$850</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img src={require('./img/house-4.jpeg')} alt='House 4' className='home__img' />
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full' />
        </svg>
        <h5 className='home__name'>Large Rustical Villa</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin' />
          </svg>
          <p>KHULNA</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-profile-male' />
          </svg>
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-expand' />
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-key' />
          </svg>
          <p>$1,950</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img src={require('./img/house-5.jpeg')} alt='House 5' className='home__img' />
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full' />
        </svg>
        <h5 className='home__name'>Landlord House</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin' />
          </svg>
          <p>DHAKA</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-profile-male' />
          </svg>
          <p>18 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-expand' />
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-key' />
          </svg>
          <p>$9,5000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img src={require('./img/house-6.jpeg')} alt='House 6' className='home__img' />
        <svg className='home__like'>
          <use xlinkHref='img/sprite.svg#icon-heart-full' />
        </svg>
        <h5 className='home__name'>Modern Familiy Apartment</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-map-pin' />
          </svg>
          <p>DHAKA</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-profile-male' />
          </svg>
          <p>3 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-expand' />
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref='img/sprite.svg#icon-key' />
          </svg>
          <p>$2,500</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
    </section>
  )
}

export default Home
