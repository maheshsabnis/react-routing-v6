import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import ListProductsComponent from "./components/listproductscomponent";
import CreateProductComponent from "./components/createproductcomponent";
import EditProductComponent from "./components/editproductcomponent";
import NotFoundComponent from "./components/notfound";
import LayoutComponent from "./components/layout";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<ListProductsComponent />}/>
          <Route path="/create" element={<CreateProductComponent />} />
          <Route path="/edit/:productRowId" element={<EditProductComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
