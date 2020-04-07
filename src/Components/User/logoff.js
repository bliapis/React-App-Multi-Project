import React, {Component} from 'react';
import AuthUser from '../User/authUser';

const LogOffAct = () => {
    localStorage.removeItem('User');
    
    window.location = '/';
}

class LogOff extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        let user = AuthUser.GetUser();

        return(
            <div>Welcome {user.userName} - <button className='btn indigo lighten-2' onClick={LogOffAct}>LogOff</button></div>
        )
    }
}
export default LogOff;