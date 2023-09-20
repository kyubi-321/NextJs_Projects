import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='m-10 mx-5'>
        <h1 className='font-semibold my-5 text-lg relative overflow-hidden'>Projects</h1>
        <div className=' flex-col m-2 md:grid grid-cols-2  '>
            <ProjectCard number="Number 1" project="Porfolio"/>
            <ProjectCard number="Number 2" project="AmazonClone"/>
            <ProjectCard number="Number 3" project="InstagramClone"/>
            <ProjectCard number="Number 4" project="FacebookClone"/>
            <ProjectCard number="Number 5" project="DiscordClone"/>
            <ProjectCard number="Number 6" project="cheaterClone"/>
        </div>
    </div>
  )
}

export default Projects