import React from 'react'
import DailyShop from './DailyShop'
import News from './News'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <News/>
      <DailyShop/>
    </div>
  )
}

export default Home