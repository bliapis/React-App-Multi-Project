const IsAuth = {
    
    Check(){
        var retrievedObject = localStorage.getItem('User');
        return(retrievedObject !== null ? true : false);
    }
}
export default IsAuth;