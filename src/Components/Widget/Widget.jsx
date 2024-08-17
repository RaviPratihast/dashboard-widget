import { IoMdAdd } from "react-icons/io";
import { useWidget } from "../../Context/WidgetsContext";
import "./Widget.css";

const Widget = ({ widget, toggleDrawer }) => {
  const { dispatch } = useWidget();

  return (
    <div className="widget widget-1">
      {console.log(widget.name ? "True" : "false")}
      {widget.name ? (
        <div className="widget-content">
          <h4>{widget.name}</h4>
          <p>{widget.text}</p> {/* Display widget text */}
          <button
            className="remove-widget-button"
            onClick={() => {
              dispatch({ type: "REMOVE_WIDGET", id: widget.id });
            }}
          >
            Remove Widget
          </button>
        </div>
      ) : (
        <button className="add-widget-button" onClick={toggleDrawer}>
          <IoMdAdd /> Add Widget
        </button>
      )}
    </div>
  );
};

export default Widget;
