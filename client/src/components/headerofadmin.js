import React from "react";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";


const Header = () => {

    return (
        <>
    <div className="grid grid-cols-6 rounded-sm bg-gray-200 dark:bg-gray-800 sm:grid-cols-6">
        <div className="py-2.5 text-center">
          <h5 className="text-sm font-medium uppercase">Source</h5>
        </div>
        <div className="py-2.5 text-center">
          <h5 className="text-sm font-medium uppercase">Name</h5>
        </div>
        <div className="py-2.5 text-center">
          <h5 className="text-sm font-medium uppercase">Bookmark URL</h5>
        </div>
        <div className="py-2.5 text-center">
          <h5 className="text-sm font-medium uppercase">Date</h5>
        </div>
        <div className="py-2.5 text-center">
          <h5 className="text-sm font-medium uppercase">Location</h5>
        </div>
        <div className="py-2.5 text-center">
          <h5 className="text-sm font-medium uppercase">Actions</h5>
        </div>
      </div>

    </>
    




    );
    
};

export default Header;
    