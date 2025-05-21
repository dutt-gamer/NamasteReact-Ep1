import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <User
          name={"Akshay Saini (function)"}
          location={"Dehradun (function)"}
        />

        {/* <UserClass
          name={"Child 1 (class)"}
          location={"Dehradun (class)"}
        /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <User name={"Akshay Saini (function)"} location={"Dehradun (function)"} />

//       <UserClass name={"Akshay Saini (class)"} location={"Dehradun (class)"}/>
//     </div>
//   );
// };

export default About;
