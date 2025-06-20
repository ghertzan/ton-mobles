import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartDetailContainer from "./components/CartDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/category/:categoryName"
          element={<ItemListContainer />}
        ></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="/cart/cartDetail"
          element={<CartDetailContainer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
