import React from 'react';

export default function Role() {
  return (
    <div>
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-gray-600">Features</h1>
            <h3 className="text-xl mb-5 font-light">Features of Placeopedia ensure smooth user experience.</h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-gray-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full  bg-gray-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full  bg-gray-500"></span>
              <span className="inline-block w-3 h-1 rounded-full  bg-gray-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full  bg-gray-500 ml-1"></span>
            </div>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-500">Dynamic Opportunities Section</h5>
                  <p className="text-sm text-gray-600">Stay updated with a diverse range of internship, job placement, and research opportunities within your college.</p>
                </div>
                <a href="#" className="flex justify-between items-center group-hover:text-gray-800">
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-500">Trustworthy Guidance and Success Stories</h5>
                  <p className="text-sm text-gray-600">Gain valuable guidance and inspiration from real success stories shared by college alumni.</p>
                </div>
                <a href="#" className="flex justify-between items-center group-hover:text-gray-800">
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-500">Access Limited to IIIT A Community</h5>
                  <p className="text-sm text-gray-600">Enjoy a secure and exclusive platform accessible only to members of the IIIT A community.</p>
                </div>
                <a href="#" className="flex justify-between items-center group-hover:text-gray-800">
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-gray-500">One Blog is assigned Per User</h5>
                  <p className="text-sm text-gray-600">Share your unique perspective and experiences through a single blog post.</p>
                </div>
                <a href="#" className="flex justify-between items-center group-hover:text-gray-800">
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}