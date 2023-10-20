import "./styles/App.css";
import Footer2 from "./components/Footer2";
import Home from "./components/Home";
import Auth from "./components/Auth";
import { Routes, Route } from "react-router-dom";
import Listeproduits from "./components/Listeproduits";
import Produit from "./components/Produit";
import Commande from "./components/Commande";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import SuccesCommande from "./components/SuccesCommande";
import SignedUp from "./components/SingedUp";
import Bienvenue from "./components/Bienvenue";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Footer2 />
            </div>
          }
        />
        <Route path="login" element={<Auth />} />
        <Route path="signup" element={<Auth signup={true} />} />
        <Route
          path="products"
          element={
            <div>
              <Listeproduits />
              <Footer2 />
            </div>
          }
        />
        <Route
          path="products/:id"
          element={
            <div>
              <Produit />
              <Footer2 />
            </div>
          }
        />
        <Route
          path="order"
          element={
            <div>
              <Commande />
              <Footer2 />
            </div>
          }
        />
        <Route
          path="cart"
          element={
            <div>
              <Cart />
              <Footer2 />
            </div>
          }
        />
        <Route
          path="ordersuccess"
          element={
            <div>
              <SuccesCommande />
              <Footer2 />
            </div>
          }
        />
        <Route path="signedup" element={<SignedUp />} />
        <Route path="bienvenue" element={<Bienvenue />} />

        <Route
          path="*"
          element={
            <div>
              <NotFound />
              <Footer2 />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
