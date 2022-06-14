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

    console.log(dataForm)

    return (
        <>
            <input className="input is-danger" name="modelo" type="text" placeholder="Modelo" onChange={handleOnChange} value={dataForm.modelo}></input>
            <Link to={`modelo/${dataForm.modelo}`}><button className="button is-success">Buscar</button></Link>                      
        </>
    )
}


export default Input;