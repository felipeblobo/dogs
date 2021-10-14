import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const InputStyled = styled.input`
  border: 1px solid var(--smoothBackground);
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: .8rem;
  border-radius: .4rem;
  background: var(--smoothBackground);
  transition: .3s;

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--golden);
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const LabelStyled = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: .5rem;

`;

export const Error = styled.p`
  color: #f31;
  font-size: .875rem;
  margin-top: .25rem;
`;


