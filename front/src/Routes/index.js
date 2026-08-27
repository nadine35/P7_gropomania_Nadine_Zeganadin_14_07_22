import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Family from "../pages/Family";
import { UidContext } from "../components/AppContext";
import FamilyBook from "../pages/FamilyBook";
import Chapter from "../pages/Chapter";

const Index = () => {
  const uid = useContext(UidContext);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={uid ? <Home /> : <Navigate to="/profil" replace />}
        />

        <Route
          path="/profil"
          element={<Profil />}
        />

        <Route
          path="/family"
          element={uid ? <Family /> : <Navigate to="/profil" replace />}
        />

        <Route
          path="/book"
          element={uid ? <FamilyBook /> : <Navigate to="/profil" replace />}
        />

        <Route
          path="/book/chapter/:chapterId"
          element={uid ? <Chapter /> : <Navigate to="/profil" replace />}
        />

        <Route
          path="*"
          element={<Navigate to={uid ? "/" : "/profil"} replace />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default Index;
