import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
