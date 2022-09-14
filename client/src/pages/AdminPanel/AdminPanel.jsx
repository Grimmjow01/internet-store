import React, {useState, useCallback} from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, TextField, MenuItem, Select} from "@mui/material";
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
  // let snackbarState = useSelector((store)=> store.snackbarState)
  //  const [img, setImg] = useState(null)
  
  //   const [input, setInput] = useState({
    //     name_product: "",
    //     categoriya: "",
    //     price: "",
    //     img: img?.name || ''
    //   });
//   console.log("AdminPanel ~ input", input)

//   const handleInput = (event) => {
  //       setInput((prev) => ({...prev, [event.target.name] : event.target.value}));
//   } 
// const handlerImg = (e) => {
  //   setImg((prev) => ({...prev, [e.target.name] : e.target.files[0]?.name}));
  //   console.log("handlerImg ~ e.target.files[0]?.name)", e.target.files[0])
  // }
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
  formData.append('categoriya', inputs.categoriya);
  formData.append('price', inputs.price);
  formData.append('rating', 0);
  formData.append('file', inputs.file);
  for (let key of formData.keys()) {
    console.log(`${key}: ${formData.get(key)}`);
  }
  const response = await fetch('http://localhost:3100/adminaddproduct', {
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
  }

};


  return (
    <Box component="span" sx={{ p: 25, border: "1px solid grey",  boxShadow: 20, borderRadius: 2}} className="contactUsBox">
    {/* форма добавления--------------------------------------------------------------------------------- */}
    <h1>Форма добавления</h1>
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

    {/* Categoriya ------------------------------------------------------------------------------------------ */}
      <label id="demo-simple-select-label" >Выберите категорию <span className="red">*</span></label>
    <br/>
      <Select className="menuItem"  value={inputs.categoriya} onChange={inputHandler}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Выберите категорию"
        name="categoriya" 
        >
        
        <MenuItem value={20} >Кухонная мебель</MenuItem>
        <MenuItem value={'Раритет'}>Раритет</MenuItem>
        <MenuItem value={'Спальня'}>Спальня</MenuItem>
        <MenuItem value={'Шкафы'}>Шкафы</MenuItem>
        <MenuItem value={'Офисная'}>Офисная</MenuItem>
        <MenuItem value={30}>Прочее</MenuItem>
      </Select>
      <br/>
      

      {/* <label> Брэнд: <span className="red">*</span></label>
      <br />
      <Select className="menuItem" onChange={handleInput}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Выберите тему"
        name="select_theme" 
        value={input.select_theme}>
        
        <MenuItem value={20} >Фабрика «Ваш Стиль»</MenuItem>
        <MenuItem value={'Раритет'}>Hellen Farben</MenuItem>
        <MenuItem value={'Спальня'}>Sagrande mobili</MenuItem>
        <MenuItem value={'Шкафы'}>Графская кухня</MenuItem>
        <MenuItem value={'Офисная'}>Биомебель</MenuItem>
        <MenuItem value={'Офисная'}>Диодорс</MenuItem>
        <MenuItem value={'Офисная'}>Мебельный комбинат Фома</MenuItem>
        <MenuItem value={'Офисная'}>Фабрика «Аврора»</MenuItem>
        <MenuItem value={'Офисная'}>Второй мебельный комбинат</MenuItem>
        <MenuItem value={30}>Прочее</MenuItem>
      </Select>
      <br /> */}

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

{/* добавление фото ----------------------------- ------------------------------------------------------------- */}
      <PreviewBox fileStore={fileStore}/>
      <label>Добавить фото <span className="red">*</span></label>
      <br />
      <TextField encType="multipart/form-data" method="post" onChange={inputHandler} multiple
        className="menuItem"
        required
        name="multi-files"
        accept='image/*'
        id="file" type="file"/>
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
    {/* <Snackbar message={'Товар добавлен в базу'}/> */}
  </Box>
);
};

export default AdminPanel
