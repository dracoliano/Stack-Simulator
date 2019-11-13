import React, { useState } from 'react'

function StackedPainel(props) {
  return (
    <>
      <input onChange={props.onChangeStacked} type="number" placeholder="length" />
      <input onClick={props.onClickStacked} type="button" value="set length" />
    </>
  )
}

function Painel() {
  const [state, setState] = useState({ data: [], text: '', stacked: true });

  return (
    <>
      <input type="text" />
      <input type="number" />
      <StackedPainel />
      <input type="button" value="push" />
      <input type="button" value="pop" />
    </>
  )
}

export default Painel;