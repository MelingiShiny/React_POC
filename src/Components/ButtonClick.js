import React from 'react'

function ButtonClick(props) {
  return (
    <button onClick={props.onClick} className={props.className} >{props.text}</button>
  )
}

export default ButtonClick