import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/OurSolutions/ProductPage";
import { useParams } from "react-router-dom";

import {
  cijProductInfo,
  laserProductInfo,
  tijProductInfo,
  ttoProductInfo,
  largeCharacterProductInfo,
  highResolutionProductInfo,
  labelProductInfo,
  visionProductInfo,
  checkweigherProductInfo,
  metalDetectorProductInfo,
  packagingProductInfo,
  trackTraceProductInfo,
  consumablesProductInfo,
} from "./Components/OurSolutions/productInfo";
import ScrollToTop from "./Components/ScrollToTop";

const products = [
  cijProductInfo,
  laserProductInfo,
  tijProductInfo,
  ttoProductInfo,
  largeCharacterProductInfo,
  highResolutionProductInfo,
  labelProductInfo,
  visionProductInfo,
  checkweigherProductInfo,
  metalDetectorProductInfo,
  packagingProductInfo,
  trackTraceProductInfo,
  consumablesProductInfo,
];

function ProductRoute() {
  const { productName } = useParams();

  const product = products.find((item) => item.id === productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage data={product} />;
}

function App() {
  return (
    <>
    <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/products/:productName' element={<ProductRoute />} />

        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
