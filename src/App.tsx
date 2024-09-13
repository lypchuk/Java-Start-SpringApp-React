import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryCreatePage from "./components/category/create";
import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/category/list";
import ProductListPage from "./components/product/list";

function App() {

  return (
    <>
        <Routes>
            <Route path="/">
                <Route path={"/addcategory"} element={<CategoryCreatePage />} />
                <Route path={"/allcategories"} element={<CategoryListPage />} />
                <Route path={"/allproducts"} element={<ProductListPage />} />
            </Route>
        </Routes>

    </>
  )
}

export default App
