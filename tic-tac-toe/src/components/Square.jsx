import { useState } from "react"

//Square component that uses props that will be passed through our Board component holding a value and a onSquareClick which we will assign a handle click function to
const Square = ({value, onSquareClick }) => {


  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  )
}

export default Square