import React from 'react'
import './ReasonsList.css'
import {ReasonsData} from '../../data'
import Reasons from '../Reasons/Reasons'

const ReasonsList = () => {
  return (
    <div className='rl'>
      <div className='rl-texts'>
        <h1 className='rl-title'>"Falling In Love With You ..."</h1>
        <p className='rl-desc'>
          Rommane, Amor mio a continuacion veras una parte de las razones por las cual te amo, razones por las cual
          eres la mujer mas grandiosa que puede existir ...
        </p>
      
      <div className='rl-list'>
      
        {ReasonsData.map((item) => (
          <Reasons key={item.id} msg={item.msg}/>
          ))}
      </div>
      </div>
    </div>
  )
}

export default ReasonsList