import React, { useRef } from 'react';
import useComponentSize from '@rehooks/component-size'

import { useSortedList } from '../../hook/useSortedList';
import { TableHead } from '../TableHead/TableHead';
import { TableBody } from '../TableBody/TableBody';
import { TableContext } from './Table.context';
import { StyledTable, TableWrapper, Wrapper } from './Table.style';

export type ListConfig<Model> = {
  [Key in keyof Model]: {
    header: string;
    width: number;
  }
};

export type ContextValue<Model> = {
  width: number;
  list: Model[];
  listConfig: ListConfig<Model>;
};

type Props<Model> = ContextValue<Model>;

export function Table<Model> ({ list, listConfig }: Props<Model>) {
  const tableWrapperRef = useRef();
  const { width } = useComponentSize(tableWrapperRef);
  const [sortedList, sortList] = useSortedList(list);

  return (
    <Wrapper>
      <TableContext.Provider value={{ list: sortedList, listConfig, width }}>
        <TableWrapper ref={tableWrapperRef}>
          <StyledTable>
            <TableHead<Model> onHeaderClick={sortList} />
            <TableBody />
          </StyledTable>
        </TableWrapper>
      </TableContext.Provider>
    </Wrapper>
  );
}
