import React, { useContext } from 'react';

import { TableContext } from '../Table/Table.context';
import { ListConfig } from '../Table/Table';
import { StyledTHead, StickyTh, StyledTh } from './TableHead.style';

type Props = {
  onHeaderClick: (key: string) => void;
};

export function TableHead<Model> ({ onHeaderClick }: Props) {
  const { listConfig, hasStickyColumn } = useContext(TableContext);

  const listConfigKeys = Object.keys(listConfig);
  const lastConfigKeysIndex = listConfigKeys.length - 1;

  return (
    <StyledTHead>
      <tr>
        {listConfigKeys.map((key, i) => {
          const { width, header } = (listConfig as ListConfig<Model>)[key as keyof Model];

          if (hasStickyColumn && i === lastConfigKeysIndex) {
            return <StickyTh key={i} onClick={() => onHeaderClick(key)} width={width}>{header}</StickyTh>;
          }

          return <StyledTh key={i} onClick={() => onHeaderClick(key)} width={width}>{header}</StyledTh>;
        })}
      </tr>
    </StyledTHead>
  );
}
