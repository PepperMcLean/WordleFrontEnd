import React from 'react'

function Keyboard() {
  const keyset1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyset2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyset3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div classname="keyboard">
      <div classname="row1">
        {keyset1.map((key) => {
          return key
        })}
      </div>
      <div classname="row2"></div>
      {keyset2.map((key) => {
          return key
        })}
      <div classname="row3"></div>
      {keyset3.map((key) => {
          return key
        })}
    </div>
  )
}

export default Keyboard