import React from 'react';
import './index.css';

class Name extends React.Component{
    constructor(props){
        super(props);
        //this.state is allowed only in constructor otherwise use setState({obj}) 
        this.state={today:new Date()};
    }
    //Called after the render()
    componentDidMount(){
        this.timeID= setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    tick(){
        this.setState({
            today:new Date()
        });
    }

    render(){
        return(
            <>
            <h1>Heelo world !</h1>
            <h2>Live clock : {this.state.today.toLocaleTimeString()}</h2>
            </>
        );
    }
}
export default Name;
