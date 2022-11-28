import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../styles/app";

import { Home } from "../pages/Home";
import { AddChurchMinistry } from "../pages/AddChurchMinistry";
import { ChurchMinistry } from "../pages/ChurchMinistry";
import { ChurchEvents } from "../pages/ChurchEvents";
import { AddChurchEvents } from "../pages/AddChurchEvents";
import { About } from "../pages/About";
import { AuthContext } from "../contexts/auth";

const AppRoutes: React.FC = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to='/' replace />
  }

  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<ChurchEvents />}/>
          <Route path="/event/add" element={<AddChurchEvents />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/church-ministry/add" element={<AddChurchMinistry />}/>
          <Route path="/church-ministry/:id" element={<ChurchMinistry />}/>
        </Routes>
      </Main>
      <Header />
    </BrowserRouter>
  );
};

export default AppRoutes;
