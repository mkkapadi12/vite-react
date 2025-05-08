import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider

const Dashboard = () => <h1 className="p-6 text-xl">Dashboard Page</h1>;
const Users = () => <h1 className="p-6 text-xl">Users Page</h1>;
const Orders = () => <h1 className="p-6 text-xl">Orders Page</h1>;
const Settings = () => <h1 className="p-6 text-xl">Settings Page</h1>;

//App function

const App = () => {
  return (
    <SidebarProvider>
      {" "}
      {/* Wrap the app inside SidebarProvider */}
      <Router>
        <div className="flex">
          <AdminSidebar />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;
