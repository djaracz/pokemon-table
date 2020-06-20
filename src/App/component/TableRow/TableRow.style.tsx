import styled from "styled-components";

export const StyledTd = styled.td`
  border-bottom: solid 1px #DDEFEF;
  color: #333;
  padding: 20px;
  text-shadow: 1px 1px 1px #fff;
  white-space: nowrap;
`;

type StickyTd = {
  width?: number;
};

// todo: !!!!!! border-left
export const StickyTd = styled.td<StickyTd>`
  background: #fff;
  border-bottom: solid 1px #DDEFEF;
  // border-left: solid 1px #DDEFEF;
  border-right: solid 1px #DDEFEF;
  padding: 20px;
  right: 0;
  position: absolute;
  top: auto;
  min-width: ${({ width }) => `${width}px`}
`;
