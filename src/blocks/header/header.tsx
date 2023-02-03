import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export function Header({ children }: Props) {
  return (
    <Typography variant='h4' sx={{ mb: 4 }}>
      {children}
    </Typography>
  );
}
