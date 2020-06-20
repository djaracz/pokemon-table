import React, {useRef, useState} from 'react';
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
  isSorted: boolean;
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
  const [isSorted, setIsSorted] = useState(false);
  const { width } = useComponentSize(tableWrapperRef);
  const [sortedList, sortList] = useSortedList(list);

  const stickyColumn = hasStickyColumn(getColumnsWidth(listConfig), width);

  const handleOnHeaderClick = (list: any) => {
    sortList(list);
    setIsSorted(true);
  };

  return (
    <Wrapper>
      <TableContext.Provider value={{
        list: sortedList,
        hasStickyColumn: stickyColumn,
        isSorted,
        listConfig,
      }}>
        <TableWrapper ref={tableWrapperRef} hasScroll={stickyColumn}>
          <StyledTable>
            <TableHead<Model> onHeaderClick={handleOnHeaderClick} />
            <TableBody />
          </StyledTable>
        </TableWrapper>
      </TableContext.Provider>
    </Wrapper>
  );
}
