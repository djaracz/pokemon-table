import React, { useContext } from 'react';

import { TableContext } from '../Table/Table.context';
import { ListConfig } from '../Table/Table';
import { StyledTHead, StickyTh } from './TableHead.style';

type Props = {
  onHeaderClick: (key: string) => void;
};

export function TableHead<Model> ({ onHeaderClick }: Props) {
  const { listConfig } = useContext(TableContext);

  const listConfigKeys = Object.keys(listConfig);
  const lastConfigKeysIndex = listConfigKeys.length - 1;

  return (
    <StyledTHead>
      <tr>
        {listConfigKeys.map((key, i) => {
          const { width, header } = (listConfig as ListConfig<Model>)[key as keyof Model];

          if (i === lastConfigKeysIndex) {
            return <StickyTh key={i} onClick={() => onHeaderClick(key)} style={{ minWidth: width }}>{header}</StickyTh>;
          }

          return <th key={i} onClick={() => onHeaderClick(key)} style={{ minWidth: width }}>{header}</th>;
        })}
      </tr>
    </StyledTHead>
  );
}
