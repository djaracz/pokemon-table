import React, { useContext } from 'react';

import { TableContext } from '../Table/Table.context';
import { ListConfig } from '../Table/Table';
import { StyledTd, StickyTd } from './TableRow.style';

type Props<Item> = {
    item: Item;
}

export function TableRow<Model> ({ item }: Props<Model>) {
    const { listConfig } = useContext(TableContext);

    const listConfigKeys = Object.keys(listConfig);
    const lastConfigKeysIndex = listConfigKeys.length - 1;

    return (
        <tr>
            {listConfigKeys.map((configKey, i) => {
                const { width } = (listConfig as ListConfig<Model>)[configKey as keyof Model];
                const cell = (item as Model)[configKey as keyof Model];

                if (i === lastConfigKeysIndex) {
                    return <StickyTd key={i} width={width}>{cell}</StickyTd>
                }

                return <StyledTd key={i}>{cell}</StyledTd>;
            })}
        </tr>
    );
}
