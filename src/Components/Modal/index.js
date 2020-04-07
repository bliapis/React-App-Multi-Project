import React, { Component, Fragment } from 'react';
import M from 'materialize-css';
import LoginForm from '../../Pages/Login/LoginForm';
import PopUp from '../../Components/PopUp';
import './style.css';

class Modal extends Component {

    constructor(props){

        super(props);

        this.status = {
        };

        this.instance = {};
        this.closeBtn = React.createRef();
    }

    //TODO: Think a way to receive LoginForm as prop

    listenSubmit = objReturn => {
        PopUp.showMessage(objReturn.state ? 'success' : 'error', objReturn.message);

        if (objReturn.state){
            this.closeBtn.current.click();
        }
    }

    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instance = M.Modal.init(elems);
        });

        return (
            <Fragment>
                <a className="modal-trigger" href="#modal1">{this.props.btnOpenTxt}</a>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4 className="titulo">Login</h4>
                        
                        <LoginForm listenSubmit={this.listenSubmit} />
                    </div>
                    <div className="modal-footer">
                        <a href="#" ref={this.closeBtn} className="modal-close waves-effect waves-green btn">Close</a>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}
export default Modal;