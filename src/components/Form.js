import React from 'react';

const handleAnySelectChange = (event, setFilter) => {
    const regiao =  document.querySelector('#select-regiao').value === 'undefined' ? undefined : document.querySelector('#select-regiao').value;
    const local =   document.querySelector('#select-local').value === 'undefined' ? undefined : document.querySelector('#select-local').value;
    const dia =     document.querySelector('#select-dia').value === 'undefined' ? undefined : document.querySelector('#select-dia').value;
    const inicio = document.querySelector('#select-horario').value === 'undefined' ? undefined : document.querySelector('#select-horario').value;

    const filter = {
        regiao,
        local,
        dia,
        inicio
    };

    setFilter(filter);
}

const Form = (props) => {
    return (
        <form>
            <div className="row">
                <div className="col-md-3 form-group">
                    <label htmlFor="select-regiao">Selecione uma região:</label>
                    <select value={ props.filter.regiao } className="form-control" id="select-regiao" onChange={(e) => handleAnySelectChange(e, props.setFilter)}>
                        <option value={ 'undefined' }>Todas regiões</option>
                        { props.getRegioes(props.filteredData)
                            .map((item, index) => (<option key={ `regiao#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label htmlFor="select-local">Selecione um local:</label>
                    <select value={ props.filter.local } className="form-control" id="select-local" onChange={(e) => handleAnySelectChange(e, props.setFilter)}>
                        <option value={ 'undefined' }>Todos locais</option>
                        { props.getLocais(props.filteredData)
                            .map((item, index) => (<option key={ `local#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label htmlFor="select-dia">Selecione um dia:</label>
                    <select value={ props.filter.dia } className="form-control" id="select-dia" onChange={(e) => handleAnySelectChange(e, props.setFilter)}>
                        <option value={ 'undefined' }>Todos dias</option>
                        { props.getDias(props.filteredData)
                            .map((item, index) => (<option key={ `dia#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label htmlFor="select-horario">Selecione um horário:</label>
                    <select value={ props.filter.inicio } className="form-control" id="select-horario" onChange={(e) => handleAnySelectChange(e, props.setFilter)}>
                        <option value={ 'undefined' }>Todos horários</option>
                        { props.getInicios(props.filteredData)
                            .map((item, index) => (<option key={ `inicio#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Form;