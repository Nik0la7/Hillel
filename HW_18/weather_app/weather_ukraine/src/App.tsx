import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import MainCart from "./pages/MainCart";
// import Contact from "./pages/Contact";
// import FindPlace from "./pages/FindPlace";
import { useState } from "react";
import Home from "./pages/Home";

const App = () => {

  const [style, setDarkMode] = useState(false)
  const mainBgStyle = style ? 'bg-slate-900' : 'bg-gradient-to-r'
  const mainClasses = ['from-cyan-500 to-blue-500 min-h-screen', mainBgStyle]

  return (
    <>
    <Router>
      <div  className={mainClasses.join(' ')}>
            <div  className='flex justify-between pl-5 pt-3 h-20'>
                <div className="left-item">
                  <img src="./main-logo.png" alt="" className="w-12 inline-block" />
                  <span className="text-white pl-5">Weather Ukraine</span>
                </div>
                <div>
                  <ul className='pl-5'>
                        {!style && <img id="night" src="./half-moon.png" alt="" className="w-12 inline-block pr-5 " onClick={() => setDarkMode(true)}/>}
                        {style && <img id="sun" src="./sun.png" alt="" className="w-12 pr-5 inline-block" onClick={() => setDarkMode(false)}/>}
                        <li className='inline-block p-3 text-lime-50 pr-10'>
                          <Link to={'/'}> Home </Link></li>
                        {/* <li className='inline-block p-3 text-lime-50'>
                          <Link to={'/findPlace'}> Find Place </Link>
                        </li>
                        <li className='inline-block p-3 text-lime-50'>
                          <Link to={'/contact'}> Contacts </Link>
                        </li> */}
                        {/* <li className='inline-block p-3 text-lime-50'>
                          <Link to={'/About'}> About </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            <Routes>
              <Route path="/" element={<Home style={style}/>}/>
              {/* <Route path="/findPlace" element={<FindPlace/>}/>
              <Route path="/contact" element={<Contact />}/> */}
              <Route path="/mainCart" element={<MainCart style={style}/>}/>
            </Routes> 
      </div>
    </Router>
    </>
  );
}
export default App;