import { Cocktail } from "@/types";
import { CocktailCajita } from "./cocktailInfo";

export const CocktailList = ({ cocktails }: { cocktails: Cocktail[] }) => {
  return (
    <>
      {cocktails && cocktails.length > 0 ? (
        <div className="cocktailsContainer">
          {cocktails.map((cocktail) => (
            <CocktailCajita key={cocktail.strDrink} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <h2>No hay cocktails disponibles</h2>
      )}
    </>
  );
};