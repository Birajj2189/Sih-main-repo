import React, { useState,Component } from 'react'
import CentralScheme from './scheme-component/CentralScheme';
import StateScheme from './scheme-component/StateScheme';
import UgcScheme from './scheme-component/UgcScheme';


export default function Updates() {
     
     const [openTab, setOpenTab] = useState(1);

    return (
     <>
      <div className='bg-white updates-container flex flex-col justify-center items-center px-4 w-full sm:px-6 md:flex-row md:justify-between md:items-start'>

          <div className="left-section w-[90%] md:w-[40%]">

               {/* Latest Updates Section  */}
               <div className="latest-container my-4 w-full">
                    <div className="heading w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-t-md text-base font-medium text-white  bg-brightRed ">Latest Updates</div>
                    <div className="latest-box h-96 border-2 border-brightRed rounded-b-md">
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
          <div className="max-w-100vw md:w-1/2 schemes-container flex flex-wrap">
          <div className="w-full">
               <ul className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row" role="tablist">
                    <li className="-mb-px mr-1 flex-auto text-center">
                         <a
                         className={
                         "mb-1 text-font-medium mr-1 px-5 py-3 shadow-lg rounded block leading-normal hover:text-brightRedLight " +
                         (openTab === 1
                              ? "text-white bg-brightRed"
                              : "text-gray-500 bg-white")
                         }
                         onClick={e => {
                         e.preventDefault();
                         setOpenTab(1);
                         }}
                         data-toggle="tab"
                         href="#link1"
                         role="tablist"
                    >
                         <i className="fas fa-space-shuttle text-base mr-1"></i>Central Scheme
                         </a>
                    </li>
                    <li className="-mb-px mr-1 flex-auto text-center">
                         <a
                         className={
                         "mb-1 text-font-medium px-5 py-3 shadow-lg rounded block leading-normal hover:text-brightRedLight " +
                         (openTab === 2
                              ? "text-white bg-brightRed"
                              : "text-gray-500 bg-white")
                         }
                         onClick={e => {
                         e.preventDefault();
                         setOpenTab(2);
                         }}
                         data-toggle="tab"
                         href="#link1"
                         role="tablist"
                    >
                         <i className="fas fa-space-shuttle text-base mr-1"></i>UGC / AICTE Scheme
                         </a>
                    </li>
                    <li className="-mb-px mr-1 flex-auto text-center">
                         <a
                         className={
                         "mb-1 text-font-medium px-5 py-3 shadow-lg rounded block leading-normal hover:text-brightRedLight " +
                         (openTab === 3
                              ? "text-white bg-brightRed"
                              : "text-gray-500 bg-white")
                         }
                         onClick={e => {
                         e.preventDefault();
                         setOpenTab(3);
                         }}
                         data-toggle="tab"
                         href="#link1"
                         role="tablist"
                    >
                         <i className="fas fa-space-shuttle text-base mr-1"></i>State Scheme
                         </a>
                    </li>
                    
               </ul>
               <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
               <div className="px-4 py-5 flex-auto">
               <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <p>
                         Collaboratively administrate empowered markets via
                         plug-and-play networks. Dynamically procrastinate B2C users
                         after installed base benefits.
                         <br />
                         <br /> Dramatically visualize customer directed convergence
                         without revolutionary ROI.
                    </p>
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <p>
                         Completely synergize resource taxing relationships via
                         premier niche markets. Professionally cultivate one-to-one
                         customer service with robust ideas.
                         <br />
                         <br />
                         Dynamically innovate resource-leveling customer service for
                         state of the art customer service.
                    </p>
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <p>
                         Efficiently unleash cross-media information without
                         cross-media value. Quickly maximize timely deliverables for
                         real-time schemas.
                         <br />
                         <br /> Dramatically maintain clicks-and-mortar solutions
                         without functional solutions.
                    </p>
                    </div>
               </div>
               </div>
               </div>
          </div>
          </div>

      </div>
     </>
    );
}
