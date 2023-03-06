import React,{ useState } from 'react'
import Header from './Header'
import Content from './Content'

function App() {

  const [color, setColor] = useState("#fff");
  const [textColor, setTextColor] = useState("black");

  function changeColor(){
     color === "#fff" ? setColor("#282c35") : setColor("#fff")
     textColor === "black" ? setTextColor("#fff") : setTextColor("black")
  }

  return (
    <>
    <div className='container' style={{background: color}}>
    <Header darkMode={changeColor} white={textColor} />
    <Content />
    </div>
    </>
  )
}

export default App