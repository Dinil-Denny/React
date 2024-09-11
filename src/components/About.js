import User from "./User";
import UserClass from "./UserClass";

import React from "react";
// const About = () => {
//     return(
//         <div className="about_page">
//             <h1 id="about_us">About Us</h1>
//             <h5>Order your favorite food</h5>
//             {/* functional  component*/}
//             {/* <User/> */}
//             {/* class component */}
//             <UserClass name={"Dinil Denny"} email={"abc123@gmail.com"}/>
//         </div>
//     )   
// }

class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }

    render(){
        return(
            <div className="about_page">
               <h1 id="about_us">About Us</h1>
               <h5>Order your favorite food</h5>
               <UserClass name={"first"} email={"abc123@gmail.com"}/>
            </div>
        )
    }
}

export default About;
