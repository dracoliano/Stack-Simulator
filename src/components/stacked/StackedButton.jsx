import React from 'react';
import Button from '@material-ui/core/Button';

export default props => {
  if (props.stacked) {
    return (
      <Button
        onClick={props.onClick}
        color="primary"
        variant="contained"
      >
        Set Length
    </Button>
    )
  }
  return '';

}