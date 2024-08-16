import { IoMdAdd } from "react-icons/io";
import "./Widget.css";
const Widget = () => {
  return (
    <div className="widget widget-1">
      <button className="add-widget-button">
        <IoMdAdd /> Add Widget
      </button>
    </div>
  );
};

export default Widget;
