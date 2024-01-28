import { Box, Typography, Rating } from "@mui/material";
import React from "react";
interface PropsType {
  rating: number | null;
}

const Ratings = ({ rating }: PropsType) => {
  const [value, setValue] = React.useState<number | null>(rating);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default Ratings;
