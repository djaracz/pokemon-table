import { ListConfig } from '../../../App/component/Table/Table';
import { Pokemon } from '../../model/Pokemon';

export const pokemonListConfig: ListConfig<Pokemon> = {
  name: {
    header: 'Name',
    width: 100,
  },
  category: {
    header: 'Category',
    width: 200,
  },
  type: {
    header: 'Type',
    width: 100,
  },
  weakness: {
    header: 'Weakness',
    width: 200,
  },
  height: {
    header: 'Height',
    width: 100,
  },
  ability: {
    header: 'Ability',
    width: 200,
  },
  evolution: {
    header: 'Evolution',
    width: 200,
  },
};
