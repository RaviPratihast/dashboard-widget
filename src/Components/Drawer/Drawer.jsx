import { useState, useEffect } from "react";
import { useWidget } from "../../Context/WidgetsContext";
import { v4 as uuidv4 } from "uuid";
import "./Drawer.css";

const Drawer = ({ isOpen, onClose }) => {
  const { state, dispatch } = useWidget();
  const [formData, setFormData] = useState({ name: "", text: "" });
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {

    if (isOpen && state.length > 0) {
      setSelectedCategoryId(state[0].id);
    }
  }, [isOpen, state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.name.trim() || !formData.text.trim()) {
      alert("Please fill in name and text fields.");
      return; 
    }

    const newWidget = {
      id: uuidv4(),
      name: formData.name,
      text: formData.text,
    };

    if (selectedCategoryId) {
      dispatch({
        type: "ADD_WIDGET",
        payload: {
          categoryId: selectedCategoryId,
          widget: newWidget,
        },
      });
    }

    setFormData({ name: "", text: "" });
    onClose();
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleCheckboxChange = (widgetId, isChecked) => {
    if (!isChecked) {
      dispatch({
        type: "REMOVE_WIDGET",
        payload: {
          categoryId: selectedCategoryId,
          widgetId,
        },
      });
    }
  };

  return (
    <div className={`drawer-backdrop ${isOpen ? "open" : ""}`}>
      <div className="drawer">
        <nav className="drawer-nav">
          <h3>Add Widget</h3>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </nav>
        <div className="drawer-content">
          <p>Personalize your dashboard by adding the following widget</p>
          <div className="drawer-navigation">
            <ul>
              {state.map((category) => (
                <li
                  key={category.id}
                  className={selectedCategoryId === category.id ? "active" : ""}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {selectedCategoryId && (
            <div className="checkbox-container">
              {state
                .find((category) => category.id === selectedCategoryId)
                .widgets.map((widget) => (
                  <div key={widget.id} className="checkbox">
                    <input
                      type="checkbox"
                      id={widget.id}
                      checked
                      onChange={(e) =>
                        handleCheckboxChange(widget.id, e.target.checked)
                      }
                    />
                    <label>{widget.name}</label>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="input-group">
          <h2>Create Widget</h2>
          <div className="input-item">
            <input
              type="text"
              id="name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Enter widget name"
            />
          </div>
          <div className="input-item">
            <input
              type="text"
              id="text"
              value={formData.text}
              name="text"
              onChange={handleInputChange}
              placeholder="Enter widget text"
            />
          </div>
        </div>
        <div className="drawer-footer">
          <button className="drawer-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="drawer-confirm-button" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
