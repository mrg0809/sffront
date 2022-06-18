

function ConsultaTallas({tallas}) {
    return (
        <>
            <table className="table is-hoverable m-auto">
                <thead>
                    <tr>
                        <th>Almacen/Tallas</th>
                        {tallas.Tallas.map(tallas => <th>{tallas}</th>)}
                        <th>Total</th>
                        <th>Ventas</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="is-selected">
                        <td>Bodega Tijuana SF</td>
                        {tallas['Bodega Tijuana'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Bodega Tijuana'].reduce((a, b) => a + b, 0)}</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Rio 3</td>
                        {tallas['Rio 3'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Rio 3'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][0]}</td>
                    </tr>
                    <tr>
                        <td>Macroplaza</td>
                        {tallas['Macroplaza'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Macroplaza'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][1]}</td>
                    </tr>
                    <tr>
                        <td>Macroplaza 2</td>
                        {tallas['Macroplaza 2'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Macroplaza 2'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][2]}</td>
                    </tr>
                    <tr>
                        <td>Galerias</td>
                        {tallas['Galerias'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Galerias'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][3]}</td>
                    </tr>
                    <tr>
                        <td>Palmas</td>
                        {tallas['Palmas'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Palmas'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][4]}</td>
                    </tr>
                    <tr>
                        <td>Senderos EVF</td>
                        {tallas['Senderos EVF'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Senderos EVF'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][5]}</td>
                    </tr>
                    <tr>
                        <td>Senderos SF</td>
                        {tallas['Senderos SF'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Senderos SF'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][6]}</td>
                    </tr>
                    <tr>
                        <td>Ensenada 1</td>
                        {tallas['Ensenada 1'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Ensenada 1'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][7]}</td>
                    </tr>
                    <tr>
                        <td>Ensenada 2</td>
                        {tallas['Ensenada 2'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Ensenada 2'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][8]}</td>
                    </tr>
                    <tr>
                        <td>Ensenada 3</td>
                        {tallas['Ensenada 3'].map(tallas => <td>{tallas}</td>)}
                        <td>{tallas['Ensenada 3'].reduce((a, b) => a + b, 0)}</td>
                        <td>{tallas['Ventas'][9]}</td>
                    </tr>

                </tbody>

            </table>          
        </>
    )
}


export default ConsultaTallas;