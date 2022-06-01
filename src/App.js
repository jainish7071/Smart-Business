import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavbarComponent from "./Shared/Navbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/">
            <Route index element={<div>DashBoard</div>} />
            <Route exact path="about" element={<div>About</div>} />
            <Route exact path="contactUs" element={<div>Contact</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
