require('dotenv').config();
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const dbConnectCheck = require('../db/dbConnectionCheck')
const productListRoutes = require('./routes/productListRoutes');
const adminAddProduct = require('./routes/adminAddProductRouter');
const loadImg = require('./routes/loadImgRouter');
const app = express();
// socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"]
  }
} );
//socket.io

const contactsRouter = require("./routes/contactsRoute")

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

const sessionConfig = {
  name: 'NameCookie',
  store: new FileStore(),
  secret: process.env.SESSION_S ?? 'otherkey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

const corsOptions = {
  credentials: true, 
  origin: 'http://localhost:3000' 
}
app.use(cors(corsOptions));

app.use('/api/products', productListRoutes);
app.use('/contacts', contactsRouter)
app.use('/admin', adminAddProduct)
app.use('/loadImg', loadImg)

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
 
  socket.on("join_room"), (data) => {
    socket.join(data);
    console.log(`User with id: ${socket.id} joined room ${data}`)
  }

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
  })
});

app.use((req, res, next) => {
  console.log(req.session);
  next();
})

server.listen(3001, () =>{
  console.log("chat is up")
})

app.listen(PORT, async () => {
  try {
    await dbConnectCheck();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Ошибка слушателя порта');
  }
  console.log(`Серв еще не отломился на ${PORT} порту!`);
});


