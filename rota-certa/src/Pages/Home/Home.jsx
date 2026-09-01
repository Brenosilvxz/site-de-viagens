import { BrowserRouter } from "react-router-dom";
import Search from "../../Components/Search";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Cards from "../../Components/Cards";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <BrowserRouter>
      <Search />
      <Header />  
      <Navbar />
      <Cards />
      <Banner />
      <Footer />
    </BrowserRouter>
  )
}
