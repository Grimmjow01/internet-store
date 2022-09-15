import React, {useState, useCallback} from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, TextField, MenuItem, Select, Grid} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./Adminpanel.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Snackbar from "../../components/Snackbar/Snackbar";
import { useDispatch, useSelector } from 'react-redux';
import { snackBarStatus } from '../../store/snackBar/action'
import { addProductDatabase } from '../../store/products/action'
import { PreviewBox } from './PreviewBox';

const AdminPanel = () => {
  const dispatch = useDispatch();
  let snackbarState = useSelector((store)=> store.snackbarState)

  const [fileStore, setFileStore] = useState([]);

const [inputs, setInputs] = useState({});
const inputHandler = (e) => {
  if (e.target.files) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      file: e.target.files[0],
    }));
    setFileStore((prev) => [...prev, e.target.files[0]])
    console.log(fileStore);
  } else {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
};

const submitHandler = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('name_product', inputs.name_product);
  formData.append('types', inputs.types);
  formData.append('brand', inputs.brand);
  formData.append('price', inputs.price);
  formData.append('rating', 0);
  formData.append('file', inputs.file);
  formData.append('description', inputs.description);
  const response = await fetch('http://localhost:3100/admin', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();

  if (response.status === 400) {
    return alert('Ошибка добавления продукта');
  } else if (response.status === 200) {

for (let i = 0; i < fileStore.length; i++) {
  
  const dataFile = new FormData();
  dataFile.append('file', fileStore[i]);
  dataFile.append('product_id', data.newProduct.id);
    const res = await fetch('http://localhost:3100/loadImg', {
    method: 'POST',
    body: dataFile,
  });
  }
    dispatch(addProductDatabase(data));
    dispatch(snackBarStatus(true))
  }
};
const addFoto = () => {

}
  return (
    <Grid
    container
    direction="column"
    justifyContent="space-evenly"
    alignItems="center"
   component="span" sx={{ p: 25, border: "1px solid grey",  boxShadow: 20, borderRadius: 2}} className="contactUsBox">
   
   {/* форма добавления--------------------------------------------------------------------------------- */}
    <h1>Форма добавления товара</h1>
      <div className="column-center">
    <FormControl className="feedbackForm">

    <label> Название <span className="red">*</span></label>
    <br />
      <TextField onChange={inputHandler} inputProps={{maxLength: 12}} 
        name="name_product"
        value={inputs.name_product}
        className="menuItem"
        required
        id="username"/>
      <br />
      </FormControl>

      {/* Types ------------------------------------------------------------------------------------------ */}
      <FormControl className="feedbackForm">
      <label id="demo-simple-select-label" >Выберите тип <span className="red">*</span></label>
    <br/>
      <Select className="menuItem"  value={inputs.types} onChange={inputHandler}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Выберите тип"
        name="types" 
        >
        
        <MenuItem value={'Мебель для спальни'} >Мебель для спальни</MenuItem>
        <MenuItem value={'Мягкая мебель'}>Мягкая мебель</MenuItem>
        <MenuItem value={'Мебель для кухни'}>Мебель для кухни</MenuItem>
        <MenuItem value={'Мебель для бизнеса'}>Мебель для бизнеса</MenuItem>
        <MenuItem value={'Мебель для гостиной'}>Мебель для гостиной</MenuItem>
        <MenuItem value={'Мебель для детской'}>Мебель для детской</MenuItem>
        <MenuItem value={'Столы и стулья'}>Столы и стулья</MenuItem>
        <MenuItem value={'Спецзаказы'}>Спецзаказы</MenuItem>
      </Select>
      <br/>
      </FormControl>
          {/* Brand ------------------------------------------------------------------------------------------ */}
          <FormControl className="feedbackForm">
      <label> Выберите брэнд: <span className="red">*</span></label>
      <br />
      <Select className="menuItem" onChange={inputHandler}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Выберите брэнд"
        name="brand" 
        value={inputs.brand}>
        
        <MenuItem value={'IKEA'} >IKEA</MenuItem>
        <MenuItem value={'Мебель-стиль'}>Мебель-стиль</MenuItem>
        <MenuItem value={'Williams-Sonoma'}>Williams-Sonoma</MenuItem>
        <MenuItem value={'Король диванов'}>Король диванов</MenuItem>
        <MenuItem value={'Аскона'}>Аскона</MenuItem>
        <MenuItem value={'Русскуя мебельная компания'}>Русскуя мебельная компания</MenuItem>
        <MenuItem value={'Орма Мебель'}>Орма Мебель</MenuItem>
      </Select>
      <br />

    {/* price ------------------------------------------------------------------------------------------ */}
<label> Цена <span className="red">*</span></label>
    <br />
      <TextField onChange={inputHandler} inputProps={{maxLength: 12}} 
        name="price"
        value={inputs.price}
        className="menuItem"
        required
        id="username"/>
      <br />
      </FormControl>
      <FormControl>
      <br />
{/* добавление фото ----------------------------- ------------------------------------------------------------- */}
      <PreviewBox fileStore={fileStore}/>
      <label>Добавить фото <span className="red">*</span></label>
      <br />
      <TextField inputProps={{multiple: true}} encType="multipart/form-data" action="/profile-upload-multiple" method="POST" onChange={inputHandler} type="file" name="file"
        className="menuItem"
        required 
        accept='image/*'
        id="file"/> 
    
        <Snackbar message={'Фото закреплено'}/>
      
        <FormControl fullWidth>
      
   {/* Description product------------------------------------------------------------------------------------------ */}
      </FormControl>
        <br />
      <br />
      <TextareaAutosize className="textArea" onChange={inputHandler}
      name="description"
      value={inputs.description}
      aria-label="minimum height"
      minRows={7}
      placeholder="Описание товара"
      style={{ width: 495 }}
      />
      <br/>

      {/* Button add product------------------------------------------------------------------------------------------ */}
      <Button variant="contained" style={{ width: 170 }} endIcon={<SendIcon />}
      //  onClick={() => {dispatch(addProductDatabase({input}))}}
      onClick={submitHandler}
      >
        Добавить
      </Button>
    </FormControl>
    </div>
    <Snackbar message={'Товар добавлен в базу'}/>
  </Grid>
);
};

export default AdminPanel
