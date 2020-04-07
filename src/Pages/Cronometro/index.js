import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header';
import './style.css';

class Chronometer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            txtBtnGo: 'Go!'
        }

        this.timer = null;
        this.goAct = this.goAct.bind(this);
        this.stopAct = this.stopAct.bind(this);
    }

    goAct(){
        let state = this.state;

        if (this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.txtBtnGo = 'Go!';
            this.setState(state);
        }else{
            this.timer = setInterval(() => {
                state.number += 0.1;
                state.txtBtnGo = "Stop!";
                this.setState(state);
            }, 100);
        }
    }

    stopAct() {
        if (this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.number = 0;
        this.setState(state);
    }

    render() {
        return (
            <Fragment>
                <Header />

                <div className="container">
                    <img src={require("./assets/cronometro.png")} className="img" />
                    <a className="timer">{this.state.number.toFixed(1)}</a>
                    <div className="areaBtn">
                        <a className="botao" onClick={this.goAct}>{this.state.txtBtnGo}</a>
                        <a className="botao" onClick={this.stopAct}>Clear</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Chronometer;