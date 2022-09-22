import React from "react";
import { Grid, Avatar, InputLabel } from "@mui/material";

export const PreviewBox = ({ fileStore }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {fileStore.map((file) => 
      (
        <Grid key={fileStore[0].id} direction="column">
       
        </Grid>
      ))}

    </Grid>
  );
};
