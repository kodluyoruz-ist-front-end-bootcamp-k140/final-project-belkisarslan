import { useDispatch } from "react-redux"
import { logOut } from "../redux/authSlice"
import Calendar from "../components/calendar"


export default function Home(){
    
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logOut())
    }
    return(
        <>
        <h1 className="text-center">Çalışma Takviminize Hoş Geldiniz</h1>
        <button className="float-end btn btn-danger mx-2" onClick={handleLogout}>Çıkış Yap</button>
        <Calendar/>
        
        </>
    )
}