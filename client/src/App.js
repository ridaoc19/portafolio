import "./App.scss";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Responsive from "./pages/start/Responsive/Responsive";
// import Home from "./pages/Home/Home";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Responsive />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
