import { useParams } from 'react-router-dom'

const Article = ({arts}) => {
    let {id} = useParams();
  
  return (
    <div className="w-[90%] mx-auto mt-20 flex flex-col gap-3">
        <h1 className="text-2xl">{arts[id-1].title}</h1>
        <p className="text-sm max-w-[95%]">{arts[id-1].summary}</p>
        <img className="rounded-2xl" src={arts[id-1].img} alt="" />
        <p className="text-md mt-5">{arts[id-1].body}</p>
    </div>
  )
}

export default Article