import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ProductOverview from "./components/ProductOverview";
import Cart from "./pages/Cart";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductOverview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
          
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;