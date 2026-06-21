import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepge/Homepage";
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Service = lazy(() => import("./Pages/Services/Service"));
const About = lazy(() => import("./Pages/About/About"));
const Error = lazy(() => import("./components/Error"));
import Loader from "@components/Loader";

const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={
          <Suspense fallback={<Loader />}>
            <Service />
          </Suspense>
        } />
        <Route path="/gallery" element={
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<Loader />}>
            <Error />
          </Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App
