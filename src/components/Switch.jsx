import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default props => {
  return (
      <FormControlLabel
        control={<Switch checked={props.checked} onChange={props.onChange} />}
        label="Change Stack Type"
      />
  );
}