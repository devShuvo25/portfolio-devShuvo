import React from "react";
import { Link } from "react-router";

const DropDownEducation = () => {
  return (
      <div className="absolute left-0 mt-7 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-48 z-10 transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
        <ul className="py-2">
          <li className="drop-down-li:hover drop-down-li">
           SSC
          </li>
          <li className="drop-down-li:hover drop-down-li">
            Education
          </li>
          <li className="drop-down-li:hover drop-down-li">
            Achievements
          </li>
          <li className="drop-down-li:hover drop-down-li">Skills</li>
        </ul>
      </div>
  );
};

export default DropDownEducation;
