//class component of User - functional component
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //creating state variables
        this.state = {
            user:{
                name:"sample_user",
                bio:"smaple bio"
            }
        }
    }
    async componentDidMount(){
        let response = await fetch("https://api.github.com/users/Dinil-Denny");
        let data = await response.json();
        console.log(data);
        this.setState({
            user : data
        })
    }
    render(){
        //destructuring from props
        const {email} = this.props
        //destructuring the state variable object
        const {name,bio} = this.state.user;
        return(
            <div className="user_card">
                <h2>Our Team (Class component)</h2>
                <h3>Name: {name}</h3>
                <h4>Email: {email}</h4>
                <h4>Bio: {bio}</h4>
            </div>
        )
    }
}

export default UserClass;