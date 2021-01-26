import React from "react";

export class Box extends React.Component{
    
    render(){
        if(this.props.toto ==="steps" || this.props.toto ==="heart" || this.props.toto ==="temperature"){
        return(
            <div className = "box col-sm-3 col-6">
                <h2>{this.props.name}</h2>
                <span style = {{color: this.props.color, fontSize: 100}} class="material-icons"> {this.props.icon} </span>
                <div>
                    <input type="range" id="value" name="value"
                    min={this.props.min} max={this.props.max}/> 
                    </div>
                <p>{this.props.value} {this.props.unit}</p>
                
            </div>
        )
    }else{
        return(
            <div className = "box col-sm-3 col-6">
                <h2>{this.props.name}</h2>
                <span style = {{color: this.props.color, fontSize: 100}} class="material-icons"> {this.props.icon} </span>
                <p>{this.props.value} {this.props.unit}</p>
                
            </div>
        )

    }
    }
}

export default Box;