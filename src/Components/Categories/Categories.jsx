import Widget from "../Widget/widget";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="category-container-1">
      <h3>CSPM Executive Dashboard</h3>
      <div className="widgets-container">
        <Widget />
        <Widget />
        <Widget />  
         
      </div>
    </div>
  );
};

export default Categories;
