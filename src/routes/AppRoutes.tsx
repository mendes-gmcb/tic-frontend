import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../styles/app";

import { Home } from "../pages/Home";
import { AddChurchMinistry } from "../pages/AddChurchMinistry";
import { ChurchMinistry } from "../pages/ChurchMinistry";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/church-ministry/add" element={<AddChurchMinistry />}/>
          <Route path="/church-ministry/:id" element={<ChurchMinistry />}/>
        </Routes>
      </Main>
      <Header />
    </BrowserRouter>
  );
};

export default AppRoutes;
