import React, {useContext} from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

// import {DashBoard} from './pages/DashBoard'
// import {Repo} from './pages/Repo'
// import {About} from './pages/About'
// import { Header } from './pages/Header/index';
import {Login} from './pages/Login';
import {GlobalStyle} from './styles/global';
import {CreateAccount} from './pages/CreateAccount';
import {Home} from './pages/Home';
import { AuthContext } from './contexts/auth';

import SignRoutes from './routes/SignRoutes';
import AppRoutes from './routes/AppRoutes';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      { !!user ? <AppRoutes/> : <SignRoutes/> }
    </>

    // <Router> {/* Simple Page Application  */}
    //   {/* <Header/> */}
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/login" replace />} />
    //     <Route path='/login' element={<Login/>} />
    //     <Route path='/create-account' element={<CreateAccount/>} />

    //     <Route path='/home' element={<Home/>} />

        



    //     {/* <Route path="/dashboard" element={<DashBoard/>} />
    //     <Route path="/repositories/:repository" element={<Repo/>} /> 
    //     <Route path="/about" element={<About/>} />   */}
    //   </Routes>
    //   <GlobalStyle/>
    // </Router>

  );
}

export default App;
