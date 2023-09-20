import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className=' '>
        <h1 className='font-semibold my-5 text-lg relative overflow-hidden'>Experience</h1>
        <div className='flex-col md:grid grid-cols-2 '>
        <ExperienceCard
            company = "BasketHunt Pvt Ltd"
            date = "Date"
            number= "Number 1"
        />

                <ExperienceCard
            company = "Consultants Pvt Ltd"
            date = "Date"
            number= "Number 2"
        />

        <ExperienceCard
            company = "CodeClause Pvt Ltd"
            date = "Date"
            number= "Number 3"
        />

        <ExperienceCard
            company = "Codsoft Pvt Ltd"
            date = "Date"
            number= "Number 4"
        />
        </div>
        

    </div>
  )
}

export default Experience