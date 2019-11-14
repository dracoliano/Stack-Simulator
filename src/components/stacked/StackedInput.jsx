import React from 'react';
import TextField from '@material-ui/core/TextField'

function StackedPainel(props) {
  if (props.stacked) {
    return (
      <>
        <TextField
          onChange={props.onChange}
          type="number"
          placeholder="length"
          id="outlined-secondary"
          label="STACK LENGTH"
          variant="outlined"
          color="primary"
          margin="normal"
        />
      </>
    )
  }
  return ''
}
export default StackedPainel;