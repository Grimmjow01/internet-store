import React from 'react';
import { Box, Card } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SegmentIcon from '@mui/icons-material/Segment';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <Box flex={1} p={3} bgcolor="lightgrey">
      <Card>
        <List
          // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Search...
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="На главную" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Корзина" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <SegmentIcon />
            </ListItemIcon>
            <ListItemText primary="Категории" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>                      
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon >
                <ListItemText primary="Кухонные гарнитуры" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Шкафы" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Спальни" />
              </ListItemButton >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Мебель для бизнеса" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Офисная мебель" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Раритетная мебель" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary="Спецзаказы" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        
        
      </Card>
    </Box>
  );
}

export default Sidebar;
