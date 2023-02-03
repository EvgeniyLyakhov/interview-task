import { Typography } from "@mui/material";
import { Header } from "../../blocks/header/header";

export function List() {
  return (
    <div>
      <Header>List of cards</Header>
      <Typography>List of cards here</Typography>
      <Typography>
        line 1: title + status, line 2:image, line 3: desctiption,
      </Typography>
    </div>
  );
}
