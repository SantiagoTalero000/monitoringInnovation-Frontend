import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import { AnimatePresence } from "framer-motion";
import Index from "./Pages/Index";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Index />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
