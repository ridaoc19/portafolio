import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<Layout><About/></Layout>}/>
      </Routes>
    </div>
  );
}

export default App;
