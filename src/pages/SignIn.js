import { NavLink } from "react-router-dom"
import "../index.css"
import { useSelector, useDispatch } from "react-redux"
import { changeEmail, changePassword, logIn } from "../redux/authSlice"
import { Info } from "../components/info"

export default function SignIn() {

    const email = useSelector(state => state.auth.email)
    const password = useSelector(state => state.auth.password)
    const error = useSelector(state => state.auth.error)


    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    }
    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        dispatch(logIn({email, password}))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mt-3 container text-center">
                {error &&(
                <p className="text-danger">{error}</p>
            )}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Adresi</label>
                        <input value={email} onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Parola</label>
                        <input value={password} onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3 col-3">Giriş Yap</button>
                </div>
                <p className="card-text text-center"><NavLink className="nav-link-primary" aria-current="page" to="/up">Hesabın yoksa şimdi kaydol</NavLink></p>
            </form>
            <Info/>
        </>
    )
}