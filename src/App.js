import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="home-cards">
        <Home />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
