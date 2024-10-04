import React from 'react'
import {assets} from '../../assets/assets'
import './Home.css'
import Header from '../../components/Header'
import {useNavigate} from 'react-router-dom'

const Home = ({setShowAdd}) => {

  const navigate = useNavigate();

  return (
    <div className='home'>
      `
      <Header />
      <div className="button-section">
      <button className='btn' onClick={() => setShowAdd(true)}>Add a new student</button>
      <button className='btn' onClick={() => navigate('./allstudents')}>View all students</button>
      </div>

    </div>
  )
}

export default Home
