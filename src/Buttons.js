import React from 'react'

function Buttons(props) {
  return (
    <button className={props.className} onClick={props.handleClick}>{props.value}</button>
  )
}

export default Buttons