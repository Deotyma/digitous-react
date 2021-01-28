import React from "react"; 


export class Counter extends React.Component{
    render(){
        const {count, decrementCount, incrementCount} = this.props;
        return(
            <div >
                <button onClick= {decrementCount}>-</button>
                <h2>{count}</h2>
                <button onClick = {incrementCount}>+</button>
            </div>
        );
    }

}

export default Counter;