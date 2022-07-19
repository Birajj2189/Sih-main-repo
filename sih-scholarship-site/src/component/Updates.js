import React, { Component } from 'react'
import CentralScheme from './scheme-component/CentralScheme';
import StateScheme from './scheme-component/StateScheme';
import UgcScheme from './scheme-component/UgcScheme';

// React router DOM -----------
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {Link} from 'react-router-dom';

// -----------------------------



export class Updates extends Component {
  render() {
    return (
     <Router>
      <div className='bg-white updates-container flex flex-col justify-center items-center px-4 w-full sm:px-6 md:flex-row md:justify-between md:items-start'>

          <div className="left-section w-[90%] md:w-[40%]">

               {/* Latest Updates Section  */}
               <div className="latest-container my-4 w-full">
                    <div className="heading w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-t-md text-base font-medium text-white  bg-brightRed ">Latest Updates</div>
                    <div className="latest-box h-60 border-2 border-brightRed rounded-b-md">
                    </div>
               </div>

               {/* HelpDesk */}
               <div className="help-container my-4 w-full">
                    <div className="heading  w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-t-md text-base font-medium text-white  bg-brightRed ">HelpDesk</div>
                    <div className="help-box h-60 border-2 border-brightRed rounded-b-md">

                    </div>
               </div>

          </div>

          {/* Schemes */}
          <div className="schemes-container my-4 w-[90%] md:w-[55%] " >
               <div className="heading mb-2 text-2xl font-semibold text-gray-500 w-full">
                    <div className='text-center'>Schemes</div>
               </div>
               <div className="scheme-cat flex flex-wrap">
                    <Link to="/central" className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-t-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight active">Central</Link>
                    <Link to="/ugc" className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-t-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight">UGC / AICTE</Link>
                    <Link to="/state" className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-t-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight">State</Link>
               </div>
               <div className="schemes-box border-2 border-brightRed rounded-lg p-1 w-full h-auto ">
                    <Routes>
                         <Route path="/" element={<Navigate to="/central"/>} />
                         <Route path="/central" element={<CentralScheme />} />
                         <Route path="/ugc" element={<UgcScheme />} />
                         <Route path="/state" element={<StateScheme />} />
                    </Routes>

               
               </div>
          </div>
      </div>
     </Router>
    )
  }
}

export default Updates