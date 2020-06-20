import React, { FC, useContext } from 'react';

import { TableContext } from '../Table/Table.context';
import { TableRow } from '../TableRow/TableRow';

export const TableBody: FC = () => {
    const { list } = useContext(TableContext);

    return (
        <tbody>
            {list.map((listItem, i) => <TableRow key={i} item={listItem} waitTimestamp={i * 100} />)}
        </tbody>
    );
};
