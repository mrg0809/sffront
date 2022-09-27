function ConsultaVentasHoy({ventas}) {
    let total
    try {
        total = ventas[0].map(ventas => ventas[1]).reduce((a, b) => a + b, 0)
    } catch (error) {
        console.error(error)
    }
    
    return (
        <>

        <h1 className="title is-1">Hoy</h1>
            <table className="table is-hoverable is-bordered is-striped is-fullwidth m-auto">
                <thead>
                    <tr>
                        <th>Almacen</th>
                        <th>Venta</th>
                    </tr>
                </thead>

                <tbody>                  
                        {ventas[0].map(ventas => <tr><td>{ventas[0]}</td><td>${ventas[1]}</td></tr>)}
                </tbody>

                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td><strong>${total}</strong></td>
                    </tr>
                </tfoot>


            </table>          
        </>
    )
}


export default ConsultaVentasHoy;