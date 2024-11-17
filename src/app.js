const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { engine } = require("express-handlebars");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

// importando rutas

const clientesRoutes = require('./routes/clientes');
const { ExpressHandlebars } = require('express-handlebars');
//const usuariosRoutes = require('./routes/usuario');


// settings
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(__dirname + "public"))

//middlewares
app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'paginasweb;'
},'single'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
//Permitir los datos que viene del formulario
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
//routes
app.use('/',clientesRoutes);
//app.use('/',usuariosRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () =>{
    console.log('Server on port 3000');
});
