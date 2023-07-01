import React, { useState, useEffect } from "react";
import NavbarA from "../components/NavbarA";
import OpportunityItem from "../components/admin.js";
import { getAllOpportunities } from "../utils/API/opportunities.js";
import axios from "axios";
import { Modal, Button, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Header from "../components/headerofadmin.js";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState({ events: [], internships: [], hackathons: [] });
  const [category, setCategory] = useState("events");

  const [isCreating, setIsCreating] = useState(false);

  const [newOpportunity, setNewOpportunity] = useState({
    name: "",
    registrationLink: "",
    date: "",
    location: "",
    imageUrl: null,
  });

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/opportunities", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      });

      console.log(response.data.opportunities);
      setOpportunities(response.data.opportunities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const createOpportunity = async () => {
    try {
      const formData = new FormData();
      for (let key in newOpportunity) {
        formData.append(key, newOpportunity[key]);
      }

      const res = await axios.post("http://localhost:3000/api/v1/opportunities/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      });

      console.log(res);

      setIsCreating(false);
      fetchOpportunities();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: value,
    }));
  };

  const handleImageUpload = (file) => {
    setNewOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      image: file,
    }));
  };

  return (
    <>
      <NavbarA />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">All Opportunities</h4>
        <div className="flex -mt-12 justify-end ">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleCreateClick}
          >
            Create
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="flex items-center justify-between mb-4 mt-8">
              <h5 className="text-xl font-bold">INTERNSHIPS</h5>
            </div>
            <Header />
            {/* Render internship items */}
            {opportunities.internships.map((opportunity) => (
              <OpportunityItem
                key={opportunity._id}
                opportunity={opportunity}
                setOpportunities={setOpportunities}
              />
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 mt-8">
              <h5 className="text-xl font-bold ">HACKATHONS</h5>
            </div>

            <Header />
            {/* Render hackathon items */}
            {opportunities.hackathons.map((opportunity) => (
              <OpportunityItem
                key={opportunity._id}
                opportunity={opportunity}
                setOpportunities={setOpportunities}
              />
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 mt-8">
              <h5 className="text-xl font-bold">EVENTS</h5>
            </div>

            <Header />
            {/* Render coding event items */}
            {opportunities.events.map((opportunity) => (
              <OpportunityItem
                key={opportunity._id}
                opportunity={opportunity}
                setOpportunities={setOpportunities}
              />
            ))}
          </div>
        </div>
      </div>

      
      <Modal
        visible={isCreating}
        onCancel={() => setIsCreating(false)}
        onOk={createOpportunity}
        title="Create Opportunity"
        className="rounded-md scale-95"
      >
  <div className="grid grid-cols-1 gap-4">
    <div className="flex flex-col">
      <label className="text-gray-700 font-bold mt-3 mb-2">Opportunity Name</label>
      <Input
        name="name"
        placeholder="Opportunity Name"
        value={newOpportunity.name}
        onChange={handleInputChange}
        className="rounded"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 font-bold mb-2">Registration Link</label>
      <Input
        name="registrationLink"
        placeholder="Registration Link"
        value={newOpportunity.registrationLink}
        onChange={handleInputChange}
        className="rounded"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 font-bold mb-2">Date</label>
      <Input
        name="date"
        placeholder="Date"
        value={newOpportunity.date}
        onChange={handleInputChange}
        className="rounded"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 font-bold mb-2">Location</label>
      <Input
        name="location"
        placeholder="Location"
        value={newOpportunity.location}
        onChange={handleInputChange}
        className="rounded"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-gray-700 font-bold mb-2">Category</label>
      <Input
        name="category"
        placeholder="Category"
        value={newOpportunity.category}
        onChange={handleInputChange}
        className="rounded"
      />
    </div>
    <Upload
      accept="image/*"
      name="image"
      listType="picture-card"
      className="image-uploader"
      showUploadList={false}
      beforeUpload={handleImageUpload}
    >
      {newOpportunity.image ? (
        <div className="relative rounded">
          <img
            src={URL.createObjectURL(newOpportunity.image)}
            alt="Opportunity"
            style={{ width: "100%" }}
            className="rounded"
          />
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setNewOpportunity({ ...newOpportunity, image: null })}
          >
            <div className="bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded border-dashed border-gray-300 border-2 p-4">
          <PlusOutlined className="text-4xl text-gray-500" />
          <div className="text-gray-500">Upload</div>
        </div>
      )}
    </Upload>
  </div>
</Modal>
    </>
  );
};

export default Opportunities;
