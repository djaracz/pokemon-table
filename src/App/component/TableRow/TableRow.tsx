import React, { useContext, useEffect, useState } from 'react';

import { TableContext } from '../Table/Table.context';
import { ListConfig } from '../Table/Table';
import { StyledTd, StickyTd } from './TableRow.style';

type Props<Item> = {
    item: Item;
    waitTimestamp: number;
}

export function TableRow<Model> ({ item, waitTimestamp }: Props<Model>) {
    const [isVisible, setIsVisible] = useState(false);
    const { listConfig, hasStickyColumn, isSorted } = useContext(TableContext);

    useEffect(() => {
        setIsVisible(false);
        if (isSorted) {
            const timer = setTimeout(() => setIsVisible(true), waitTimestamp);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [item]);

    const listConfigKeys = Object.keys(listConfig);
    const lastConfigKeysIndex = listConfigKeys.length - 1;

    return isVisible ? (
        <tr>
            {listConfigKeys.map((configKey, i) => {
                const { width } = (listConfig as ListConfig<Model>)[configKey as keyof Model];
                const cell = (item as Model)[configKey as keyof Model];

                if (hasStickyColumn && i === lastConfigKeysIndex) {
                    return <StickyTd key={i} width={width}>{cell}</StickyTd>
                }

                return <StyledTd key={i}>{cell}</StyledTd>;
            })}
        </tr>
    ) : null;
}
