import { useParams } from "react-router-dom";
import { cards } from "../../mock-data/cards";

export const useCardDetails = () => {
  const { id } = useParams();
  const card = cards.find((card) => card.id === id);
  return { card };
};
