import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Research from "./pages/Research";
import Project from "./pages/Project";
import Admission from "./pages/Admission";
import Faculty from "./pages/Faculty";
import PageNotFound from "./pages/PageNotFound";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/research" element={<Research />} />
        <Route path="/project" element={<Project />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
