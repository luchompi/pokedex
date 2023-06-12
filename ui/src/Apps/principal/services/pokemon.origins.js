import pokeApi from "../../../apis/poke.api";
export const getTreePokemons = async (id) => {
    try {
        
        const response = await pokeApi.get(`pokemon/${id}`);
        return response.data;
    }
    catch (error) {
        return error.response.data
        
    } 
}