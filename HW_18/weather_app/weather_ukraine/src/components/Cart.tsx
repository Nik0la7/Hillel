import { coordinates } from '../data/coordinates'
import {
    Link
  } from "react-router-dom";

 const Cart = (props: any) => {

    let cart = coordinates.map(e => 
        <Link to={'/mainCart'} key={e.id} state={{name: e.city, id: e.id, lat: e.lat, lon: e.lon, dImg: e.dImg, nImg: e.nImg}} >
                <div 
                className="flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                <div
                    className="h-14 bg-white hover:bg-blue-500 hover:text-white transition-all gap-2 p-4 flex flex-row items-center">
                    <span className="flex-grow font-bold text-xl">{e.city}</span>
                    <span className="">
                    <button className="btn">☰</button>
                </span>
                    <div>
                        <button className="btn">×</button>
                    </div>
                </div>
                <div className="flex flex-col fit-content bg-white">
                    <div className="fit-content overflow-y-auto flex-grow p-4 ">
                        <p>{}</p>
                        <p>{}</p>
                    </div>
                </div>
                {/* <img src="/public/Ukraine/donetsk--1038078-5.jpeg" alt="" /> */}
                { !props.style && <img className='cartImg' src={e.dImg} alt="" />}
                { props.style && <img className='cartImg' src={e.nImg} alt="" />}
            </div> 
            </Link>
    )

    const findCity = (elem: string) => {
        if(elem.length !== 0) {
            let tempCart = cart.filter((e: any) => {
                return e.props.state.name.toLowerCase().startsWith(elem);
            })
            cart = tempCart;
        } 
    }
    findCity(props.cartState);
    return(
        <>
            {cart}
        </>
    )
}
export default Cart