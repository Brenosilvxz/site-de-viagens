import { BrowserRouter } from "react-router-dom";
import Search from "../../Components/Search";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Home() {
  return (
    <BrowserRouter>
      <Search />
      <Header />  
      <Navbar />
    </BrowserRouter>
  )
}
