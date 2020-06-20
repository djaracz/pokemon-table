import styled from "styled-components";

export const StyledTHead = styled.thead`
  background-color: #4aedc4;
  color: #14a37f;
  border: none;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
`;

type StickyTh = {
  width: number;
};
export const StickyTh = styled.th<StickyTh>`
  background-color: #4aedc4;
  color: #14a37f;
  border: none;
  padding: 20px;
  text-align: left;
  white-space: nowrap;
  border-left: solid 1px #DDEFEF;
  border-right: solid 1px #DDEFEF;
  right: 0;
  position: absolute;
  top: auto;
  box-sizing: border-box;
  min-width: ${({ width }) => `${width}px`};
`;

type StyledTh = {
  width: number;
};
export const StyledTh = styled.th<StyledTh>`
  padding: 20px;
  box-sizing: border-box;
  min-width: ${({ width }) => `${width}px`};
`;
