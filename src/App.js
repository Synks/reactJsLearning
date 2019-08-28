import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Sudhir1', age:'29'},
      {name:'Shrinidhi1', age:'24'},
      {name:'Aaditya1', age:'21'}
    ]
  }

  switchNameHandler = () => {
    console.log('this was clicked');
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>this is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> my hobies are : cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hi I am a react-app...!!!'));
  }
}

export default App;
