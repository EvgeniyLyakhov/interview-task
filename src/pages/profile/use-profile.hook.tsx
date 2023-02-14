import { useParams } from "react-router-dom";
import { cards } from "../../mock-data/cards";

export const useProfile = () => {
  const { id } = useParams();
  return { cards: cards.filter((card) => card.owner.id === id) };
};
