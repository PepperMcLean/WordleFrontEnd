import React from 'react'
import Keybutton from './Keybutton';

function Keyboard() {
  const keyset1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyset2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyset3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="row1">
        {keyset1.map((key) => {
          return <Keybutton kVal={key} key={key} />
        })}
      </div>
      <div className="row2">
        {keyset2.map((key) => {
          return <Keybutton kVal={key} key={key}/>
        })}
      </div>
      <div className="row3">
        <Keybutton kVal={"enter"}/>
        {keyset3.map((key) => {
          return <Keybutton kVal={key} key={key}/>
        })}
        <Keybutton kVal={"delete"}/>
      </div>
    </div>
  )
}

export default Keyboard