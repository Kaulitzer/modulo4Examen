import React, { useState } from 'react';

const Buscador = ({ onBusquedaChange, onFiltroTipoChange, onFiltroIrrenunciableChange }) => {
  const [busqueda, setBusqueda] = useState(''); // Estado local para la búsqueda
  const [filtroTipo, setFiltroTipo] = useState(''); // Estado local para el tipo de feriado
  const [filtroIrrenunciable, setFiltroIrrenunciable] = useState(false); // Estado local para el filtro irrenunciable

  const handleBusquedaChange = (e) => {
    const nuevaBusqueda = e.target.value;
    setBusqueda(nuevaBusqueda);
    onBusquedaChange(nuevaBusqueda); // Llama a la función del componente padre (App.jsx) con la búsqueda
  };

  const handleFiltroTipoChange = (e) => {
    const selectedFiltroTipo = e.target.value;
    setFiltroTipo(selectedFiltroTipo);
    onFiltroTipoChange(selectedFiltroTipo); // Llama a la función del componente padre (App.jsx) con el tipo seleccionado
  };

  const handleFiltroIrrenunciableChange = (e) => {
    const irrenunciable = e.target.checked;
    setFiltroIrrenunciable(irrenunciable);
    onFiltroIrrenunciableChange(irrenunciable); // Llama a la función del componente padre (App.jsx) con el filtro irrenunciable
  };

  return (
    <div className="buscador">
      <label htmlFor="busqueda">Buscar por Nombre:</label>
      <input
        type="text"
        id="busqueda"
        value={busqueda}
        onChange={handleBusquedaChange}
        placeholder="Ejemplo: Año Nuevo"
      />
      <label htmlFor="filtroTipo">Tipo de Feriado:</label>
      <select id="filtroTipo" value={filtroTipo} onChange={handleFiltroTipoChange}>
        <option value="">Todos</option>
        <option value="Civil">Civil</option>
        <option value="Religioso">Religioso</option>
        {/* Agregar otras opciones */}
      </select>
      <label>
        <input
          type="checkbox"
          checked={filtroIrrenunciable}
          onChange={handleFiltroIrrenunciableChange}
        />
        Solo Irrenunciable
      </label>
    </div>
  );
};

export default Buscador;
