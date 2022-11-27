import React from 'react'
import Hero from '../Hero'
import Portfolio from './Portfolio'

function page() {
  return (
    <div>
      <Hero heading='My work' message='Some of my most recent works in the city.' />
      <Portfolio />
    </div>
  )
}

export default page