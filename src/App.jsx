import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import { AnimatePresence } from "framer-motion";
import Index from "./Pages/Index";
import { useEffect, useState } from "react";

export default function App() {
  const [page, setPage] = useState(<Home />);
  useEffect(() => {
    const time = setTimeout(() => {
      setPage(<Index />);
    }, 6200);

    return () => clearTimeout(time);
  }, []);
  return (
    <BrowserRouter basename="/monitoringinnovationfrontend">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={page} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
