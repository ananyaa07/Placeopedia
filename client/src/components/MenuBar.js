import React, { useState, useEffect } from "react";
import axios from "axios";
import {getAllOpportunities} from "../utils/API/opportunities.js"



const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const[category,setCategory]=useState("events");
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    async function fetchOpportunities() {
      try {
        console.log("fetching opportunities");
        getAllOpportunities(category).then((response)=>{
          setOpportunities(response.opportunities);
           console.log("response",response);
        })
      } catch (error) {
        console.error(error);
      }
    }

    fetchOpportunities();
  }, [category]);
  
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
                  setCategory("events");
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Events
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
                  setCategory("internships"); 
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Internships
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
                  setCategory("hackathons");
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Hackathons
              </a>
            </li>
          </ul>





          {opportunities.length!==0 && opportunities.map((opportunity,index) => (
  <div
    className={`flex flex-wrap items-center justify-between ${
      openTab === index + 1 ? "block" : "hidden"
    }`}
    key={index}
  >
    <div className="flex flex-wrap items-center justify-between">
      <img
        className="flex-shrink-0 w-20 h-20 border rounded"
        src={opportunity.imageUrl}
        alt=""
      />
      <div className="flex-wrap text-left ml-6">
        <h5 className="mb-3">{opportunity.title}</h5>
        <span className="truncate flex items-center text-primary">
          <i className="fas fa-map-marker-alt mr-2"></i>
          {opportunity.location}
        </span>
      </div>
    </div>

    <div className="flex items-center flex-col justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
      <div className="text-primary mr-2 mt-2">
        <i className="far fa-calendar-alt mr-2"></i>
        <span className="text-primary">{opportunity.date}</span>
      </div>
    </div>
  </div>
))}


         

        
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