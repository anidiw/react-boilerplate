import React from 'react';
import {Header} from '..//components/header'

class App extends React.Component {
constructor(props){
   super(props);
}

state = {
    counter:0
}

increment = () =>
{
    this.setState(prevState => ({counter: prevState.counter + 1}));
}


render(){
    debugger;
    return (
        <React.Fragment>
        <div>Counter Example</div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increment} >+</button>
        <Header/>
        </React.Fragment>
    )
    }
}
export default App;