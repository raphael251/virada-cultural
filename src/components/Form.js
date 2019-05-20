import React from 'react';

const Form = (props) => {
    return (
        <form>
            <div className="row">
                <div className="col-md-3 form-group">
                    <label for="select-regiao">Selecione uma região:</label>
                    <select className="form-control" id="select-regiao" onChange={}>
                        <option>Todas regiões</option>
                        { props.getRegioes()
                            .map((item, index) => (<option key={ `regiao#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label for="select-local">Selecione um local:</label>
                    <select className="form-control" id="select-local">
                        <option>Todos locais</option>
                        { props.getLocais()
                            .map((item, index) => (<option key={ `local#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label for="select-dia">Selecione um dia:</label>
                    <select className="form-control" id="select-dia">
                        <option>Todos dias</option>
                        { props.getDias()
                            .map((item, index) => (<option key={ `dia#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
                <div className="col-md-3 form-group">
                    <label for="select-horario">Selecione um horário:</label>
                    <select className="form-control" id="select-horario">
                        <option>Todos horários</option>
                        { props.getInicios()
                            .map((item, index) => (<option key={ `inicio#${ index }` } value={ item }>{ item }</option>))
                        }
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Form;