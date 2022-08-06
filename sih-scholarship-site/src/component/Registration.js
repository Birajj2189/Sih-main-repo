import React, { Component } from 'react'

import {Link} from 'react-router-dom';

import {
     CalendarIcon
   } from '@heroicons/react/outline'
   

export class Registration extends Component {
  render() {
    return (
<div className='registration-container max-w-[100vw] px-5 py-24 mx-auto flex flex-wrap items-center body-font'>
     <h1 className='text-2xl w-full text-center text-gray-500 my-6'>Student Registration form</h1>
     <div className="flex justify-center items-center form-container w-full">
          <form className="w-full md:w-3/4 lg:w-1/2 bg-transparent " action="#" method="POST">
               <div className="shadow overflow-hidden sm:rounded-md">
               <div className="px-4 py-5 bg-white sm:p-6">
               <div className="grid grid-cols-6 gap-6">
               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="Phone_number" id="Phone_number" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email_address" id="email_address" autoComplete="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               
               
               <div className="col-span-6 sm:col-span-4">
                    <div className="flex relative inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 datepicker-input" placeholder="dd/mm/yyyy"/>
               </div>


               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                    <select id="country" name="country" autoComplete="country" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    </select>
               </div>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select id="category" name="category" autoComplete="category" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>General</option>
                    <option>OBC</option>
                    <option>Scheduled Caste (SC)</option>
                    <option>Scheduled Tribes (ST)</option>
                    </select>
               </div>

               <div className="col-span-6">
                    <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                    <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" name="city" id="city" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                    <input type="text" name="state" id="state" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                    <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>
               </div>
               </div>
                    <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
                    <Link to="/Login" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                    >
                    Register
                    </Link>
                    </div>
               </div>
          </form>
     </div>
</div>
    )
  }
}

export default Registration