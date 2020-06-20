import styled from "styled-components";

export const StyledTHead = styled.thead`
  background-color: #DDEFEF;
  border: none;
  color: #336B6B;
  padding: 10px;
  text-align: left;
  text-shadow: 1px 1px 1px #fff;
  white-space: nowrap;
`;

export const StickyTh = styled.th`
background-color: #DDEFEF;
  border: none;
  color: #336B6B;
  padding: 10px;
  text-align: left;
  text-shadow: 1px 1px 1px #fff;
  white-space: nowrap;
  border-left: solid 1px #DDEFEF;
  border-right: solid 1px #DDEFEF;
  right: 0;
  position: absolute;
  top: auto;
  width: 120px;
`;
