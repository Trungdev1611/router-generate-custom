import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductsAll from "./Products/ProductsAll";
import Home from "./Home";
import ProductsID from "./Products/ProductId";
import ProductItem from "./Products/ProductItem";
import Header from "./Header";
import Footer from "./Footer";
import CustomRoute from "./CustomRoute";
export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>

        <Link to="/products/4">ProductID4</Link>
        <Link to="/products/3">ProductID3</Link>
        <Link to="/products/2">ProductID2</Link>
        <Link to="/products/item">Productitem</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <CustomRoute>
              <ProductsAll />
            </CustomRoute>
          }
        >
          <Route path="item" element={<ProductItem />} />
          <Route path=":id" element={<ProductsID />} />
        </Route>
      </Routes>
    </div>
  );
}
