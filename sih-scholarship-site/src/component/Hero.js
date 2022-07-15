import React, { Component } from 'react'
import {
  UserIcon,
  UsersIcon,
  UserCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/outline'


export class Hero extends Component {
  render() {
    return (
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-8 md:py-12 items-center justify-center flex-col">
            <img class="lg:w-1/2 lg:h-72 md:w-2/3 md:h-60 w-5/6 h-56 mb-6 md:m-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font md:text-3xl text-2xl mb-4 font-medium text-gray-900">National Scholarship Portal</h1>
              <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
              <div class="flex justify-center flex-wrap">
                <button class="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0"><UserIcon className="h-6 w-6 mx-1" aria-hidden="true" />New Registration</button>
                <button class="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0"><UsersIcon className="h-6 w-6 mx-1" aria-hidden="true" />Apply Fresh</button>
                <button class="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0"><UserCircleIcon className="h-6 w-6 mx-1" aria-hidden="true" />Apply for Renewal</button>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Hero