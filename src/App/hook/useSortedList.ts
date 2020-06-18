import { useState } from 'react';

export function useSortedList<Item extends { [key: string]: any }>(list: Item[]): [Item[], (byKey: string) => void] {
  const [sortedList, setSortedList] = useState(list);

  const handleSort = (byKey: string) => {
    const sortedListByKey = [...list.sort(
      (item, itemToCompare) => {
        const value = item[byKey];
        const valueToCompare = itemToCompare[byKey];

        return value.localeCompare(valueToCompare);
      }
    )];

    setSortedList(sortedListByKey);
  };

  return [sortedList, handleSort];
}
