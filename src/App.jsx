import React from "react";
import FaceSwapPage from "./pages/faceSwapPage/FaceSwapPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<FaceSwapPage />} />
      </Routes>
    </BrowserRouter>
  );
}
