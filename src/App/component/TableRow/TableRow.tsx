import React, { useContext } from 'react';

import { TableContext } from '../Table/Table.context';

type Props<Item> = {
    item: Item;
}

export function TableRow<Model> ({ item }: Props<Model>) {
    const { listConfig } = useContext(TableContext);

    return (
        <tr>
            {Object.keys(listConfig).map((configKey, i) => {
                const cell = (item as Model)[configKey as keyof Model];

                return <td key={i}>{cell}</td>;
            })}
        </tr>
    );
}
