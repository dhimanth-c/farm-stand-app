import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.component";
import Navbar from "./components/Navbar.component";
import Home from "./components/Home.component";
import Stands from "./components/Stands.component";
import New from "./components/New.component";
import View from "./components/View.component";
import NotFound from "./components/NotFound.component";
import InternalServerError from "./components/InternalServerError.component";
import Update from "./components/Update.component";

export default function App() {
  return (
    <div className="app d-flex flex-column vh-100">
      <Navbar />
      <main className="container d-flex flex-column justify-content-center align-items-center mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="stands/all" element={<Stands />} />
          <Route path="stands/new" element={<New />} />
          <Route path="stands/:id" element={<View />} />
          <Route path="stands/:id/update" element={<Update />} />
          <Route path="error" element={<InternalServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
