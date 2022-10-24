import React, { useState } from 'react'
import Cart from '../components/Cart'

const Home = (props: any) => {

  const [cartState, setCartState] = useState([]) 
  return (
    <>
        <div className="relative text-lg bg-transparent text-gray-800 max-w-sm my-0 mx-auto " >
          <div className="flex items-center border-b-2 border-teal-500 py-2">
	          {!props.style && <input className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" onChange={(event: any) => setCartState(event.target.value.toLowerCase())}></input>}
	          { props.style && <input className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none text-white" type="text" placeholder="Search" onChange={(event: any) => setCartState(event.target.value.toLowerCase())}></input>}
	          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              { !props.style && <svg className="h-4 w-4 fill-current"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px"> 
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>}
              { props.style && <svg className="h-4 w-4 fill-current text-white"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px"> 
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>}
	          </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto mt-5 pb-8">
            <Cart style={props.style} cartState={cartState}/>
        </div>
    </>
  )
}
export default Home
