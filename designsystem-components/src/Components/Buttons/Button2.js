import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Button2() {
  const navigate = useNavigate();
  const onSubmit = (event) => {
      event.preventDefault();
          navigate('/home');
  }
  return (<div>
    <Button className="button-group" variant="outlined" onClick={onSubmit}>Login</Button>
  </div>
  );
}
export default Button2;