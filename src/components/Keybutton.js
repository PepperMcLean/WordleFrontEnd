import React from 'react'

function Keybutton({ kVal, resize }) {
  return (
    <div className="button" id={resize && "big"} >{kVal}</div>
  )
}

export default Keybutton