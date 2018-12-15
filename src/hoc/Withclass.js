import React from 'react'

const Withclass = (props) => {

  return <div className={props.classes}> {props.children}</div>

}


export default Withclass;
