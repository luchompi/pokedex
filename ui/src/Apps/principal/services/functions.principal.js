import pokeApi from "../../../apis/poke.api";
export const fetchPokemon = async (id) => {
    return await pokeApi.get(`pokemon/${id}`);
}
