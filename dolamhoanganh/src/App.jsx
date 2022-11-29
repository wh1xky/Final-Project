import Home from "./Page/Home";
import ProductList from "./Page/ProductList";
import Product from "./Page/Product"
import Register from "./Page/Register";
import Login from "./Page/Login";
import Cart from "./Page/Cart";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Success from "./Page/Success";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
};

export default App;