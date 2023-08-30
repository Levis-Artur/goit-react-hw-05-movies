import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


export const List = styled.ul`
  
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Link = styled(NavLink)`
  padding: 4px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;
  font-weight: 500;

  &.active {
    color: yellow;
    background-color: blue;
  }
`;
