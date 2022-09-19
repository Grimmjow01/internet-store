import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addImagesProductAction, deleteImagesOneProductHandler, editProductHandle } from '../../store/products/action';
import { Button, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import "./Adminpanel.css";
import { PreviewBox } from './PreviewBox';
import Snackbar from "../../components/Snackbar/Snackbar";
import { snackBarStatus } from '../../store/snackBar/action';

export const EditAdminProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let snackbarState = useSelector((store)=> store.snackbarState)
  const [fileStore, setFileStore] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [type_id, setType] = useState('');
  const [brand_id, setBrand] = useState('');
  const [image_id, setImage_id] = useState('');
  const [arrayImages, setArrayImages] = useState('');
         
  const productsImages = useSelector((store) => store.products.productImages);
 
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3100/api/products/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      setName(data[0].name);
      setPrice(data[0].price);
      setDescription(data[0].description);
      setType(data[0].type_id);
      setBrand(data[0].brand_id);
      setFileStore(data[1].map((el) => (el.img))); 
      const [, arrayImages] = data
      setImage_id(arrayImages)
      const result = await fetch(`http://localhost:3100/loadimageforoneproduct/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const allImagesOneProduct = await result.json();
      setArrayImages(allImagesOneProduct)
      dispatch(addImagesProductAction(allImagesOneProduct))
     })()
    }, []);

  const imageListFunc = () => {
  const pathOneImage = []
  if(productsImages) {
    productsImages.forEach((el) =>  pathOneImage.push('http://localhost:3100/' + el.img))
  }
return pathOneImage
}
const arrayImage = imageListFunc()

const [inputs, setInputs] = useState({});

const inputHandler = (e) => {
  setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))};

  return (
    <div>
        <div>
      <Box sx={{maxWidth: 500, minWidth: 500, marginLeft: 70, marginTop: 1, marginBottom: 1, p: 25, border: "1px solid grey", 
        boxShadow: 20, borderRadius: 2}} 
        justifyContent="center" alignItems="center" 
        className="contactUsBox" >
          <h1> Редактирование товара</h1>
          <label> Название <span className="red">*</span></label> 
        <TextField name="name" className="cardMediaItem" fullWidth value={name} onChange={e => setName(e.target.value)}/> <br />
        <label> Изменилась цена <span className="red">*</span></label>
        <TextField className="cardMediaItem" fullWidth value={price} onChange={e => setPrice(e.target.value)}/><br />

        <label> Type <span className="red">*</span></label>
        <Select onChange={e => setType(e.target.value)} value={type_id} sx={{maxWidth: 500, minWidth: 500}}>
        <MenuItem value={1} >Мебель для спальни</MenuItem>
        <MenuItem value={2}>Мягкая мебель</MenuItem>
        <MenuItem value={3}>Мебель для кухни</MenuItem>
        <MenuItem value={4}>Мебель для бизнеса</MenuItem>
        <MenuItem value={5}>Мебель для гостиной</MenuItem>
        <MenuItem value={6}>Мебель для детской</MenuItem>
        <MenuItem value={7}>Столы и стулья</MenuItem>
        <MenuItem value={8}>Спецзаказы</MenuItem>
        </Select><br />
        
        <label> Brand <span className="red">*</span></label>
        <Select onChange={e => setBrand(e.target.value)} value={brand_id} sx={{maxWidth: 500, minWidth: 500}}>
        <MenuItem value={1}>Мебель-Стиль</MenuItem>
        <MenuItem value={2}>Williams-Sonoma</MenuItem>
        <MenuItem value={3}>Король диванов</MenuItem>
        <MenuItem value={4}>Аскона</MenuItem>
        <MenuItem value={5}>Русскуя мебельная компания</MenuItem>
        <MenuItem value={6}>Орма Мебель</MenuItem>
        </Select><br />
        <label> Изменить описание <span className="red">*</span></label>
        <Box sx={{maxWidth: 500, minWidth: 500}}>
          <TextareaAutosize margin="dense" style={{ height: 238, width: 494 }} className="cardMediaItem" fullWidth  value={description || ''} onChange={e => setDescription(e.target.value)}/>
        </Box>
          { <div className='container'>
          {productsImages?.map((el) => <> {/* key={image_id} */} <img src={(`http://localhost:3100` + el.img)} alt="..."/> 
           <button className="btn" onClick={(e) =>  dispatch(deleteImagesOneProductHandler(el.id))}>Удалить</button></>) }
        </div> }
        <br />

{/* добавление фото ----------------------------- ------------------------------------------------------------- */}
<Box>
<PreviewBox fileStore={fileStore}/>
      <label>Добавить фото <span className="red">*</span></label>
      <br />
      <TextField inputProps={{multiple: true}} encType="multipart/form-data" action="/profile-upload-multiple" method="POST"
       onChange={inputHandler} type="file" name="file"
        className="menuItem"
        required 
        accept='image/*'
        id="file"/> 
</Box>
          <Button type="button" onClick={() => {dispatch(editProductHandle ({ id, name,price,description,type_id,brand_id })) ; 
        dispatch(snackBarStatus(true))
        }}> Сохранить изменения</Button>
           
      </Box>
      <Snackbar message={'Изменения сохранены'}/>
        </div>

    </div>
  );
}
