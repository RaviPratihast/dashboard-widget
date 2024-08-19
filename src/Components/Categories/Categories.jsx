import Widget from "../Widget/Widget";
import "./Categories.css";

const Categories = ({ category, toggleDrawer, categoryId }) => {
  
  const widgets = [...category.widgets];

  while (widgets.length < 3) {
    widgets.push({
      id: `add-widget-${widgets.length + 1}`,
      name: "",
      text: "",
    });
  }

  return (
    <div className={`category-container`}>
      <h3>{category.name}</h3>
      <div className="widgets-container">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            categoryId={categoryId}
            widget={widget}
            toggleDrawer={toggleDrawer}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
