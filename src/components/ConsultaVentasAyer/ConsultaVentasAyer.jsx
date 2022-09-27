function ConsultaVentasAyer({ventas}) {
    let total
    total = ventas[1].map(ventas => ventas[1]).reduce((a, b) => a + b, 0).toFixed(2)
    return (
        <>

            <h1 className="title is-1">Ayer</h1>
            <table className="table is-hoverable is-bordered is-striped is-fullwidth m-auto">
                <thead>
                    <tr>
                        <th>Almacen</th>
                        <th>Venta</th>
                    </tr>
                </thead>

                <tbody>                  
                        {ventas[1].map(ventas => <tr><td>{ventas[0]}</td><td>${ventas[1]}</td></tr>)}
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


export default ConsultaVentasAyer;