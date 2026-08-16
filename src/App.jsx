import { Routes, Route } from "react-router-dom";

import Navbar from "./components/user/Navbar";

import Home from "./pages/user/Home";
import Menu from "./pages/user/Menu";
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Notifications from "./pages/user/Notifications";
import CabinBooking from "./pages/user/CabinBooking";


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/cabin-booking" element={<CabinBooking />} />

        <Route path="/notifications" element={<Notifications />} />

      </Routes>
    </>
  );
}

export default App;