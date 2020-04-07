import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header';
import './style.css';

class Books extends Component{

    constructor(props){
        super(props);

        this.state = {
            nutri: []
        }
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            let state = this.state;
            state.nutri = json;
            this.setState(state);
        })
    }

    render(){
        return(
            <Fragment>
                <Header />

                <div className="container">
                    {this.state.nutri.map((item) => {
                        return(
                            <article key={item.id} className="post">
                                <strong className="titulo">{item.titulo}</strong>
                                <img className="img" src={item.capa} />
                                <p className="subtitulo">{item.subtitulo}</p>
                                <a className="botao" href="#">Acessar</a>
                            </article>
                        );
                    })}
                </div>
            </Fragment>
        )
    }
}
export default Books;