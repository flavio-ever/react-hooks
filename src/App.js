import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  /**
   * useCallback retorna a funcao e evita o re-processamento da mesma
   */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
  }, [newTech, tech]);

  /**
   * useEffect - é executado no inicio e sempre
   * que uma variavel for modificada.
   */
  useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(tech));
  }, [tech]);

  /**
   * useEffect - A diferença fica por optimizacao,
   * ele retorna algo sempre que outro
   * algo modificar em paralelo.
   * -
   * Dispensando o re-trabalho toda vez que uma
   * renderizacão for feita.
   */
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <h3>Você tem {techSize} tecnologias.</h3>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
