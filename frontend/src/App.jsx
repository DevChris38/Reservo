import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { InfoProvider } from "./services/UserContext";

function App() {
  return (
    <div className="App">
      <InfoProvider>
        <Header />
        <Outlet />
      </InfoProvider>
    </div>
  );
}

export default App;
