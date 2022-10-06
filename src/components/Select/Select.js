import React from 'react'

import './selectstyles.css'


import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import Keywest from '../../assets/keywest.jpg'


import Selectimg from '../Selectimg/Selectimg'

function Select() {
  return (
    <div name='views' className='select'>
      <div className='container'>
        <Selectimg bgImg={BoraBora} text='Bora Bora' />
        <Selectimg bgImg={BoraBora2} text='Emerald Bay' />
        <Selectimg bgImg={Maldives} text='Maldives' />
        <Selectimg bgImg={Maldives2} text='Grenada' />
        <Selectimg bgImg={Maldives3} text='Barbados' />
        <Selectimg bgImg={Keywest} text='Key West' />
      </div>

    </div>
  )
}

export default Select