import { Outlet, Navigate } from "react-router-dom"
import { useIsLoggedIn } from "../hooks"

export default function AuthLayout(){
   const isLoggedIn = useIsLoggedIn()
    
   if(isLoggedIn === null) return <h1>Loading...</h1>
   else if(isLoggedIn === true) return <Navigate replace to="/"/>
    return(
    
        <div>
            <Outlet/>
        </div>
    
    )
}