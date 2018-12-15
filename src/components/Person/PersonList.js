import React from 'react'
import Person from './Person'

  const personList = (props) => {
    
      return props.persons.map((person,index) => {

        return <Person delete={()=> {props.delete(index)}} name={person.name}

            changed={(event)=>{props.change(event,index)}}

            key={person.id}/>
      }
    )
  }


export default personList
