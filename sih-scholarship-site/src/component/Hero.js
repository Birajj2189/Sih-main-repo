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
        <section className="hero-section  text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-8 md:py-12 items-center justify-center flex-col">
            {/* <img className="lg:w-1/2 lg:h-72 md:w-2/3 md:h-60 w-5/6 h-56 mb-6 md:m-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      
      
          <div className="mb-6 md:mb-10">
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>


            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font md:text-3xl text-2xl mb-4 font-medium text-gray-900">National Scholarship Portal</h1>
              <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
              <div className="flex justify-center flex-wrap">
                <button className="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0 active:shadow-lg transition duration-30 ease-in-out"><UserIcon className="h-6 w-6 mx-1" aria-hidden="true" />New Registration</button>
                <button className="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0 active:shadow-lg transition duration-30 ease-in-out"><UsersIcon className="h-6 w-6 mx-1" aria-hidden="true" />Apply Fresh</button>
                <button className="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none hover:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0 active:shadow-lg transition duration-3 0 ease-in-out"><UserCircleIcon className="h-6 w-6 mx-1" aria-hidden="true" />Apply for Renewal</button>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Hero