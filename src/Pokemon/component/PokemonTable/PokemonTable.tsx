import React, { FC } from 'react';

import { Table } from '../../../App/component/Table/Table';
import { Pokemon } from '../../model/Pokemon';
import { pokemons } from './PokemonTable.mock';
import { pokemonListConfig } from './PokemonTable.config';

export const PokemonTable: FC = () => (
  <Table<Pokemon>
      list={pokemons}
      listConfig={pokemonListConfig}
  />
);
