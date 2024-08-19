import { useState, useMemo } from "react";
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
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDrawer = (categoryId = null) => {
    setSelectedCategoryId(categoryId);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return state;

    return state
      .map((category) => {
        const matchingWidgets = category.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
          ...category,
          widgets: matchingWidgets.length > 0 ? [matchingWidgets[0]] : [],
        };
      })
      .filter((category) => category.widgets.length > 0);
  }, [searchTerm, state]);

  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />
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
          {filteredCategories.map((category) => (
            <Categories
              key={category.id}
              category={category}
              categoryId={category.id}
              toggleDrawer={() => toggleDrawer(category.id)}
            />
          ))}
        </div>

        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => toggleDrawer()}
          categoryId={selectedCategoryId}
        />
      </div>
    </>
  );
};

export default Dashboard;
