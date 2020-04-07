const AuthUser = {

    GetUser(){
        var retrievedObject = localStorage.getItem('User');
        let user = JSON.parse(retrievedObject);
        return(user !== null ? user : {userName:''});
    }
}
export default AuthUser;