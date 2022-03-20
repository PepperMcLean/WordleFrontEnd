import React from 'react'

function Keybutton({ kVal, resize }) {
  const selectLetter = () => {
    console.log(kVal)
  }

  return (
    <div className="button" id={resize && "big"} onClick={selectLetter} >{kVal}</div>
  )
}

export default Keybutton