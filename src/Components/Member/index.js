import React, { Component, Fragment } from 'react';

class Member extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            name: props.name,
        };
    }

    componentWillMount(){
        if (this.state.name === 'TestAccess'){
            this.setState({name: 'Access denied!'});
        }
    }

    render(){
        return(
            <Fragment>
                <h2>{this.state.name}</h2>
            </Fragment>
        )
    }
}
export default Member;