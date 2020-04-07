import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header';
import './estilo.css';

const Button = props => {
    return (
        <button onClick={props.btnAction} className="waves-effect waves-light btn" >{props.name}</button>
    )
}

class Biscoito extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sentenceText: ''
        };

        this.sentenceLists = ["Sentence 01", "Sentence 02", "Sentence 03", "Sentence 04", "Sentence 05"];

        this.broke = this.broke.bind(this);
    }

    broke() {
        let state = this.state;
        let randomNumber = Math.floor(Math.random() * this.sentenceLists.length);
        state.sentenceText = this.sentenceLists[randomNumber];

        this.setState(state);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <img className="img" src={require('./assets/biscoito.png')} />
                    <Button btnAction={this.broke} name="Broke It!" />
                    
                    <h3>Lucky sentences! :D</h3>
                    <h4 className="textoFrase">{this.state.sentenceText}</h4>
                </div>
            </Fragment>
        )
    }
}
export default Biscoito;