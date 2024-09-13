import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import MyHeader from "./components/myHeader/myHeader.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <MyHeader />
            <App />
        </BrowserRouter>
    </StrictMode>,
)
