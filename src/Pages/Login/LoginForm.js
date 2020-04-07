import React, { Component } from 'react';
import FormValidator from '../../Components/Form/FormValidator';
import PopUp from '../../Components/PopUp';
import Auth from '../../Components/User/auth';
import './styleLoginForm.css';

class LoginForm extends Component {

    constructor(props) {

        super(props);

        this.formValidator = new FormValidator(
            [
                {
                    field: 'userName',
                    method: 'isEmpty',
                    validWhen: false,
                    message: 'Fill an username'
                },
                {
                    field: 'password',
                    method: 'isEmpty',
                    validWhen: false,
                    message: 'Fill the password'
                }
            ]
        );

        this.startState = {
            userName: '',
            password: '',
            validation: this.formValidator.validated()
        }

        this.state = this.startState;
    }

    listenInputField = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        const validation = this.formValidator.validate(this.state);

        if (validation.isValid) {
            let authObj = Auth.Login(this.state.userName, this.state.password);

            this.props.listenSubmit({
                state: authObj.state,
                message: authObj.message
            });
        }
        else {
            const { userName, password } = validation;
            const fields = [userName, password];

            const invalidFields = fields.filter(elem => {
                return elem.isInvalid;
            });

            invalidFields.forEach(field => {
                PopUp.showMessage('error', field.message);
            });
        }
    }

    render() {

        const { userName, password } = this.state;

        return (
            <form>
                <div className='row containerLoginForm'>
                    <div className='input-field col s4'>
                        <label className="input-field" htmlFor="userName">User Name</label>
                        <input
                            className="validate"
                            id="userName"
                            name="userName"
                            type="text"
                            value={userName}
                            onChange={this.listenInputField}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="password">Password</label>
                        <input
                            className="validate"
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.listenInputField}
                        />
                    </div>

                    <div className="col s4">
                        <button type="button" onClick={this.submitForm} className="waves-effect waves-light btn indigo lighten-1">Log in</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default LoginForm;