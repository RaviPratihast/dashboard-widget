const WidgetsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return state.map((category) =>
        category.id === action.payload.categoryId
          ? {
              ...category,
              widgets: [...category.widgets, action.payload.widget],
            }
          : category
      );
    case "REMOVE_WIDGET":
      return state.map((category) =>
        category.id === action.payload.categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== action.payload.widgetId
              ),
            }
          : category
      );
    default:
      return state;
  }
};

export default WidgetsReducer;
