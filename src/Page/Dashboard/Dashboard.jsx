import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import Categories from "../../Components/Categories/Categories";
import Drawer from "../../Components/Drawer/Drawer";
import "./Dashboard.css";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-container">
          <h2 className="dashboard-title">CNAPP Dashboard</h2>
          <div className="dashboard-buttons">
            <button className="add-widget-button" onClick={toggleDrawer}>
              Add Widget <IoMdAdd />
            </button>
            <button className="dashboard-icon-button">
              <LuRefreshCw />
            </button>
            <button className="dashboard-icon-button">
              <PiDotsThreeVerticalBold />
            </button>
            <button className="dashboard-date-button">
              <GoClockFill className="clock-icon" />
              <span>Last 2 days</span>{" "}
              <RiArrowDropDownLine className="drop-down-icon" />
            </button>
          </div>
        </div>
        <div className="categories-container">
          <Categories />
          <Categories />
        </div>
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      </div>
    </>
  );
};

export default Dashboard;
