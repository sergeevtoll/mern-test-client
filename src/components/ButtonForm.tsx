import React from 'react';
import { Button } from '../styles/styles';

interface Iprops {
  onClick:()=>Promise<void>
  className: string
  value: string
  disabled:boolean
};

const ButtonForm = ({ onClick, className, value, disabled }: Iprops) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      value={value}
      disabled={disabled}
    >{value}</Button>
  )
};

export default ButtonForm;
