import React from 'react';
import Button from '@material-ui/core/Button';

export default props => {
  if (props.stacked) {
    return (
      <Button
      style={{backgroundColor: '#536dfe'}}
        onClick={props.onClick}
        color="#fff"
        variant="contained"
      >
        Set Length
    </Button>
    )
  }
  return '';
}