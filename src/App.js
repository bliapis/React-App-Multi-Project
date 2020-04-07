import React, {Component, Fragment} from 'react';
import Header from './Components/Header';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            
        };
    }

    render(){
        return(
            <Fragment>
                <Header />
            </Fragment>
        )
    }
}
export default App;