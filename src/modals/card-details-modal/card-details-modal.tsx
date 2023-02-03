import { Modal, Box, Typography, Button } from "@mui/material";
import * as React from "react";

interface Props {
  className?: string;
  open: boolean;
  cardId: string;
  onClose: () => void;
}

export function CardDetailsModal(props: Props) {
  const { open, cardId, onClose } = props;
  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Card details for id {cardId}
        </Typography>
        <Button onClick={onClose} variant={"contained"}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
