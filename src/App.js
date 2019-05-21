import React, { useState, useEffect } from "react";
import data from "./db/data";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [filter, setFilter] = useState({
    regiao: undefined,
    local: undefined,
    dia: undefined,
    inicio: undefined
  });

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => { 
    
    const filteredResult = filterResult(filter);
    setFilteredData(filteredResult);

  }, [filter]);

  return (
    <div className="container">
      <Form
        filteredData={filteredData}
        getRegioes={getRegioes}
        getLocais={getLocais}
        getDias={getDias}
        getInicios={getInicios}
        setFilter={setFilter}
        filter={filter}
      />
      <Table filteredData={filteredData} />
    </div>
  );
};

const filterResult = (filter) => {
  let result = data;

  if (filter.regiao !== undefined) {
    result = result
      .filter(item => (item.regiao === filter.regiao));
  }
  if (filter.local !== undefined) {
    result = result
      .filter(item => (item.local === filter.local));
  }
  if (filter.dia !== undefined) {
    result = result
      .filter(item => (item.dia === filter.dia));
  }
  if (filter.inicio !== undefined) {
    result = result
      .filter(item => (item.inicio === filter.inicio));
  }

  return result;
};

const getRegioes = json => {
  return json
    .map(item => item.regiao)
    .filter((item, index, arr) => arr.indexOf(item) === index);
};

const getLocais = json => {
  return json
    .map(item => item.local)
    .filter((item, index, arr) => arr.indexOf(item) === index);
};

const getDias = json => {
  return json
    .map(item => item.dia)
    .filter((item, index, arr) => arr.indexOf(item) === index);
};

const getInicios = json => {
  const unorderedInicioArray = json
    .map(item => item.inicio)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const orderedInicioArray = unorderedInicioArray
    .map(item => item.split("h")) // Inicio's format: HHhMM (ex.: 00h00 or 23h59)
    .sort((a, b) => a[0] - b[0])
    .map(item => item.join("h"));

  return orderedInicioArray;
};

export default App;
