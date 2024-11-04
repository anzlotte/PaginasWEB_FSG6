const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importando rutas

const clientesRoutes = require('./routes/clientes');
//const usuariosRoutes = require('./routes/usuario');


// settings
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'paginasweb;'
},'single'));

//Permitir los datos que viene del formulario
app.use(express.urlencoded({extended:false}));

//routes
app.use('/',clientesRoutes);
//app.use('/',usuariosRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () =>{
    console.log('Server on port 3000');
});
