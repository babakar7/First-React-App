import React, { Component } from 'react';
import './App.css';

// should start with uppercase because react identifies them as custom compoents

import PersonList from '../components/Person/PersonList'

class App extends Component {

  state = {
    persons: [
      {name:'babs', age:27, id:1},
      {name:'bond', age:28, id:2 },
      {name:'diop', age:29, id:3}
    ],

    showPeople: false

  }
  // Method

deletePersonhandler = (index) => {

// create a copy of array in state
  let people = this.state.persons.slice()


  people.splice(index,1)


  this.setState({persons:people})
}
// edit name from input in person
  nameChangeHandler = (event, index) => {


    // avoid mutating state directly
    let person = {...this.state.persons[index]}

    person.name = event.target.value

    let persons = [...this.state.persons]

    persons[index] = person

    this.setState({
        persons: persons
    })
  }

  // this syntax will keep the this context when the event is fired
  // makes sure this references the class under ALL circumstances
  //otherwise this would refer to the button
  togglePeople = () => {

    let show = this.state.showPeople

    this.setState({showPeople: !show})

  }
  // render will render content to the DOM
  // can also do other things like raech out to the web
  render() {

    const style = {
      backgroundColor:'pink',
      ':hover':{
        backgroundColor:'blue',
        color:'white'
      }
    }
    // parentheses are just to have the "html" accross multiple lines

    let people = null

    if(this.state.showPeople){
      people = (    <div>

        <PersonList persons={this.state.persons}
        delete={this.deletePersonhandler}
        change={this.nameChangeHandler}/>
        </div> );

        style.backgroundColor = 'yellow'
        style[':hover'].backgroundColor = 'pink'
        style[':hover'].color = 'white'

    }

    let classes = []

    if(this.state.persons.length <= 2){
      classes.push('red')
    }

    if(this.state.persons.length <=1){
      classes.push('bold')
    }


    return (
      // JSX. Syntactical sugar
      <div className="App">
        <h1 className={classes.join(' ')} > My time is now </h1>
        <button style={style} onClick={this.togglePeople}> SWITCH NAME </button>
        {people}
      </div>
    );

  }
}
export default  App;
