import { createContext, useContext, useReducer } from "react";
import WidgetsReducer from "../Reducer/WidgetReducer";
import initialData from "../Data.json";


const initialState = initialData.categories;


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
