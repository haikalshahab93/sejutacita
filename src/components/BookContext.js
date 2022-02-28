import React, { createContext } from 'react';
// import { usePokemonReducer } from './usePokemonReducer';
// import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions';

const BookContext = createContext();

const BookProvider = (props) => {
//   const [state, dispatch] = usePokemonReducer();
//   const { pokemons, capturedPokemons } = state;

//   const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
//   const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
//   const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
//   const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });

  const providerValue = {
    // pokemons,
    // capturedPokemons,
    // capture,
    // release,
    // addPokemon,
    // addPokemons,
  };

  return (
    <BookContext.Provider value={providerValue}>
      {props.children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
