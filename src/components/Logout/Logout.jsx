import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Logout(){

    const navigate =useNavigate

    const signOut = () => {

        localStorage.removeItem('rasyueToken')
    }
    
    return (
        <>
            <Link to='/'><button className="button is-danger is-outlined" onClick={signOut}>Salir</button></Link>
        </>
    )
}