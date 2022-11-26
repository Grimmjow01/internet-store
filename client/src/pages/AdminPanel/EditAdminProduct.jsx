import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addImagesProductAction, deleteImagesOneProductHandler, editProductHandle } from '../../store/products/action';
import { Button, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import "./Adminpanel.css";
import { PreviewBox } from './PreviewBox';
import Snackbar from "../../components/Snackbar/Snackbar";
import { snackBarStatus } from '../../store/snackBar/action.ts';

export const EditAdminProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let snackbarState = useSelector((store)=> store.snackbarState)
  const [fileStore, setFileStore] = useState([]);
  const [imageStore, setImageStore] = useState([]);
 
  const [prod_id, setIdForFile] = useState('');
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
      setIdForFile(data[0].id);
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

const [inputs, setInputs] = useState({});
const inputHandler = (e) => {
  if (e.target.files) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value, file: e.target.files[0]}));
    setImageStore((prev) => [...prev, ...Array.from(e.target.files)])
    } 
   
  };
const submitHandler = async (e) => {
  if(imageStore.length) {
    for (let i = 0; i < imageStore.length; i++) {
      const dataFile = new FormData();
      dataFile.append('product_id', prod_id);
      dataFile.append('file', imageStore[i])
      dataFile.append('filePath', imageStore[i].name)
      const res = await fetch(`http://localhost:3100/loadImg`, {
      method: 'POST',
      body: dataFile,
      });
      const newImage = await res.json();
      dispatch(addImagesProductAction([newImage]))
    }
      dispatch(snackBarStatus(true))
  };
}
      const imageListFunc = () => {
        const pathOneImage = []
        if(productsImages) {
          productsImages.forEach((el) =>  pathOneImage.push('http://localhost:3100/' + el.img))
        }
      return pathOneImage
      }
      const arrayImage = imageListFunc()
  return (
    <div>
        <div>
      <Box sx={{maxWidth: 500, minWidth: 500, marginLeft: 70, marginTop: 1, marginBottom: 1, p: 25, border: "1px solid grey", 
        boxShadow: 20, borderRadius: 10}} 
        justifyContent="center" alignItems="center" 
        className="contactUsBox" >
          <h1> Редактирование товара</h1>
          <label> Название <span className="red">*</span></label> 
        <TextField name="name" className="cardMediaItem" fullWidth value={name} onChange={e => setName(e.target.value)}/> <br />
        <label> Изменилась цена <span className="red">*</span></label>
        <TextField className="cardMediaItem" fullWidth value={price} onChange={e => setPrice(e.target.value)}/><br />

        <label> Тип мебели <span className="red">*</span></label>
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
        
        <label> Брэнд <span className="red">*</span></label>
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
<Box sx={{maxWidth: 500, minWidth: 460, marginBottom: 1, p: 2, border: "1px solid grey", 
        borderRadius: 5}}>
<PreviewBox fileStore={fileStore}/>
           <label className='photoBlock'>  <span className="red"></span></label>
      <br />
      <TextField inputProps={{multiple: true}} encType="multipart/form-data" 
      action="/profile-upload-multiple" method="POST" onChange={inputHandler} 
      type="file" name="file" className="menuItem" required accept='image/*' id="file"/> 
</Box>
          <Button type="button" onClick={() => {dispatch(editProductHandle ({
             id, name,price,description, type_id,brand_id })) ;
        dispatch(snackBarStatus(true));   submitHandler(); 
        }}> Сохранить изменения</Button>
           <br />
      <Button type="button"  onClick={() => navigate(`/`)}> Вернуться к товарам </Button>
      </Box>
      <Snackbar message={'Изменения сохранены'}/>
        </div>

    </div>
  );
}
