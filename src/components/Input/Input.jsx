import { useState } from "react";
import { Link } from "react-router-dom";

function Input() {
    const [dataForm, setDataForm] = useState({modelo: ''})

    const handleOnChange = (e) =>{
        setDataForm({
            ...dataForm,
            [ e.target.name ]: e.target.value
        })
    }


    return (
        <>
            <form>
                <input className="input is-dark" name="modelo" type="text" placeholder="Modelo" style={{width: "150px"}} onChange={handleOnChange} value={dataForm.modelo}></input>
                <Link to={`modelo/${dataForm.modelo}`}><button className="button is-success">Buscar</button></Link>
            </form>                
        </>
    )
}


export default Input;