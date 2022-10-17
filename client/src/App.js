import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Core from "./components/Landing/Core";
import LandingPage from "./components/Landing/LandingPage";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Core/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/about" element={<Layout><Home/></Layout>}/>
      </Routes>
    </div>
  );
}

export default App;
