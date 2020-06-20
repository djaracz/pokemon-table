import React from 'react';

import { ContextValue } from './Table';

export const TableContext = React.createContext<ContextValue<{}>>({
    width: 0,
    list: [],
    listConfig: {},
});
