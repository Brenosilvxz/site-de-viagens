import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";


export default function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}
