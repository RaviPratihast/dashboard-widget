import { useState } from "react";
import { useWidget } from "../../Context/WidgetsContext";
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
  const { state } = useWidget();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // State to track the selected category ID

  const toggleDrawer = (categoryId = null) => {
    setSelectedCategoryId(categoryId); // Set the selected category ID when opening the drawer
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-container">
          <h2 className="dashboard-title">CNAPP Dashboard</h2>
          <div className="dashboard-buttons">
            <button
              className="add-widget-button"
              onClick={() => toggleDrawer()}
            >
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
          {state.map((category) => (
            <Categories
              key={category.id}
              category={category}
              categoryId={category.id}
              toggleDrawer={() => toggleDrawer(category.id)} // Pass the category ID when opening the drawer
            />
          ))}
        </div>

        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => toggleDrawer()}
          categoryId={selectedCategoryId} // Pass the selected category ID to the drawer
        />
      </div>
    </>
  );
};

export default Dashboard;
