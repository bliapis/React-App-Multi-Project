import React, { Fragment } from 'react';
import LinkWrapper from '../LinkWrapper';
import IsAuth from '../User/isAuth';
import LogOff from '../User/logoff';
import './style.css';
import Modal from '../../Components/Modal';

const LoginLink = () => {
    return (
        IsAuth.Check() ? (
            <LogOff />
        ) : (
            <Modal btnOpenTxt='Login' />
        )
    )
}

const Header = () => {

    return (
        <Fragment>
            <nav className="nav-extended indigo lighten-2">
                <div className="nav-wrapper">
                    <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Bruno's APP :D</LinkWrapper>
                    <LinkWrapper to="/" className="sidenav-trigger" data-target="mobile-demo"><i className="material-icons">menu</i></LinkWrapper>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><LinkWrapper to="/">Components</LinkWrapper></li>
                        <li><LinkWrapper to="/">About</LinkWrapper></li>
                    </ul>
                </div>

                <div className="menu-bar-div">
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><LinkWrapper to="/biscoito">Biscoito</LinkWrapper></li>
                            <li className="tab"><LinkWrapper to="/cronometro">Cronometro</LinkWrapper></li>
                            <li className="tab"><LinkWrapper to="/nutri">Nutri</LinkWrapper></li>
                        </ul>
                    </div>

                    <div className="right">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><LoginLink /></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><LinkWrapper to="/">Components</LinkWrapper></li>
                <li><LinkWrapper to="/">About</LinkWrapper></li>
            </ul>
        </Fragment>
    );
}
export default Header;