import { create } from "zustand";

export const pokemonStore = create((set) => ({
  pokeballs: 0,
  pokemon: [],
  storePokemon: (newPokemon) =>
    set((state) => ({ pokemon: [...state.pokemon, newPokemon], pokeballs: state.pokeballs + 1 })),
  releasePokemon: (index) =>
    set((state) => ({ pokemon: state.pokemon.filter((_, i) => i !== index), pokeballs: state.pokeballs - 1 })),
}));
