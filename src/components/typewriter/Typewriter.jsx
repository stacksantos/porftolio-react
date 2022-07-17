import React from 'react'

const Typewriter = () => {
    
  return (
    <div className='stacksantos'>
    <Typewriter
      onInit={(typewriter) => {
        typewriter

          .pauseFor(3200)
          .typeString('I')
          .pauseFor(200)
          .typeString("'")
          .pauseFor(100)
          .typeString('m ')
          .pauseFor(200)
          .typeString('st')
          .pauseFor(300)
          .typeString('a')
          .pauseFor(100)
          .typeString('cks')
          .pauseFor(300)
          .typeString('a')
          .pauseFor(100)
          .typeString('n')
          .pauseFor(100)
          .typeString('to')
          .pauseFor(200)
          .typeString('s')
          .pauseFor(1000)
          .deleteAll()
          .pauseFor(300)
          .typeString('Welcome')
          .start();
      }}
    />
  </div>
  )
}

export default Typewriter