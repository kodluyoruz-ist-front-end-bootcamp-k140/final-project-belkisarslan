import { useSelector, useDispatch } from "react-redux"
import { changeName, changeEmail, changePassword, register } from "../redux/authSlice"
import "../index.css"
import { Header } from "../components/header"

export default function SignUp(){

    const name = useSelector(state => state.auth.name)
    const email = useSelector(state => state.auth.email)
    const password = useSelector(state => state.auth.password)
    const error = useSelector(state => state.auth.error)
  

    const dispatch = useDispatch()

    const handleNameChange = (e) => {
        dispatch(changeName(e.currentTarget.value))
    }
    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    }
    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({name, email, password}))
    }
    return(
        <>
           <Header/>
            <form onSubmit={handleSubmit}>
            <div className="mt-3 container text-center">
            {error &&(
                <p className="text-danger">{error}</p>
            )}
            <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Kullanıcı Adı</label>
                    <input value={name} onChange={handleNameChange} type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Adresi</label>
                    <input value={email} onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Parola</label>
                    <input value={password} onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {/* butona onSubmit vermeye gerek yok type submit olduğu için ve formun içinde olduğu için submit edecektir. */}
                <button type="submit" className="btn btn-primary mb-3 col-3">Kaydol</button>
                </div>  
            </form>
        </>
    )
}