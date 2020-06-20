import React from 'react';

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
};

type Props<Model> = ContextValue<Model>;

export function Table<Model> ({ list, listConfig }: Props<Model>) {
  const [sortedList, sortList] = useSortedList(list);

  return (
    <Wrapper>
      <TableContext.Provider value={{ list: sortedList, listConfig }}>
        <TableWrapper>
          <StyledTable>
            <TableHead<Model> onHeaderClick={sortList} />
            <TableBody />
          </StyledTable>
        </TableWrapper>
      </TableContext.Provider>
    </Wrapper>
  );
}
