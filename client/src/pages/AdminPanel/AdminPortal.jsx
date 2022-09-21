import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Stack, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sidebar from '../../components/Sidebar/Sidebar';
import AdminPanel from './AdminPanel'
import './Adminpanel.css'
import ProductsList from '../../components/ProductsSection/ProductsList';
import { allRatingThunk, getAllProduct } from '../../store/products/action';
import { useDispatch } from 'react-redux';

function TabPanel(props) { const { children, value, index, ...other } = props;

const dispatch = useDispatch();

React.useEffect(() => {
  ( async () => {
    const res = await fetch('http://localhost:3100/api/products', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const products = await res.json();
    dispatch(getAllProduct(products))
  })();

  dispatch(allRatingThunk());
  
}, [dispatch]);

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
        
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let setAuth = true;

  return (
    <>
    <div className='adminPanel-layout'>
    <Sidebar />
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Редактирование товаров" {...a11yProps(0)} />
          <Tab label="Добавление товаров" {...a11yProps(1)} />
   {/*        <Tab label="Онлайн расчет" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     <ProductsList setAuth={setAuth}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AdminPanel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </div>
    </>
  );
}
