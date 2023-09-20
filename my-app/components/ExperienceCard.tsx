
interface Props{
    company:string,
    date:string,
    number:string
}

const ExperienceCard = ({company , date , number} :Props) => {
  return (
    <div className='flex p-5 space-x-5    '>
            <h2 className='text-xl font-bold text-white'><u className='space-x-2'>{number}</u></h2>
            <div>
                <h3>{company}</h3>
                <p>{date}</p>
            </div>
        </div>
  )
}

export default ExperienceCard