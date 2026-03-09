"use client";

import { Cocktail } from "@/types";
import "./cocktailInfo.css";
import { useRouter } from "next/navigation";

export const CocktailCajita = ({ cocktail }: { cocktail: Cocktail }) => {
  const router = useRouter();

  return (
    <div className={"cajita"}>
      <img
        src={cocktail.strDrinkThumb}
        alt={`Imagen de ${cocktail.strDrink}`}
        className={"cocktailImg"}
      />
      <h2 className={"NomCocktail"}>{cocktail.strDrink}</h2>
      <button
        className={"button"}
        onClick={() =>
          router.push(`/cocktail/${encodeURIComponent(cocktail.idDrink)}`)
        }
      >
        Ver cocktail
      </button>
    </div>
  );
};
