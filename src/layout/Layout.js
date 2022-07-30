import { Outlet, Navigate } from "react-router-dom"
import { useIsLoggedIn } from "../hooks"

export default function Layout(){
   const isLoggedIn = useIsLoggedIn()
    
   if(isLoggedIn === null) return <h1>Loading...</h1>
   else if(isLoggedIn === false) return <Navigate replace to="/in"/>
    return(
    
        <div>
            <Outlet/>
        </div>
    
    )
}