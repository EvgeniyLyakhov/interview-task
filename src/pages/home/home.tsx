import { Typography } from "@mui/material";
import { Header } from "../../blocks/header/header";

export function Home() {
  return (
    <div>
      <Header>Home page</Header>
      <Typography>List of cards here</Typography>
      <Typography>
        line 1:title, line 2: image, line 3: desctiption, line 4: owner
      </Typography>
    </div>
  );
}
