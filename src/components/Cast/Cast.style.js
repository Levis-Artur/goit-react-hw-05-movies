import styled from "styled-components";

export const Container = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 138px);
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
`;

export const Name = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
