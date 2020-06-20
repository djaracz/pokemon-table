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
  list: Model[];
  listConfig: ListConfig<Model>;
  hasStickyColumn: boolean;
};

type Props<Model> = Pick<
  ContextValue<Model>,
  'list' | 'listConfig'
>;


const getColumnsWidth = (listConfig: ListConfig<unknown>) => Object.keys(listConfig).reduce(
  ((currentWidth, key) => (listConfig as any)[key].width + currentWidth),
  0
);

const hasStickyColumn = (columnsWidth: number, wrapperWidth: number) => columnsWidth >= wrapperWidth;

export function Table<Model> ({ list, listConfig }: Props<Model>) {
  const tableWrapperRef = useRef();
  const { width } = useComponentSize(tableWrapperRef);
  const [sortedList, sortList] = useSortedList(list);

  const stickyColumn = hasStickyColumn(getColumnsWidth(listConfig), width);

  return (
    <Wrapper>
      <TableContext.Provider value={{ list: sortedList, listConfig, hasStickyColumn: stickyColumn }}>
        <TableWrapper ref={tableWrapperRef} hasScroll={stickyColumn}>
          <StyledTable>
            <TableHead<Model> onHeaderClick={sortList} />
            <TableBody />
          </StyledTable>
        </TableWrapper>
      </TableContext.Provider>
    </Wrapper>
  );
}
