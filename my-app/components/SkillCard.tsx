interface Props{
    skill:string,
   
}

const SkillCard = ({skill} :Props) => {
  return (
    <a className='border w-5  rounded-md bg-green-500 p-1 text-center font-bold  hover:text-blue-500 ' href="">
            
              {skill}
            
          </a>
  )
}

export default SkillCard