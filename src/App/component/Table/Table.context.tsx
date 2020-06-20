import React from 'react';

import { ContextValue } from './Table';

export const TableContext = React.createContext<ContextValue<{}>>({
    list: [],
    listConfig: {},
    hasStickyColumn: false,
});
