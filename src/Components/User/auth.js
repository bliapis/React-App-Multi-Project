import { userInfo } from 'os';

const AuthApi = props => {

    //When API is ready, use that! :D
    let apiUsers = [
        {
            userName: '',
            sessionValid: null, //TODO: Develop a session time validate, based on API date return
            token: null,
            modulesAccess: []
        },
        {
            userName: 'Bruno',
            sessionValid: null, //TODO: Develop a session time validate, based on API date return
            token: "APITokenBrunoUser",
            modulesAccess: [{ 'biscoito': true }, { 'cronometro': true }, { 'nutri': true }]
        },
        {
            userName: 'Maria',
            sessionValid: null, //TODO: Develop a session time validate, based on API date return
            token: "APITokenMariaUser",
            modulesAccess: [{ 'biscoito': false }, { 'cronometro': true }, { 'nutri': false }]
        }
    ];

    let success = false;

    const userToReturn = apiUsers.filter(elem => {
        return elem.userName.toString().toLowerCase() == props.userName.toString().toLowerCase()
            && props.password == "123"
    });

    if (userToReturn.length > 0){
        success = true;
    }

    return ({
        state: success,
        message: success ? ('User logged!') : ('Wrong username or password.'),
        userData: userToReturn[0]
    });
}

const Auth = {

    Login: (userName, password) => {
        let userInfo = AuthApi({userName: userName, password: password});

        if (userInfo.userData !== undefined){
            localStorage.setItem('User', JSON.stringify(userInfo.userData));
        }else{
            localStorage.removeItem('User');
        }
        
        
        return ({
            state: userInfo.state,
            message: userInfo.message
        })
    }
}
export default Auth;