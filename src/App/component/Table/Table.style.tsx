import styled from 'styled-components';

export const StyledTable = styled.table`
  border: none;
  border-right: solid 1px #DDEFEF;
  border-left: solid 1px #DDEFEF;
  border-collapse: separate;
  border-spacing: 0;
`;

export const Wrapper = styled.div`
  position: relative; 
`;

type TableWrapper = {
  ref: any;
  hasScroll: boolean;
}
export const TableWrapper = styled.div<TableWrapper>`
  overflow-x: ${({ hasScroll }) => !!hasScroll && 'scroll'};
  overflow-y: visible;
  padding-bottom: 5px;
`;
