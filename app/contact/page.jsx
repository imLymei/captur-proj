import React from 'react'
import Hero from '../Hero'
import Contact from './Contact'

function page() {
  return (
    <div>
        <Hero heading={'Talk with me'} message={'Submit the form below for more informations.'} />
        <Contact />
    </div>
  )
}

export default page