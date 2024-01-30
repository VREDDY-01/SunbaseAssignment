import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Login";
import Customers from "./Pages/Customers";
import AddCustomer from "./Pages/AddCustomer";
import EditCustomer from "./Pages/EditCustomer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
        <Route path="/customer/:id" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}