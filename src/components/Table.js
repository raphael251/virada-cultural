import React from 'react';

const Table = (props) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover table-sm">
            <thead>
                <tr>
                <th>Região</th>
                <th>Local</th>
                <th>Dia</th>
                <th>Horário</th>
                <th>Categoria</th>
                <th>Evento</th>
                <th>Inclusão</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredData.map((item, index) => (
                <tr key={`evento#${index}`}>
                    <td>{item.regiao}</td>
                    <td>{item.local}</td>
                    <td>{item.dia}</td>
                    <td>{`${item.inicio} - ${item.termino}`}</td>
                    <td>{item.categoria}</td>
                    <td>{item.titulo}</td>
                    <td>{item.acessibilidade ? item.acessibilidade : "-"}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        );
}

export default Table;