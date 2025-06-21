import React from "react";

class MyClassComponent extends React.Component{
    myStyle={
        color:"green",
        textAlign:"center"
    }
    render(){
        return(
            <h1 style={this.myStyle}>This is my class component.</h1>
        )
    }
}
export default MyClassComponent;
