"use client";
import { useParams, useRouter } from "next/navigation";
import { Cocktail } from "@/types";
import { useState, useEffect } from "react";
import "./page.css";
import { getCocktailByID } from "@/lib/api/cocktail";

const UnCocktail = () => {
  const router = useRouter();
  const { name } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);
  const [miError, setError] = useState("");

  useEffect(() => {
    getCocktailByID(String(name))
      .then((res) => {
        setCocktail(res);
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  //usamos esto para multivaluados:
  /*const idiomas = pais?.languages ? Object.values(pais.languages) : [];
  const monedas = pais?.currencies
    ? Object.values(pais.currencies).map((c) => c.name)
    : [];*/

  //creamos un array, removiendo nulls
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

  return (
    <div className="containerDetalle">
      {loading && <h1>Loading...</h1>}
      {miError && <h2>{miError}</h2>}

      {cocktail && (
        <>
          <h1>{cocktail.strDrink}</h1>
          <img
            src={cocktail.strDrinkThumb}
            alt={`Img de ${cocktail.strDrink}`}
          />
          <div className="infoCard">
            <p>Category: {cocktail.strCategory}</p>
            <p>Type: {cocktail.strAlcoholic}</p>
            <p>Instructions: {cocktail.strInstructions}</p>
            <p>Glass: {cocktail.strGlass}</p>

            <p>Ingredientes:</p>
            <ul>
              {ingredientes.map((ing, index) => (
                <li key={index}>
                  {medidas[index]} {ing}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <button className="botonVolver" onClick={() => router.push("/")}>
        Volver
      </button>
    </div>
  );
};

export default UnCocktail;
