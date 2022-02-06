// import React, { Component } from "react";

// // class component:-
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name: "vijay",
//             roll: this.props.roll
//         };
//     }
//     // handleClick = this.handleClick.bind(this);
//     // handleClick(){

//     // Arrow function:-
//     handleClick=() =>{
//         console.log("Button Clicked",this);
//     };
//     render(){
//         return(
//             <div>
//                 <h1>
//                     Hello,{this.state.name} your roll number is {this.state.roll}
//                 </h1>
//                 <button onClick={this.handleClick}>
//                         Click me
//                 </button>
//             </div>
//         );
//     }
// } 
// export default Student;
import React from "react";
// Function component:-
function Student (props){
    // function handleClick()

    const handleClick = () =>{ 
        console.log("Button Clicked");
    }

    // function handleClick(e) { 
    //     e.preventDefault();
    //     console.log("Clicked");
    // }    
    return(
        <div>
            {/* <h1> hello Vijaykumar </h1> */}
            <h1> Hello{props.name} </h1>
            {/* <button onClick={handleClick}> Click Me </button> */}

            <a href="https://github.com/vijay810/" onClick={handleClick}>Click me</a>
        </div>
    );
}
export default Student;
