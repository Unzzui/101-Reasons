import React from 'react'
import './Intro.css'
import Love from '../../images/love.png'

const Intro = () => {
  return (
      
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
            

                <h2 className='i-intro'>101 Reasons</h2>
                <h1 className='i-loveyou'>Why I Love You!</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Rommane ♡</div>
                        <div className='i-title-item'>Diosa</div>
                        <div className='i-title-item'>Divina</div>
                        <div className='i-title-item'>Expectacular</div>
                        <div className='i-title-item'>Grandiosa</div>
                        <div className='i-title-item'>Perfecta</div>
                        <div className='i-title-item'>Hermosa</div>

                    </div>
                </div>
                <p className='i-desc'>
                    Amor mio ... aunque lo diga en mil palabras nunca lograre encontrar la mejor manera de explicarte
                    lo muchisimo que te amo y lo inefable de este sentimiento ... Romanne Te Amo !

                </p>
                </div>
            </div>
                <div className='i-right'>
                    <div className='i-bg'></div>
                    <img src={Love} alt='' className='i-img'/>
            
                </div>
         </div>
  )
}

export default Intro