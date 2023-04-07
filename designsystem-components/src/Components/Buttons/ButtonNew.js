import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import ArrowRight  from '@mui/icons-material/ArrowRight';
// import ArrowLeft  from '@mui/icons-material/ArrowLeft';

function ButtonNew(props) {
  return (<div>
    <Button className="button-group" variant="outlined">{props.name}</Button>
  </div>
  );
}
export default ButtonNew;