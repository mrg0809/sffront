

function ConsultaTallas({tallas}) {
    return (
        <>
            <table className="table is-hoverable is-fullwidth mx-auto">
                <thead>
                    <tr>
                        <th>Almacen/Tallas</th>
                        {tallas.Tallas.map(tallas => <th>{tallas}</th>)}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Bodega Tijuana SF</td>
                        {tallas['Bodega Tijuana'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Rio 3</td>
                        {tallas['Rio 3'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Macroplaza</td>
                        {tallas['Macroplaza'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Macroplaza 2</td>
                        {tallas['Macroplaza 2'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Galerias</td>
                        {tallas['Galerias'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Palmas</td>
                        {tallas['Palmas'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Senderos EVF</td>
                        {tallas['Senderos EVF'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Ensenada 1</td>
                        {tallas['Ensenada 1'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Ensenada 2</td>
                        {tallas['Ensenada 2'].map(tallas => <td>{tallas}</td>)}
                    </tr>
                    <tr>
                        <td>Ensenada 3</td>
                        {tallas['Ensenada 3'].map(tallas => <td>{tallas}</td>)}
                    </tr>

                </tbody>

            </table>          
        </>
    )
}


export default ConsultaTallas;