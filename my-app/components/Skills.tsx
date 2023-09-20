import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='m-5'>
        <h1 className='font-semibold my-5 text-lg relative overflow-hidden'>Skills</h1>
        <div className='flex-col md:flex-row space-x-8'>
          <SkillCard skill="ReactJS"/>
          <SkillCard skill="NodeJS"/>
          <SkillCard skill="MongoDB"/>
          
          <SkillCard skill="NextJS"/>
         
          <SkillCard skill="Programming"/>
        </div>
    </div>
  )
}

export default Skills