import React, { useState } from 'react'
import State from './../services/state'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import StackedInput from './stacked/StackedInput'
import StackedButton from './stacked/StackedButton'

import List from './List'
import Switch from './Switch'

const Painel = () => {
  const [data, setData] = useState([])
  const [stack, setStack] = useState(true)

  const handleData = (param, pop) => {
    pop ? State.pop() : State.push(param)
    setData(data => [...State.data])
  }
  const handleLength = () => {
    State.setLength()
    setData(data => [...State.data])
  }
  const handleStack = () => {
    State.data = [];
    setData(data => [...State.data])
    setStack(stack => !stack)
  }
  data.reverse()
  return (
    <>
      <Switch checked={stack} onChange={handleStack} />
      <TextField
        id="outlined-secondary"
        label="PUSH"
        variant="outlined"
        color="primary"
        margin="normal"
        placeholder="value"
        onChange={State.handleChange}
      />
      <StackedInput stacked={stack} onChange={State.handleLength}/> 
      <br/>
      <Button variant="contained" onClick={() => handleData(stack)}>PUSH</Button>
      <Button variant="contained" onClick={() => handleData(null, true)}>POP</Button>
      <StackedButton stacked={stack} onClick={handleLength} />
      <Grid container justify="center">
        <Grid item xs={6}><List itemSize={12} arr={data.filter(item => item !== null)} /></Grid>
        <Grid item xs={6}><List arr={data} split={stack? '' : '>'}/></Grid>
      </Grid>
    </>
  )
}
export default Painel;