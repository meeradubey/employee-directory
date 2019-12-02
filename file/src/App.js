import React, { Component } from "react";
import EmployeeCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Employee from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Employee
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Employee = this.state.Employee.filter(friend => Employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Employee });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.Employee.map(Employee => (
          <EmployeeCard
            removeEmployee={this.EmployeeFriend}
            id={Employee.id}
            key={Employee.id}
            name={Employee.name}
            image={Employee.image}
            occupation={Employee.occupation}
            location={Employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
