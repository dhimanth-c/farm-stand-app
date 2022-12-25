import Footer from "./components/Footer.component";
import Navbar from "./components/Navbar.component";
import Stands from "./components/Stands.component";

export default function App() {
  return (
    <div className="app d-flex flex-column vh-100">
      <Navbar />
      <Stands />
      <Footer />
    </div>
  );
}
