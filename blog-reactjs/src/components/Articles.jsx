
import { Link } from "react-router-dom";

const Articles = ({arts}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
        {
          arts.map((elm,i)=>{
            return (
              <Link key={i} to={`article/${i+1}`} >
              <div className="w-[90%] mx-auto max-w-sm mt-20 flex flex-col gap-3">
              <h1 className="text-2xl">{elm.title}</h1>
              <p className="text-sm max-w-[95%]">{elm.summary}</p>
              <img className="rounded-2xl" src={elm.img} alt="" />
            </div>
            </Link>
                
            )
          })
        }
    </div>
  )
}

export default Articles