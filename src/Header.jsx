import React, {useState} from 'react'

function Header(props) {

   
console.log(props.white)

  return (
    <div className='header'>
        <h1 style={{color: props.white}}>Overreacted</h1>
        <button onClick={props.darkMode}> Toggle </button>
    </div>
  )
}

export default Header