import React, { useState } from 'react'
import State from './../services/state'


function StackedPainel(props) {
  return (
    <>
      <input onChange={props.onChangeStacked} type="number" placeholder="length" />
      <input onClick={props.onClickStacked} type="button" value="set length" />
    </>
  )
}

function Painel() {
  const [data, setData] = useState([])
  const test = () => console.log(State.data)

  const myState = () => {
    State.push();
    setData(data => [...State.data])
    console.log(data)
  }

  

  return (
    <>
      <input onChange={State.handleChange} type="text" />
      <input type="number" />
      <input type="button" onClick={myState} value="push" />
      <input type="button" onClick={test} value="pop" />
      <ul>{data.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </>
  )
}

export default Painel;