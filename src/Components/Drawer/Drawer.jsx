import "./Drawer.css"; // Import the CSS file for the drawer

const Drawer = ({ isOpen, onClose }) => {
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
              <li className="active">CSPM</li>
              <li>CWPP</li>
              <li>Image</li>
              <li>Ticket</li>
            </ul>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="option1" className="custom-checkbox" />
            <label>Cloud Accounts</label>
          </div>
        </div>
        <div className="drawer-footer">
          <button className="drawer-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="drawer-confirm-button">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
