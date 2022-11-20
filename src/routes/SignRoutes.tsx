import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignRoutes;
