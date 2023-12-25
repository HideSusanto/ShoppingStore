import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;