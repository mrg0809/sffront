import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConsultaTallas from "../ConsultaTallas/ConsultaTallas";

function ConsultaTallasContainer() {
    const [loading, setLoading] = useState(true)
    const [tallas, setTallas] = useState()

const {modelo} = useParams()

useEffect(()=>{
        setLoading(true)
        fetch(`http://100.26.208.206:5000/articulos/${modelo}`,
        {
        method: 'GET',
        mode: 'cors'
        })
        .then(resp => resp.json())
        .then(info => {setTallas(info)})
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    
}, [modelo])


    return (
        <div>
            <article className="message is-dark is-large">
                <div className="message-header">
                    <strong>{modelo.toUpperCase()} &nbsp; - &nbsp; $ {loading ? <br></br> : tallas['Precio']}</strong>
                </div>
            </article>

            <div className='columns is-multiline'>
                <div className='column'>
                    { loading ?
                        <img src='http://sfan.ddns.net:2090/SF/Curve-Loading.gif' alt="loading" />
                    :
                            <ConsultaTallas tallas = {tallas}/>
                        
                    }
                </div>

                <div className='column'>
                    <img src = {`http://sfan.ddns.net:2090/SF/${modelo}.jpg`} width={500} height={500} alt='imagen articulo'/>
                </div>

            </div>
        
        </div>

)
}

export default ConsultaTallasContainer;   