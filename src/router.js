import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
         <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
         </Route>
         <Route element={<AuthLayout/>}>
          <Route path="/in" element={<SignIn/>}/>
          <Route path="/up" element={<SignUp/>}/>
         </Route>
         
        </Routes>
        </BrowserRouter>
    )
}