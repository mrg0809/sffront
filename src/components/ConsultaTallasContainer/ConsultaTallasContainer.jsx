import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConsultaTallas from "../ConsultaTallas/ConsultaTallas";

function ConsultaTallasContainer({titulo}) {
    const [loading, setLoading] = useState(true)
    const [tallas, setTallas] = useState()

const {modelo} = useParams()

useEffect(()=>{  
        fetch(`http://44.203.64.187/articulos/${modelo}`,
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
            <article className="message is-danger">
                <div className="message-body">
                    <strong>{modelo}</strong>
                </div>
            </article>

            <div className='columns is-multiline'>
                <div className='column'>
                    { loading ?
                        <img src='http://sfan.ddns.net:2090/SF/Curve-Loading.gif' />
                    :
                            <ConsultaTallas tallas = {tallas}/>
                        
                    }
                </div>

                <div className='column'>
                    <img src = {`http://sfan.ddns.net:2090/SF/${modelo}.jpg`} />
                </div>

            </div>
        
        </div>

)
}

export default ConsultaTallasContainer;   