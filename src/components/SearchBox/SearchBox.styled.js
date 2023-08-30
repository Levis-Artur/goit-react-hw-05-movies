import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;
export const Button = styled.button`
  position: absolute;
  right: 2px;
  height: 90%;
  width: 40px;
  background-color: lightcyan;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 0;
  border-left: 2px solid;    
 border-radius: 0px 4px 4px 0px;    
 
  cursor: pointer;
  :hover{
    background-color: lightskyblue;
 }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;

`;
