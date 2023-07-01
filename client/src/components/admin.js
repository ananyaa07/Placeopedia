import React from "react";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import antd, { Modal, Button, Input } from "antd";

const OpportunityItem = ({ opportunity, setOpportunities }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOpportunity, setEditedOpportunity] = useState({
    name: opportunity.name,
    registrationLink: opportunity.registrationLink,
    date: opportunity.date,
    location: opportunity.location,
  });

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/opportunities", {
        headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
				},
      });

      setOpportunities(response.data.opportunities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/api/v1/opportunities/admin/${opportunity._id}`,
        editedOpportunity,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      );

      setIsEditing(false);
      fetchOpportunities();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: value,
    }));
  };


  const handleDeleteClick = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/opportunities/admin/${opportunity._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      );

      fetchOpportunities();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      
      <div className="grid grid-cols-6 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
        <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
          <div className="flex-shrink-0">
           <img
              className=" w-20 h-20 object-cover"
              src={opportunity.imageUrl}
              alt=""
            />
           
          </div>
        </div>
        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">{opportunity.name}</p>
        </div>
        <div className="flex items-center justify-center p-2.5 xl:p-5 overflow-hidden">
          <a
            href={opportunity.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline truncate"
          >
            {opportunity.registrationLink}
          </a>
        </div>
        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">{opportunity.date}</p>
        </div>
        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">{opportunity.location}</p>
        </div>
        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <button className="text-red-500 hover:text-red-700" onClick={handleDeleteClick}>X</button>
          <FaEdit
            className="text-green-500 hover:text-green-700 ml-2"
            onClick={handleEditClick}
          />
        </div>
      </div>

      <Modal
        visible={isEditing}
        onCancel={() => setIsEditing(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSaveClick}>
            Save
          </Button>,
        ]}
        className="opportunity-modal"
      >
        <h2 className="text-2xl font-bold mb-4">Edit Opportunity</h2>

        <div className="mb-4">
          <h4 className="text-lg font-medium mb-1">Name</h4>
          <Input
            type="text"
            name="name"
            value={editedOpportunity.name}
            onChange={handleInputChange}
            className="mt-1 rounded-md"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-1">Bookmark URL</h4>
          <Input
            type="text"
            name="registrationLink"
            value={editedOpportunity.registrationLink}
            onChange={handleInputChange}
            className="mt-1 rounded-md"
            placeholder="Bookmark URL"
          />
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-1">Date</h4>
          <Input
            type="text"
            name="date"
            value={editedOpportunity.date}
            onChange={handleInputChange}
            className="mt-1 rounded-md"
            placeholder="Date"
          />
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-1">Location</h4>
          <Input
            type="text"
            name="location"
            value={editedOpportunity.location}
            onChange={handleInputChange}
            className="mt-1 rounded-md"
            placeholder="Location"
          />
        </div>
      </Modal>
    </>
  );
};

export default OpportunityItem;
