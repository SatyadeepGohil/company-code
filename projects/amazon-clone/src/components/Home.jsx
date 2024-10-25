import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from './header';
import NavBar from './navbar';
import HeroCarousel from './hero-carousel';
import Products from './products';
import Footer from './footer';
import SearchResults from "./SearchResults";
import ProductDetails from "./productDetails";
import '../SCSS/main.css';

function Home() {
  return (
    <Router>
      <Routes>
         <Route 
          path="/"
          element={
            <>
              <Header />
              <NavBar />
              <HeroCarousel />
              <Products />
              <Footer />
            </>
          }
         />
         <Route path="/search" element={<SearchResults />}/>
         <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
    </Router>
  );
}

export default Home;
