import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
                 
    this.state = {
      count: 0,
      userInfo : {
        name : "Comeon",
        location : "Ass",
      }
    };
  }

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/dutt-gamer");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo : json,
    });
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }
  render() {
    console.log(this.props.name + "Child render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: count - 1,
            });
          }}
          disabled={count === 0} 
        >
          Decrement
        </button>

        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset
        </button>
        <h1>Count : {count}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h4>Contact : akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
