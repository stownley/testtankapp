import "./App.css"
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import TankDetails from "./Components/TankDetails";
import Settings from "./Components/Settings";
function App() {
  return (
  <>
<Router>
<Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/details" element={<TankDetails/>}/>
  <Route path="/setting" element={<Settings/>}/>
</Routes>
</Router>
  </>
  );
}

export default App;
