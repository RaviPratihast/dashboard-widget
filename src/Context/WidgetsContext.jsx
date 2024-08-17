import { createContext, useContext, useReducer } from "react";
import WidgetsReducer from "../Reducer/WidgetReducer";
import initialData from "../Data.json";

// Define the initial state from JSON data
const initialState = initialData.categories;

// Create a context
const WidgetsContext = createContext();
const useWidget = () => useContext(WidgetsContext);

const WidgetsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WidgetsReducer, initialState);

  return (
    <WidgetsContext.Provider value={{ state, dispatch }}>
      {children}
    </WidgetsContext.Provider>
  );
};

export { WidgetsProvider, useWidget };
