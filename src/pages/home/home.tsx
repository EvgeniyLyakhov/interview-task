import { Header } from "../../layouts/header/header";
import { useHome } from "./use-home.hook";

export function Home() {
  const { cards } = useHome();

  if (cards.length === 0) return <Header>No cards</Header>;

  return (
    <div>
      <Header>Home page</Header>
    </div>
  );
}
