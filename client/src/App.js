import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/admin";
import "./styles/app.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./components/User/User";
import { UserProvider } from "./context/Context";
import Public from "./Pages/Public";
import NavSend from "./components/NavBar/Nav";
import Auction from "./Pages/Auction";
import "./index.css";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavSend />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/public" element={<Public />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
