import React from 'react';

function MiApi({ feriados }) {
  console.log(feriados); 
  return (
    <div>
      <h2>Lista de Feriados</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Irrenunciable</th>
          </tr>
        </thead>
        <tbody>
          {feriados.map((feriado, index) => (
            <tr key={index}>
              <td>{feriado.date}</td>
              <td>{feriado.title}</td>
              <td>{feriado.type}</td>
              <td>{feriado.inalienable ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;
