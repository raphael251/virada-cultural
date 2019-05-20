import React from 'react';

import data from './db/data';

import Form from './components/Form';

import './App.css';

class App extends React.Component {

  getRegioes = () => {
    return data
      .map(item => (item.regiao))
      .filter((item, index, arr) => (arr.indexOf(item) === index));
  }

  getLocais = () => {
    return data
      .map(item => (item.local))
      .filter((item, index, arr) => (arr.indexOf(item) === index));
  }

  getDias = () => {
    return data
      .map(item => (item.dia))
      .filter((item, index, arr) => (arr.indexOf(item) === index));
  }

  getInicios = () => {
    return data
      .map(item => (item.inicio))
      .filter((item, index, arr) => (arr.indexOf(item) === index));
  }

  render() {
    // console.log('regioes', this.getRegioes())
    // console.log('locais', this.getLocais())
    // console.log('dias', this.getDias())
    // console.log('inicios', this.getInicios())
    return (
      <div className="container">
        <Form 
          getRegioes={this.getRegioes} 
          getLocais={this.getLocais} 
          getDias={this.getDias} 
          getInicios={this.getInicios} />
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Região</th>
                <th>Local</th>
                <th>Dia</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              { data
                .map((item, index) => (
                    <tr key={ `evento#${index}` } >
                      <td>{ item.regiao }</td>
                      <td>{ item.local }</td>
                      <td>{ item.dia }</td>
                      <td>{ `${item.inicio} - ${item.termino}` }</td>
                    
                      {/* `${ item.regiao } - ${ item.local }: ${ item.dia } ${ item.inicio }-${ item.termino }: ${ item.titulo } ` */}
                    </tr> 
                  )
                ) 
              }
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;