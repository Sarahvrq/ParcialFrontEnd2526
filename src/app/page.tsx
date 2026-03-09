"use client";

import { useEffect, useState } from "react";
import "./style.css";
import "./page.css";
import { Cocktail } from "@/types";
import { getAllCocktails, getRanCocktail } from "@/lib/api/cocktail";
import { CocktailList } from "@/components/cocktails/cocktailList";

const Main = () => {
  const [searchFiltro, setSearchFiltro] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    getAllCocktails()
      .then((res) => {
        const sorted = res.sort((a: Cocktail, b: Cocktail) =>
          a.strDrink.localeCompare(b.strDrink),
        );
        setCocktails(sorted);
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //para ser igual, copiamos lo mismo que tenemos para la cajita:
  const ingredientes = [
    cocktail?.strIngredient1,
    cocktail?.strIngredient2,
    cocktail?.strIngredient3,
    cocktail?.strIngredient4,
    cocktail?.strIngredient5,
  ].filter(Boolean);

  const medidas = [
    cocktail?.strMeasure1,
    cocktail?.strMeasure2,
    cocktail?.strMeasure3,
    cocktail?.strMeasure4,
    cocktail?.strMeasure5,
  ].filter(Boolean);

  //filtrado
  const filtrados = cocktails.filter((c) =>
    c.strDrink.toLowerCase().includes(searchFiltro.toLowerCase()),
  );

  /*filtrado por ingrediente NOT DONE, IDK IF IT WORKS
  const combinados = cocktails.filter((c) => {
    const matchNombre = c.strDrink
      .toLowerCase()
      .includes(searchFiltro.toLowerCase());
    const matchIngrediente =
      c.strIngredient1?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient2?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient3?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient4?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient5?.toLowerCase().includes(searchFiltroIng.toLowerCase());

    return matchNombre || matchIngrediente;
  });*/

  //randomizer
  const handleRandomClick = async () => {
    const result = await getRanCocktail();
    setCocktail(result);
    setLoading(false);
  };

  return (
    <div className="mainContainer">
      <h1 className="tituloPrincipal">Encuentra tu Cocktail</h1>
      <h2 className="subtitulo">By Sarah Rojas</h2>

      <input
        className="CajitaFiltro"
        type="text"
        placeholder="Buscar cocktail..."
        value={searchFiltro}
        onChange={(e) => setSearchFiltro(e.target.value)}
      />

      <CocktailList cocktails={filtrados.slice(0, visibleCount)} />

      {visibleCount < filtrados.length && !loading && (
        <button
          className="botonCargarMas"
          onClick={() => setVisibleCount((prev) => prev + 12)}
        >
          Cargar más
        </button>
      )}

      <div>
        <button
          className="BotonRandom"
          onClick={handleRandomClick}
          disabled={loading}
        >
          {loading ? "Loading..." : "Dime algo bonito"}
        </button>
        {cocktail && (
          <div className="infoCardRandom">
            <h2>{cocktail.strDrink}</h2>
            <img
              src={cocktail.strDrinkThumb}
              alt={`Img de ${cocktail.strDrink}`}
            />
            <p>Category: {cocktail.strCategory}</p>
            <p>Type: {cocktail.strAlcoholic}</p>
            <p>Instructions: {cocktail.strInstructions}</p>
            <p>Glass: {cocktail.strGlass}</p>

            <p>Ingredientes:</p>
            <ul>
              {ingredientes.map((ing, index) => ( //hacemos esto para poder usar los valores de medida para la lista de ingredientes
                <li key={index}>
                  {medidas[index]} {ing}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default Main;
