import React from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../assets/Ellipse.png";
import { FaGraduationCap } from "react-icons/fa";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  SettingOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const goToTeachers = () => {
    navigate("/teachers");
  };

  const goToStudents = () => {
    navigate("/students");
  };

  return (
    <div
      className={`
        fixed lg:static top-0 left-0 z-50 bg-[#0B1C49] text-white 
        w-64 h-auto lg:w-[350px] p-6 flex flex-col justify-between 
        min-h-screen transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="flex justify-end lg:hidden mb-4">
        <button
          onClick={onClose}
          className="bg-[#3A4C8B] px-2 py-1 rounded text-sm"
        >
          Close
        </button>
      </div>

      <div>
        <div className="mb-8 border-b border-gray-300 pb-4">
          <img
            src={Ellipse}
            alt="Profile"
            className="w-10 h-10 mb-4 mx-auto"
          />
          <h2 className="text-lg font-semibold text-center">
            Udemy Inter. school
          </h2>
        </div>

        <ul className="space-y-4">
          <li
            className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer"
            onClick={goToDashboard}
          >
            <DashboardOutlined /> Dashboard
          </li>
          <li
            className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer"
            onClick={goToTeachers}
          >
            <TeamOutlined /> Teachers
          </li>
          <li
            className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer"
            onClick={goToStudents}
          >
            <UserOutlined /> Students
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <CreditCardOutlined /> Billing
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <SettingOutlined /> Settings and profile
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <FileDoneOutlined /> Exams
          </li>
        </ul>
      </div>

      <div className="text-sm text-white mt-10">
        <span className="flex items-center gap-3 text-white py-1 px-2 rounded text-center">
          <FaGraduationCap className="w-6 h-6 text-white-700" />
          Features{" "}
          <span className="bg-blue-600 px-1 rounded text-xs text-black py-[4px] px-[11px]">
            NEW
          </span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

/*import React from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../assets/Ellipse.png";
import { FaGraduationCap } from "react-icons/fa";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  SettingOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const goToTeachers = () => {
    navigate("/teachers");
  };

  return (
    <div className="max-w-[350px] w-[100%] bg-[#0B1C49] text-white p-6 flex flex-col justify-between h-screen">
      <div>
        <div className="mb-8 border-b border-gray-300 pb-4">
          <img src={Ellipse} alt="Profile" className="w-10 h-10 mb-4 mx-auto" />
          <h2 className="text-lg font-semibold text-center">
            Udemy Inter. school
          </h2>
        </div>

        <ul className="space-y-4">
          <li
            className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer"
            onClick={goToDashboard}
          >
            <DashboardOutlined /> Dashboard
          </li>
          <li
            className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer"
            onClick={goToTeachers}
          >
            <TeamOutlined /> Teachers
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <UserOutlined /> Students
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <CreditCardOutlined /> Billing
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <SettingOutlined /> Settings and profile
          </li>
          <li className="flex items-center gap-2 hover:bg-[#3A4C8B] py-2 px-4 rounded cursor-pointer">
            <FileDoneOutlined /> Exams
          </li>
        </ul>
      </div>

      <div className="text-sm text-white">
        <span className="flex items-center gap-3 text-white py-1 px-2 rounded text-center">
          <FaGraduationCap className="w-6 h-6 text-white-700" />
          Features{" "}
          <span className="bg-blue-600 px-1 rounded text-xs text-black py-[4px] px-[11px]">
            NEW
          </span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;*/
