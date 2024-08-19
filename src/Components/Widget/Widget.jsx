import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useWidget } from "../../Context/WidgetsContext";
import "./Widget.css";

const Widget = ({ widget, toggleDrawer, categoryId }) => {
  const { dispatch } = useWidget();

  return (
    <div className="widget widget-1">
      {widget.name ? (
        <div className="widget-content">
      
          <button
            className="remove-widget-button"
            onClick={() => {
              dispatch({
                type: "REMOVE_WIDGET",
                payload: {
                  categoryId, 
                  widgetId: widget.id, 
                },
              });
            }}
          >
            <IoMdClose />
          </button>
          <h4>{widget.name}</h4>
          <p>{widget.text}</p> 
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
