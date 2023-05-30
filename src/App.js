import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Landing from "./pages/Landing";
import Announcement from "./pages/Announcement";
import Content from "./pages/Content";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/content" element={<Content />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
