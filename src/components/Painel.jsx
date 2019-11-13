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
  const [state, setState] = useState({ data: State.data, text: '', stacked: true });


  return (
    <>
      <input type="text" />
      <input type="number" />
      <StackedPainel />
      <input type="button" onClick={() => State.push()} value="push" />
      <input type="button" value="pop" />
    </>
  )
}

export default Painel;