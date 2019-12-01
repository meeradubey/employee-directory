import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import "./mainCss.css";
let alphaBetEmployees
class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees, 
    name:"", 
    salary:"", 
    occupation:""
  };

  handleInputChange = (event) => {
    event.persist()
    
    this.setState({ ...this.state.employees, [event.target.name]: event.target.value });
    
  }

  addEmployee = () => {
    let allEmps = this.state.employees
    let newEmp = {
      name: this.state.name,
      salary: this.state.salary,
      occupation: this.state.occupation
    }
    allEmps.push(newEmp)
    this.setState({employees:allEmps, name:"", title:"", salary:""})
  }

  handleSubmit = (event)=> {
if(event){
  this.addEmployee()
  event.preventDefault()
}
  }

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  alphaClick = () => {
    this.setState({employees:[...this.state.employees].sort(this.compare), name:"", title:"", salary:""})
  
  }
  numClick = () => {
    console.log('num')
  }
  noneClick = () => {
    console.log('none')
  }

  compare = (a,b) =>{
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()

    let comparison = 0;
    if (nameA>nameB){
      comparison = 1; 
  }  else if (nameA< nameB){
    comparison = -1;
  } 
  return comparison
}

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    console.log([...this.state.employees].sort(this.compare))
    return (
      <Wrapper>
        <Title>Employee Database</Title>
       
        <form className="inputsBox" onSubmit={this.handleSubmit}>
          <span>Name:</span><input className="nameInput" name="name" onChange={this.handleInputChange}type= "text" />
          <span>Title:</span><input className="occupationInput" name="occupation" type= "text" onChange={this.handleInputChange} />
          <span>Salary:</span><input className="salaryInput" name="salary" type= "number" onChange={this.handleInputChange}/>
          <button className="addButton" type = "submit" >Add</button>
        </form >
        <div className="inputsBox">Sort by 
        <button className="noneButton" type = "submit" onClick={this.noneClick} >None</button>
        <button className="alphaButton" onClick={this.alphaClick} type = "submit" >Alphabet</button>
        <button className="numButton" type = "submit" onClick={this.numClick}>Numbers</button>
        </div>
        {this.state.employees.map(employee => (
          
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            salary={employee.salary}
          />
          
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
