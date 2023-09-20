import React from 'react'

const Footer = () => {
  return (
    <div className='m-5 flex'>
      <div className='space-2'>
        <p className='text-5xl text-white font-bold m-4'>Portfolio</p> 
        <a  className="m-2 text-pink-600" href= "http://instagram.com/ankit_badhani_11">Instagram</a>
        <a  className="m-2 text-blue-300" href= "twitter.com/ankit_11">Twitter</a>
        <a className="m-2 text-blue-950" href= "linkedin.com/Ankit badhani">Linkedin</a>
      </div>

      
        <div>
          <p></p>
          <p className='text-3xl font-bold m-5 ml-48'>Links for help</p>
          <div className='ml-48 space-x-2 flex'>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
          </div>
        </div>

        <div className="m-3 " >
          <div className='ml-40'>
          <p className="text-3xl via-violet-500">Mail Me:</p>
          <a className="text-2xl  space-y-2 mt-4 mr-2" href="mailto: ankitbadhani102@gmail.com">
            ankitbadhani102@gmail.com
          </a>
          </div>
         
        </div>
      
    </div>
  )
}

export default Footer