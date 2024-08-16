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
        <div className="drawer-content">{/* Content goes here */}</div>
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
