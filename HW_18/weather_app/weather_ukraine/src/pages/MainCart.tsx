import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import WeatherCart from '../components/WeatherCart';
import { IWeather } from '../models';

const MainCart = (props: any) => {
  const location = useLocation()
  const { name, dImg, nImg } = location.state
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(false)
  let dayCart: any = [];
  // let nightCart: any = [];

  async function fetchWeather() {
    setLoading(true)
  const response: any = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=6472f02600e79ceb63b06a84ee3cb2c6`);
 
  response.data.list.map((e: any) => {
    let hours = e.dt_txt.substr(11);
    // let date = e.dt_txt.substr(0, 10)
    if(hours === "12:00:00"){
      dayCart.push(e); 
    };
    // else if(hours === "00:00:00"){
    //   nightCart.push(e);
    // }
    setWeather(dayCart)
    setLoading(false)
  })
}


useEffect(() => {
  fetchWeather()
},[])

return (
  <>
  <div>
    <div className="bg_img">
      { !props.style &&<img className='fixed h-full w-full' src={dImg} alt="" />}
      { props.style &&<img className='fixed h-full w-full' src={nImg} alt="" />}
    </div>
    <div className="block relative text-center border-white w-60 text-2xl rounded-3xl mx-auto my-0 border-2 text-white top-8">{name}</div>
    { loading && <div className='text-center'>
      <span className='relative  top-52 font-bold text-xl text-white bg-black p-10 rounded-3xl'>Loading...</span>
    </div>}
  </div>
      <div className="container mx-auto relative top-96">
          <div className="flex items-center justify-center h-full">
            { weather.map((e: IWeather) => <WeatherCart weather={e} key={e.dt}/>)}
          </div>
      </div>
  </>
      )
}
export default MainCart
