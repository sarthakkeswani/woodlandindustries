import AnimatedRoutes from "./components/AnimatedRoutes";
import { Footer } from "./components/Footer";
import { NavbarSimple } from "./components/NavbarSimple";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavbarSimple />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}
