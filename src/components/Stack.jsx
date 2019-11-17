/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';



import StackedInput from './sequence/StackedInput'
import StackedButton from './sequence/StackedButton'

import List from './List'
import Switch from './Switch'
import './styles.css'
class Painel extends Component {

  state = {
    data: [],
    length: 0,
    value: '',
    sequenceStack: true,
  }
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.setLength = this.setLength.bind(this);
    this.setStack = this.setStack.bind(this);
  }

  push() {
    const { data, value, sequenceStack, length } = this.state;
    const lengthStackIsNotNull = data.filter(data => data !== null).length;

    sequenceStack && lengthStackIsNotNull >= length ? alert(1) : false;

    if (sequenceStack) {
      if (!value) return false
      for (let i = 0; i < data.length; i++) {
        if (data[i] === null) {
          data[i] = value
          break;
        }
      }
    } else {
      value !== '' ? data.push(value) : false;
    }
    this.setState({ data, value: '' })
  }
  pop() {
    const { data } = this.state;
    data.pop();
    this.setState({ data })
  }



  setLength = () => {
    const { length } = this.state
    const data = []
    for (let i = 0; i < length; i++) {
      data.push(null)
    }
    this.setState({ data })
  }
  setStack = () => {
    const { data, sequenceStack } = this.state
    data.forEach(item => data.pop())
    this.setState({ data: [], sequenceStack: !sequenceStack })
  }
  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'value' && value.length > 5) return ''
    this.setState({ [name]: value });
  }
  render() {
    const data = [...this.state.data].reverse()
    const { sequenceStack, value, length } = this.state;
    const WhatIsTheAmountStack = () => {
      const lengthStackIsNotNull = data.filter(data => data !== null).length;
      return sequenceStack
        ? `Size Stack: ${lengthStackIsNotNull} of ${data.length}`
        : `Size Stack: ${data.length}`;
    }
    const disabledPush = () => sequenceStack && data.length >= 1 ? false : !sequenceStack ? false : true
    const disabledPop = () => {
      const lengthStackIsNotNull = data.filter(data => data !== null).length;
      return sequenceStack && lengthStackIsNotNull >= 1
        ? false
        : !sequenceStack && data.length >= 1 ? false : true
    }
    return (
      <>
        <AppBar style={{ backgroundColor: '#ff1744' }}>
          <Box >
            <Toolbar color="success ">
              <Box>
                <Box >
                  {WhatIsTheAmountStack()}
                </Box>
                <Box>
                  <Switch checked={sequenceStack} onChange={this.setStack} />
                </Box>
              </Box>
              <Box p={2}>
                <TextField
                  id="outlined"
                  label="Value"
                  variant="outlined"
                  color="primary"
                  margin="normal"
                  placeholder="value"
                  name="value"
                  value={value}
                  onChange={this.handleChange}
                />
              </Box>
              <Box p={2}>
                <StackedInput value={length} stacked={sequenceStack} onChange={this.handleChange} />
              </Box>

              <Box p={1}>
                <Button variant="contained" disabled={disabledPush()} onClick={this.push}>PUSH</Button>
              </Box>
              <Box p={1}>
                <Button variant="contained" disabled={disabledPop()} onClick={this.pop}>POP</Button>
              </Box>
              <Box p={1}>
                <StackedButton stacked={sequenceStack} onClick={this.setLength} />
              </Box>
              <Box>
                <Typography variant="h5" align="right">{sequenceStack ? `Sequence Stack` : `Chained Stack`}</Typography>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
        <Container fixed>
          <Grid container justify="center">
            <Grid item xs={6}><List itemSize={12} arr={data.filter(item => item !== null)} /></Grid>
            <Grid item xs={6}><List arr={data} split={sequenceStack ? '' : '>'} /></Grid>
          </Grid>
        </Container>


      </>
    )
  }
}
export default Painel;