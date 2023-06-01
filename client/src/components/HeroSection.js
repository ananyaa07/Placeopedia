import React from 'react'
import image from "../assets/college.jpeg"
export default function HeroSection() {
  return (
    <div >
      <section className="relative  bg-white">
<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
<div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
  backgroundImage: `url(${image})`
}}>


          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                 Placeopedia
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                A "Wikipedia for Students" and a platform that provides valuable information about placement opportunities and various career prospects available to students. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}
>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="bg-gray-50 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-gray-50 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Opportunities</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  The "Opportunities" section is a dedicated space that showcases the diverse range of opportunities available to students within our college.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Inspiration</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  The section showcasing inspiring stories of college alumni and their journeys provides a platform to highlight the experiences of former students. I
                   


                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-star"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Recognition</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    A chance to get recognized for your work and achievements in college.A chance to motivate others and maintain legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
           <footer className="relative  pt-8 pb-6 mt-1">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        
      </div>
    </div>
  </div>
</footer>
      </section>
      </section>

    </div>
  )
}
