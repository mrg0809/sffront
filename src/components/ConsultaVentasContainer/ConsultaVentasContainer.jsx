import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConsultaVentasAyer from "../ConsultaVentasAyer/ConsultaVentasAyer";
import ConsultaVentasHoy from "../ConsultaVentasHoy/ConsultaVentasHoy";

function ConsultaVentasContainer() {
    const [loading, setLoading] = useState(true)
    const [ventas, setVentas] = useState()

const {modelo} = useParams()

useEffect(()=>{
        setLoading(true)
        fetch(`http://127.0.0.1:8000/venta/actual`,
        {
        method: 'GET',
        mode: 'cors'
        })
        .then(resp => resp.json())
        .then(info => {setVentas(info)})
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    
}, [])

return (
    <div>
        <article className="message is-dark is-large">
            <div className="message-header">
                <strong>VENTAS</strong>
            </div>
        </article>

        <div className='columns is-multiline'>
            <div className='column'>
                { loading ?
                    <img src='http://sfan.ddns.net:2090/SF/Curve-Loading.gif' alt="loading" />
                :
                        <ConsultaVentasAyer ventas = {ventas}/>
                    
                }
            </div>

            <div className='column'>
            { loading ?
                    <img src='http://sfan.ddns.net:2090/SF/Curve-Loading.gif' alt="loading" />
                :
                        <ConsultaVentasHoy ventas = {ventas}/>
                    
                }
            </div>

        </div>
    
    </div>

)
}

export default ConsultaVentasContainer;   