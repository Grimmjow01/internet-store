import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function BasicRatingReadOnly({item}) {
  // const [value, setValue] = useState(item.rating);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={item.rating} readOnly />
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}
