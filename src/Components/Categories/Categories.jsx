import Widget from "../Widget/Widget";
import "./Categories.css";

const Categories = ({ category, toggleDrawer }) => {
  // Copy the widgets array from the category
  const widgets = [...category.widgets];

  // Add empty widgets until there are 3
  while (widgets.length < 3) {
    widgets.push({
      id: `add-widget-${widgets.length + 1}`,
      name: "",
      text: "",
    });
  }

  return (
    <div className={`category-container-${category.id}`}>
      <h3>{category.name}</h3>
      <div className="widgets-container">
        {widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} toggleDrawer={toggleDrawer} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
