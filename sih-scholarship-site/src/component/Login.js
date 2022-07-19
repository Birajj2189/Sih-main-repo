/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Hero from './Hero';
import React from 'react'

import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  TranslateIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {Link} from 'react-router-dom';

const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];
const services = [
  {
    name: 'Analytics',
    href: '#',
  },
  {
    name: 'Engagement',
    href: '#',
  },
  { name: 'Security',
    href: '#', 
  },
  {
    name: 'Integrations',
    href: '#',
  },
  {
    name: 'Automations',
    href: '#',
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security',
    href: '#',
    icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (  
    <div className="-z-10 login-container">
    <section className="text-gray-500 body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">National Scholarship Portal</h1>
          <p className="leading-relaxed mt-4 text-gray-500">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <div className="opacity-[0.85] shadow-md lg:w-2/6 md:w-1/2 bg-veryLightGray rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login in</h2>
          <div className="mb-4">
            <label htmlFor="full-name" className="tracking-wide leading-7 text-sm text-gray-500">Application ID</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className=" tracking-wide leading-7 text-sm text-gray-500">Password</label>
            <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div>
                <Link
                  to="/"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight active:shadow-lg transition duration-30 ease-in-out"
                >
                  Login
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  New Student?{' '}
                  <Link to="/Registration" className="text-brightRed hover:text-brightRedLight">
                    Register Here
                  </Link>
                </p>
              </div>

        </div>
      </div>
    </section>
    </div>
  )
}
