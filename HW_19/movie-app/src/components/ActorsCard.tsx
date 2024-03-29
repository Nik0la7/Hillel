import React from 'react'
import { IActor } from '../models/actorModel'

interface actorProps {
    actor: IActor
}

const ActorsCard = ({ actor }: actorProps) => {

  return (
       // {/* <!-- Card Item --> */}
       <div
       className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
       >
           {/* <!-- Clickable Area --> */}
           {/* <Link to={`/actor/${actor.id}`}><div className="cursor-pointer"> */}
               <figure>
                   {/* <!-- Image --> */}
                   <img className='mx-auto' src={actor.image?.medium || "Image not exist yet"} />

                   <figcaption className="p-4">
                       {/* <!-- Title --> */}
                       <p
                           className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                           >
                           {actor.name}
                       </p>
                       {/* <!-- Description --> */}
                       <small
                           className="leading-5 text-gray-500 dark:text-gray-400"
   >
                           {/* <!-- Post Description --> */}
                           {/* {actor.genres} */}
                       </small>
                   </figcaption>
               </figure>
           {/* </div></Link> */}
   </div>
  )
}
export default ActorsCard