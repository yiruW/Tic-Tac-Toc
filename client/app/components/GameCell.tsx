import React from "react";
import { Button, styled } from "@mui/material";

const PreviewButton = styled(Button)<{ preview: string }>(({ preview }) => ({
  width: "100px",
  height: "100px",
  fontSize: "80px",
  "&:hover": {
    "&::after": {
      content: `'${preview}'`,
      opacity: 0.5,
      fontSize: "80px",
    },
  },
}));

export default function Snakebar({
  value,
  preview,
  onClick,
}: {
  value: string;
  preview: string;
  onClick: () => void;
}) {
  return (
    <PreviewButton variant="outlined" onClick={onClick} preview={preview}>
      {value}
    </PreviewButton>
  );
}
