import React, {useState} from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, TextField, MenuItem, Select, InputLabel, Stack} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./ContactInfo.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from 'axios';
import Snackbar from "../../components/Snackbar/Snackbar";
import { useDispatch, useSelector } from 'react-redux';
import { snackBarStatus } from "../../store/snackBar/action.ts";


const ContactInfo = () => {

  const dispatch = useDispatch();

  let snackbarState = useSelector((store)=> store.snackbarState)

  const [theme, setTheme] = useState("");

  const handleChange = (event) => {
    setTheme(event.target.value);
  };



  const [input, setInput] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    select_theme: "",
    body_question: ""
  });


  const handleInput = (event) => {
    setInput((prev) => ({...prev, [event.target.name] : event.target.value}));
  } 

  const sendEmail = async () => {
    const response = await axios.post('http://localhost:3100/contacts/sendemail',
       {contactinfo : input}     
    )
    dispatch(snackBarStatus(true))
  }

  return (
    <>
    <Stack direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={10}
                >
    <Box component="span"  className="contactUsBox">
    
      <div className="column-center1">
      <h1>Обратная связь:</h1>
      <FormControl className="feedbackForm">
      <label>Ваше имя: <span className="red">*</span></label>
      <br />
        <TextField onChange={handleInput} inputProps={{maxLength: 12}} 
        style={{ width: 493 }}
          name="customer_name"
          value={input.customer_name}
          className="menuItem"
          required
          id="username"/>
        <br />
        <label>Ваш телефон: <span className="red">*</span></label>
        <br />
        <TextField onChange={handleInput} inputProps={{maxLength: 12}} 
        style={{ width: 493 }}
        name="customer_phone"
        value={input.customer_phone}
          className="menuItem"
          required
          id="phone"/>
        <br />
        <label>Ваш email: <span className="red">*</span></label>
        <br />
        <TextField onChange={handleInput}
        style={{ width: 493 }}
        name="customer_email"
        value={input.customer_email}
          className="menuItem"
          required
          id="Email" type="email"/>
        <br />
        <label>Тема сообщения: <span className="red">*</span></label>
        <br />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">-- Выберите тему</InputLabel>

        <Select className="menuItem" onChange={handleInput}
           style={{ width: 500 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Выберите тему"
          name="select_theme" 
          value={input.select_theme}>
          
          <MenuItem value={'Директору'} >Директору</MenuItem>
          <MenuItem value={'Мэнеджеру'}>Мэнеджеру</MenuItem>
          <MenuItem value={'Сотрудничество'}>Сотрудничество</MenuItem>
          <MenuItem value={'Прочее'}>Прочее</MenuItem>
        </Select>
        </FormControl>
    
        <br />
        <label>
          Сообщение (вопрос): <span className="red"></span>
        </label>
        <br />
        <TextareaAutosize className="textArea" onChange={handleInput}
        name="body_question"
        value={input.theme_of_question}
          aria-label="minimum height"
          minRows={7}
          placeholder="... Ваш вопрос здесь"
          style={{ width: 495 }}
        />
        <br />
        <label>Нажимая на кнопку "Отправить" Вы подтверждаете, что ознакомлены и согласны с 
          <a  href="" target="_blank" className="policy" id="privacylink"> политикой конфиденциальности</a> данного сайта.</label><br />
        <Button variant="contained" style={{ width: 170 }} endIcon={<SendIcon />} onClick={sendEmail}>
          Отправить
        </Button>
      </FormControl>
      </div>
      <Snackbar message={'Email отправлен!'}/>
    </Box>
    <Box className="mapYandex">
    <h1>Контакты:</h1>
      <p>
        <span className="contHead">ул. Сыганак, 14/1, Астана, Казахстан</span>
      </p>
      <div>
        +7 (902) 300-30-30
        <br />
        <br />
        +7 (831) 230-00-00
        <br />
        <br /> +7 (831) 4-244-243
        <br />
        <br /> E-mail: onlinemebel@mail.ru
      </div>
      <span>
        По вопросам качества продукции обращайтесь по телефону: <br />
        <span>+7 (910) 884-31-97</span>
        <br />
        <br />
      </span>
    <h1>Где нас найти:</h1>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a4db5d8312b144d91ad48897075a8fdef4c45fff83b8dce5dfab862e805528a&amp;source=constructor" width="500" height="442" frameborder="0"></iframe>
    </Box>
    </Stack>
   </>
  );
};

export default ContactInfo;
