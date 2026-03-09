import { api } from "./axios";


/*export const getCocktailByName = async (name: string) => {
  const respuesta = await api.get(`/search.php?s=${name}`);
  return respuesta.data.drinks ?? [];
};*/

export const getCocktailByID = async (id: string) => {
  const respuesta = await api.get(`/lookup.php?i=${id}`);
  return respuesta.data.drinks?.[0] ?? null;
};

export const getAllCocktails = async () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  const respuestas = await Promise.all(
    alphabet.map((letter) => api.get(`/search.php?f=${letter}`))
  );

  // Combine all results into one single array
  const allCocktails = respuestas.flatMap(
    (respuesta) => respuesta.data.drinks ?? []
  );

  return allCocktails;
};

export const getRanCocktail = async () => {
  const respuesta = await api.get(`/random.php`)
  return respuesta.data.drinks?.[0] ?? null;
};

/*export const SearchByIng = async (ingrediente: string) => {
  const respuesta = await api.get(`/filter.php?i=${ingrediente}`)
  return respuesta.data.drinks?.[0] ?? null;
};*/