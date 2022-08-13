import React from 'react'
import {Link} from 'react-router-dom';

export default function StudentQualification() {
  return (
     <div className='registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font'>
    
           
     <div className='flex justify-center w-full mb-2'>
    <div className="flex mx-auto flex-wrap mb-20">
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>Aadhaar Verification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium shadow-xl bg-gray-100 inline-flex items-center leading-none border-brightRed text-brightRed tracking-wider rounded-t">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>Student Qualification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>Family Income
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>ITR Verification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>Domicile Verification
      </a>
    </div>
    </div>




     <div className="flex justify-center items-center form-container w-full">
          <form className="w-full md:w-3/4 lg:w-1/2 bg-transparent " action="#" method="POST">
               <div className="shadow overflow-hidden sm:rounded-md">
               <h1 className='bg-white text-3xl w-full text-center text-gray-900 py-6 rounded'>Student Qualification</h1>
               <div className="px-4 py-5 bg-white sm:p-6">
               <div className="grid grid-cols-6 gap-6">
               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Personal Details</h1>
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

               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">OTP</label>
                    <input type="text" name="Phone_number" id="Phone_number" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email_address" id="email_address" autoComplete="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-2 sm:col-span-2">
                    <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">OTP</label>
                    <input type="text" name="Phone_number" id="Phone_number" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" name="date" id="dob" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="gender" name="gender" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                    </select>
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

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Indeficartion Details</h1>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select id="identification_doc" name="category" autoComplete="category" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="default">Select an Option</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option>PAN</option>
                    <option>Driving Licesence</option>
                    <option>Voter Card</option>
                    <option>Passport</option>
                    </select>
               </div>

               <div id="id_no" className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="id_no" className="block text-sm font-medium text-gray-700">Unique Identification Number</label>
                    <input type="text" name="id_no" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Bank Details</h1>

               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="acc_no" className="block text-sm font-medium text-gray-700">Bank A/C Number</label>
                    <input type="text" name="acc_no" id="acc_no" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>


               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="ifsc_no" className="block text-sm font-medium text-gray-700">Bank IFSC Number</label>
                    <input type="text" name="ifsc_no" id="ifsc_no" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               </div>

               <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>Residential Address</h1>
               
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
                    <Link to="/scholarships/Family-Income" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                    >
                    Next
                    </Link>
                    </div>
               </div>
          </form>
     </div>
     </div>

  )
}
