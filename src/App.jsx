import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
