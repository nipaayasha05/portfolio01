import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
