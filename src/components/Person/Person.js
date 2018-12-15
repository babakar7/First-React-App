import React, {Component} from 'react';
import './Person.css';
// a component is a function that returns JSX

import styles from './Person.module.css'

class Person extends Component{


  constructor(props){
    super(props)

    console.log(props)
  }

  componentWillMount(){
    // last minute update to state. not used very much
  }

  componentDidMount(){
    // side effects can be caused here
  }

  render(){
    return (
        <div className={styles} >
          <p> I am a person. My name is {this.props.name} </p>
          <input type="text" onChange={this.props.changed}  value={this.props.name}/>
          <button  onClick={this.props.delete} > DELETE </button>
        </div>
    );
  }
}
export default Person;
