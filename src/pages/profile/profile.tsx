import { Header } from "../../layouts/header/header";
import { useProfile } from "./use-profile.hook";

export function Profile() {
  const { cards } = useProfile();
  if (cards.length === 0)
    return <Header>No cards for specified Profile</Header>;
  return (
    <div>
      <Header>Profile cards</Header>
    </div>
  );
}
