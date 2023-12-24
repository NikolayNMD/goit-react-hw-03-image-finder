import { styled } from 'styled-components';

export const Btn = styled.button`
  display: block;
  margin: 14px auto;
  width: 140px;
  padding: 12px;
  color: #fff;
  font-size: 18px;
  background-color: #3f51b5;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    background-color: #303f9f;
  }
`;
