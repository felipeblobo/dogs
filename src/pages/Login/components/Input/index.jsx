import React from 'react';
import { Error, InputStyled, LabelStyled, Wrapper } from './styles';

const InputBlock = ({ value, name, onChange, error, label, type, onBlur }) => {
  return (
    <Wrapper>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <InputStyled
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error> }
    </Wrapper>
  );
};

export default InputBlock;
