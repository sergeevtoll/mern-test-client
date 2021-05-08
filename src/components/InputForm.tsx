import React from 'react';
import { Input } from '../styles/styles';

interface Iprops {
  name: string
  id: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  type: string
}

const InputForm = ({ name, placeholder, id, onChange, value, type }: Iprops) => {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
      type={type}
    />
  )
};

export default InputForm;
