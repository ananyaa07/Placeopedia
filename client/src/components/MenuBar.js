import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="text-center max-w-xl mx-auto mt-32">
        <h1 className="text-4xl md:text-6xl font-bold  text-gray-600">
          Opportunities
        </h1>
      </div>

      <div className="flex flex-wrap justify-center mt-16  ">
        <div className="w-3/4">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 1 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 2 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 3 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 1 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 2 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 3 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 1 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 2 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap items-center justify-between ${
                    openTab === 3 ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <img
                      className="flex-shrink-0 w-20 h-20 border rounded"
                      src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=907&q=80"
                      alt=""
                    />
                    <div className="flex-wrap text-left ml-6">
                      <h5 className="mb-3">C Fresh</h5>
                      <span className="truncate flex items-center text-primary">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        IIIT Allahabad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center flex-col justify-center">
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                    <div className="text-primary mr-2 mt-2">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span className="text-primary">3 March 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="gray" />;
    </>
  );
}
