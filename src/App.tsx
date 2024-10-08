import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryCreatePage from "./components/category/create";
import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/category/list";
import ProductListPage from "./components/product/list";
import CategoryUpdatePage from "./components/category/update";
import ProductPage from "./components/product/productPage/ProductPage.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/">
                <Route path={"/addcategory"} element={<CategoryCreatePage />} />
                <Route path={"/updatecategory/:id"} element={<CategoryUpdatePage />} />
                <Route path={"/allcategories"} element={<CategoryListPage />} />
                <Route path={"/allproducts"} element={<ProductListPage />} />
                <Route path={"/productPage/:id"} element={<ProductPage />} />
            </Route>
        </Routes>

    </>
  )
}

export default App
