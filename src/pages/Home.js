import { useDispatch } from "react-redux"
import { logOut } from "../redux/authSlice"

export default function Home(){
    
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logOut())
    }
    return(
        <>
        <h1>Anasayfaya hoş geldiniz</h1>
        <button onClick={handleLogout}>Çıkış Yap</button>
        </>
    )
}