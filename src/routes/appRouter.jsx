import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
const AppRouter = () => {
  return (
    <Routes>
       {/* <Route path="*" element={<Navigate to="/" />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export default AppRouter;
