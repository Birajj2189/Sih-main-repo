import React, { Component } from 'react'
import CentralScheme from './scheme-component/CentralScheme';
import StateScheme from './scheme-component/StateScheme';
import UgcScheme from './scheme-component/UgcScheme';
import Navbar from './Navbar';


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
     // let changeTab = (index) => {
     //      var tabButtons = document.getElementById('tab-buttons').children ;
     //      var tabPanels = document.getElementById('tab-panels').children;

     //      // Remove the active utility classes from all tabs (bg-white, text-blue-600)
     //      // And hide all tab content (with the "hidden" utility)
     //      for (var i = 0; i < tabButtons.length; i++) {
     //          tabButtons[i].classList.remove('text-blue-600');
     //          tabButtons[i].classList.remove('bg-white');
     //          tabButtons[i].classList.add('text-white');
     //          tabPanels[i].classList.add('hidden');
     //      }

     //      // Add the active utility classes to the currently active tab (bg-white, text-blue-600)
     //      // And show the current tab content (remove the "hidden" utility)
     //      tabButtons[index].classList.remove('text-white');
     //      tabButtons[index].classList.add('text-blue-600');
     //      tabButtons[index].classList.add('bg-white');
     //      tabPanels[index].classList.remove('hidden');
     // }

    return (
     <>
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

          {/* <!-- The wrapper of tabs --> */}
          <div className="drop-shadow-lg">
          {/* <!-- Tab Buttons --> */}
               <div id="tab-buttons" className="flex bg-blue-600">
                    <a href="#" /*onClick={changeTab(0)*/ className="inline-block px-8 py-3 bg-white text-blue-600">Tab
                         1</a>
                    <a href="#" /*onClick={changeTab(1)*/ className="inline-block px-8 py-3 text-white">Tab
                         2</a>
                    <a href="#" /*onClick={changeTab(2)*/ className="inline-block px-8 py-3 text-white">Tab
                         3</a>
               </div>

        {/* <!-- Tab Panels --> */}
          <div id="tab-panels" className="bg-white px-8 py-6">
               <div>
                    <h1 className="text-2xl">Tab 1 Content</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
               </div>

               <div className="hidden">
                    <h1 className="text-2xl text-red-500">Tab 2 Content</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
               </div>

               <div className="hidden">
                    <h1 className="text-2xl text-purple-600">Tab 3 Content</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloremque.</p>
               </div>
          </div>









          {/* <div className="schemes-container my-4 w-[90%] md:w-[55%] " >
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

               
               </div>*/}
          </div> 
      </div>
     </>
    )
  }
}

export default Updates;