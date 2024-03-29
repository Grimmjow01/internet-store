import React, {useState, useCallback} from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, TextField, MenuItem, Select, Grid} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./Adminpanel.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Snackbar from "../../components/Snackbar/Snackbar";
import { useDispatch, useSelector } from 'react-redux';
import { snackBarStatus } from '../../store/snackBar/action'

import { PreviewBox } from './PreviewBox';
import { addImageOneProductAction, addImagesProductAction } from "../../store/products/action";


const AdminPanel = () => {
  const dispatch = useDispatch();
  let snackbarState = useSelector((store)=> store.snackbarState)

  
  //  const [img, setImg] = useState(null)
  // const handlerImg = (e) => {
    //     setImg((prev) => ({...prev, [e.target.name] : e.target.files[0]?.name}));
    //     console.log("handlerImg ~ e.target.files[0]?.name)", e.target.files[0])
    //   }
    
const [fileStore, setFileStore] = useState([]);
const [imageStore, setImageStore] = useState([]);

const [inputs, setInputs] = useState({});
const inputHandler = (e) => {
  if (e.target.files) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      file: e.target.files[0],
    }));

    setFileStore((prev) => [...prev, ...Array.from(e.target.files)])

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
  formData.append('categoriya', inputs.categoriya);
  formData.append('types', inputs.types);
  formData.append('brand', inputs.brand);
  formData.append('price', inputs.price);
  formData.append('rating', 0);
  formData.append('description', inputs.description);
  
  const response = await fetch('https://mebel-tochka.herokuapp.com/admin', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  for (let i = 0; i < fileStore.length; i++) {
    const dataFile = new FormData();
    dataFile.append('product_id', data.newProduct.id);
    dataFile.append('file', fileStore[i])
    dataFile.append('filePath', fileStore[i].name)
    const res = await fetch('https://mebel-tochka.herokuapp.com/loadImg', {
    method: 'POST',
    body: dataFile,
    });
    setImageStore(imageStore.push(dataFile))
    dispatch(addImagesProductAction(dataFile))
  }
    dispatch(snackBarStatus(true))
};

  return (
   <>

    <h1 id="add-item-head">Форма добавления товара</h1>
      <div className="column-center">
    <FormControl  className="feedbackForm">

    <label> Название <span className="red">*</span></label>
    <br />

      <TextField onChange={inputHandler} inputProps={{maxLength: 32}} sx={{maxWidth: 500, minWidth: 500}}

        name="name_product"
        value={inputs.name_product || ''}

        required
        id="username"/>
      <br />
      </FormControl>

      {/* Types ------------------------------------------------------------------------------------------ */}
      
      <FormControl className="feedbackForm">
      <label> Выберите тип: <span className="red">*</span></label>
      <br />
      <Select onChange={inputHandler} sx={{maxWidth: 500, minWidth: 500}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Выберите тип"
        name="types" 
        value={inputs.types || ''}>
        
        <MenuItem value={'Мебель для спальни'} >Мебель для спальни</MenuItem>
        <MenuItem value={'Мягкая мебель'}>Мягкая мебель</MenuItem>
        <MenuItem value={'Мебель для кухни'}>Мебель для кухни</MenuItem>
        <MenuItem value={'Мебель для бизнеса'}>Мебель для бизнеса</MenuItem>
        <MenuItem value={'Мебель для гостиной'}>Мебель для гостиной</MenuItem>
        <MenuItem value={'Мебель для детской'}>Мебель для детской</MenuItem>
        <MenuItem value={'Столы и стулья'}>Столы и стулья</MenuItem>
        <MenuItem value={'Спецзаказы'}>Спецзаказы</MenuItem>
      </Select>
      <br />

      </FormControl>
          {/* Brand ------------------------------------------------------------------------------------------ */}
          <FormControl className="feedbackForm">
      <label> Выберите брэнд: <span className="red">*</span></label>
      <br />
      <Select onChange={inputHandler} 
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Выберите брэнд"
        name="brand" 
        value={inputs.brand || ''}>
        
        <MenuItem value={'IKEA'} >IKEA</MenuItem>
        <MenuItem value={'Мебель-Стиль'}>Мебель-Стиль</MenuItem>
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
        value={inputs.price || ''}
        
        required
        id="username"/>
      <br />
      <br />
      <br />
      <br />
       <Button variant="contained" style={{ width: 170 }} endIcon={<SendIcon />}
      //  onClick={() => {dispatch(addProductDatabase({input}))}}
      onClick={submitHandler}
      >
        Добавить
      </Button>
      </FormControl>
      
      <FormControl>
      <br />
{/* добавление фото ----------------------------- ------------------------------------------------------------- */}
      <PreviewBox fileStore={fileStore}/>
      <label>Добавить фото <span className="red">*</span></label>
      <br />
      <TextField inputProps={{multiple: true}} encType="multipart/form-data" 
      action="/profile-upload-multiple" 
      method="POST" onChange={inputHandler} type="file" name="file"
        required 
        accept='image/*'
        id="file"/> 
        <FormControl fullWidth>
      
   {/* Description product------------------------------------------------------------------------------------------ */}
      </FormControl>
        <br />
        <label>Описание товара <span className="red">*</span></label>
      <br />
      <TextareaAutosize className="textArea" onChange={inputHandler}
      name="description"
      value={inputs.description}
      aria-label="minimum height"
      minRows={6}
      placeholder="Описание товара"
      style={{ width: 495 }}
      />
      <br/>

      {/* Button add product------------------------------------------------------------------------------------------ */}
     
    </FormControl>
    </div>
    <Snackbar message={'Товар добавлен в базу'}/>

    </>
);
};

export default AdminPanel
