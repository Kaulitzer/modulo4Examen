import React, { useEffect, useState } from 'react';
import MiApi from './componentes/MiApi';
import Buscador from './componentes/Buscador';
import './App.css';

function App() {
  const [feriados, setFeriados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroIrrenunciable, setFiltroIrrenunciable] = useState(false);

  useEffect(() => {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setFeriados(data.data);
        } else {
          console.error('Los datos de la API no son un arreglo válido.');
        }
      })
      .catch((error) => console.error('Error al obtener datos de la API:', error));
  }, []);

  // Filtrar feriados según criterios de búsqueda
  const feriadosFiltrados = feriados.filter((feriado) => {
    const nombreIncluyeBusqueda = feriado.title.toLowerCase().includes(busqueda.toLowerCase());
    const cumpleTipo = !filtroTipo || feriado.type.toLowerCase() === filtroTipo.toLowerCase();
    const cumpleIrrenunciable =
      !filtroIrrenunciable || (feriado.inalienable === filtroIrrenunciable);

    return nombreIncluyeBusqueda && cumpleTipo && cumpleIrrenunciable;
  });

  return (
    <div className="App">
      <h1>Feriados en Chile</h1>
      <Buscador
        busqueda={busqueda}
        onBusquedaChange={(nuevaBusqueda) => setBusqueda(nuevaBusqueda)}
        filtroTipo={filtroTipo}
        onFiltroTipoChange={(nuevoFiltroTipo) => setFiltroTipo(nuevoFiltroTipo)}
        filtroIrrenunciable={filtroIrrenunciable}
        onFiltroIrrenunciableChange={(nuevoFiltroIrrenunciable) =>
          setFiltroIrrenunciable(nuevoFiltroIrrenunciable)
        }
      />
      <MiApi feriados={feriadosFiltrados} />
    </div>
  );
}

export default App;
