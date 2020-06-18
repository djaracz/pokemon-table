import React, { useContext } from 'react';

import { TableContext } from '../Table/Table.context';
import { ListConfig } from '../Table/Table';

type Props = {
    onHeaderClick: (key: string) => void;
};

export function TableHead<Model> ({ onHeaderClick }: Props) {
  const { listConfig } = useContext(TableContext);

  return (
    <thead>
      <tr>
        {Object.keys(listConfig).map((key, i) => {
          const { width, header } = (listConfig as ListConfig<Model>)[key as keyof Model];

          return <th key={i} onClick={() => onHeaderClick(key)} style={{ minWidth: width }}>{header}</th>;
        })}
      </tr>
    </thead>
  );
}
