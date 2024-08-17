import Dashboard from "./Page/Dashboard/Dashboard";
import { WidgetsProvider } from "./Context/WidgetsContext";

const App = () => {
  return (
    <div>
      <WidgetsProvider>
        <Dashboard />
      </WidgetsProvider>
    </div>
  );
};

export default App;
