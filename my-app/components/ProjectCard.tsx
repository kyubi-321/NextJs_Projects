interface Props{
    project: string
    number: string
}

const ProjectCard = ({project , number} :Props) => {
  return (
    <div className='flex p-5 space-x-5  md:flex m-2  border border-space-x-2 w-full  rounded-full  '>
            <h2 className='text-xl font-bold text-white'><u className='space-x-2'>{number}</u></h2>
            <div>
                <h3>{project}</h3>
                
            </div>
        </div>
  )
}



export default ProjectCard