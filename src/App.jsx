import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./scss/app.scss";
import Agents from "./pages/agents";
import Navbar from "./components/nav";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="agents" element={<Agents />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
