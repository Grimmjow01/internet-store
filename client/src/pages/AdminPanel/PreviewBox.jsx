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
        <Grid  direction="column">
        <Avatar alt="Remy Sharp" src="/images/folder.jpeg" />
        <div> какой то текст </div>
        </Grid>
      ))}

    </Grid>
  );
};
