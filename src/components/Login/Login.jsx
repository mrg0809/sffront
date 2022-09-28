import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchToken, setToken } from "../../auth"
import axios from "axios"

export default function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {

        if(username == ''  && password == ''){
            return

        }else {
            axios.post('http://100.26.208.206:5000/login', {
                username: username,
                password: password
            })
            .then(function(response){

                if(response.data.token){
                    setToken(response.data.token)
                    navigate('/ventas')
                }
            })
            .catch(function(error){
                console.log(error, 'error')
            })
        }
    }

    return (
        <>
            <div className="hero is-halfheight">
                <div className="card-image mt-6">
                    <img src='http://sfan.ddns.net:2090/SF/sflogo.png' alt='sflogo' />
                    <img src='http://sfan.ddns.net:2090/SF/evflogo.png' alt='evflogo' />
                </div>
                <div className="hero-body is-justify-content-center is-align-items-center">
                    <div className="colums is-flex is-flex-direction-column box">

                        {
                            fetchToken()
                            ? (
                                <p>Ya iniciaste sesion!</p>
                            ) 
                            : (
                                    <form>
                                        <div className="column">
                                            <label>Usuario</label>
                                            <input className="input is-primary" type ='text' placeholder="Usuario" onChange = { (e) => setUsername(e.target.value) } />
                                        </div>
                                        <div className="column">
                                            <label>Password</label>
                                            <input className="input is-primary" type ='password' placeholder="Password" onChange = { (e) => setPassword(e.target.value) } />
                                        </div>
                                        <div className="column">
                                            <button className="button is-primary is-fullwidth" type='button' onClick={login}>Entrar</button>
                                        </div>
                                    </form>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
    
}