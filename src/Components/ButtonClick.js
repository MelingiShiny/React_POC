import React from 'react'

function ButtonClick({onClick, className,text, backgroundColor}) {
  return (
    <button onClick={onClick} className={className} style={{backgroundColor}}>{text}</button>
  )
}

export default ButtonClick