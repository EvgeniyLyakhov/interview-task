import { Typography } from "@mui/material";
import { useCardDetails } from "./use-card-details.hook";

export function CardDetails() {
  const { card } = useCardDetails();
  if (!card) return <Typography variant='h3'>Card not found</Typography>;

  return (
    <div>
      <Typography variant='h3'>Single card</Typography>
    </div>
  );
}
