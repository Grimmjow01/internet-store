import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center" margin="0 0 16px">
        <Button variant="outlined" color="secondary" size="small" onClick={() => setCount(count - 1)}><RemoveIcon fontSize="small" /></Button>
        <h3>{count}</h3>
        <Button variant="outlined" color="secondary" size="small" onClick={() => setCount(count + 1)}><AddIcon fontSize="small" /></Button>
      </Stack>
    </Box>
  )
};

export default Counter;