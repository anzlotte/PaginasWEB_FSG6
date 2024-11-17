const bcrypt = require('bcrypt');
const controller = {};

/** Pasar paginas */

controller.home = (req,res)=>{
    res.render('clientes',{
    });
};
controller.login = (req,res)=>{
    res.render('administrador/inicioSesion',{
    });
};
controller.admon = (req,res)=>{
    res.render('administrador/admonUsuarios',{
    });
};

controller.home = (req,res)=>{
    res.render('clientes',{
    });
};
controller.login = (req,res)=>{
    res.render('administrador/inicioSesion',{
    });
};
controller.admon = (req,res)=>{
    res.render('administrador/admonUsuarios',{
    });
};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM clientes',(err,clientes)=>{
            if(err){
                res.json(err);
/** Cerrar Sesion */

controller.logout = (req,res)=>{
    if(req.session.loggedin == true){
        req.session.destroy();
    }
    res.redirect('/login');
};

/** Controladores de inicios de sesion y adminitrador */

controller.auth = (req,res)=>{
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE email = ?', [data.email], (err, userdata) => {
            if (userdata.length > 0) {
                userdata.forEach(element => {
                    bcrypt.compare(data.password, element.password, (err, isMatch) => {
                        if(!isMatch){
                            //password incorrecto
                        }else{
                            req.session.loggedin = true;
                            req.session.name = element.nombre;
                            res.redirect('/');
                        }
                    });
                });
            } else {
                //mensaje Usuario no existe
            }
        });
    });
};

controller.guardarUsuario = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE email = ?', [data.email], (err, userdata) => {
            if (userdata.length > 0) {
                // Pasamos el mensaje de error a la vista
                //alert ('administrador/admonUsuarios', { error: 'El usuario ya se encuentra creado!' });
            } else {
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;
                    req.getConnection((err, conn) => {
                        conn.query('INSERT INTO usuarios SET ?', [data], (err, resultados) => {
                            if (err) {
                                console.error('Error al insertar datos:', err);
                                return res.status(500).send('Error al guardar los datos');
                            }
                            console.log(resultados);
                            res.redirect('/admon');
                        });        
                    });
                });
            }
        });
    });    
};

/** Controlador Home */

controller.guardar = (req, res)=>{
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO clientes SET ?', [data], (err, resultados) => {
            if (err) {
                console.error('Error al insertar datos:', err);
                return res.status(500).send('Error al guardar los datos');
            }
            console.log(resultados);
            res.redirect('/home');
        });        
    });
};

/** Controlador Usuarios */
controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM clientes',(err,clientes)=>{
            if(err){
                res.json(err);
            }
            console.log(clientes);
            
            res.render('usuario',{
                
                data: clientes
controller.list = (req, res) => {
    // Definir la cantidad de registros por página
    const limit = 7;  // Por ejemplo, 10 clientes por página
    const page = req.query.page || 1;  // Número de la página actual
    const offset = (page - 1) * limit;  // Desplazamiento para la consulta SQL

    // Obtener los clientes con paginación
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes LIMIT ? OFFSET ?', [limit, offset], (err, clientes) => {
            if (err) {
                res.json(err);
                return;
            }

            // Contar el total de registros de clientes para saber cuántas páginas mostrar
            conn.query('SELECT COUNT(*) AS total FROM clientes', (err, countResult) => {
                if (err) {
                    res.json(err);
                    return;
                }

                const total = countResult[0].total;  // Total de registros de clientes
                const totalPages = Math.ceil(total / limit);  // Calcular el número total de páginas

                // Pasar los datos a la vista
                res.render('usuario', {
                    data: clientes,
                    currentPage: page,
                    totalPages: totalPages
                });
            });
        });
    });
};

controller.obtenerCliente = (req, res)=>{
    const { id } = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM clientes WHERE id = ?', [id], (err, resultados) => {
            if (err) {
                console.error('Error al eliminar datos:', err);
                return res.status(500).send('Error al eliminar los datos');
            }
            res.render('editar_cliente', {
                data: resultados[0]
            })
        });    
    });
};

controller.editar = (req, res)=>{
    const { id } = req.params;
    const newCliente = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE clientes SET ? WHERE id = ?', [newCliente, id], (err, resultados) => {
            if (err) {
                console.error('Error al eliminar datos:', err);
                return res.status(500).send('Error al eliminar los datos');
            }
            res.redirect('/');
        });    
    });
};

controller.eliminar = (req, res)=>{
    const id = req.params.id;
    //const { id } = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM clientes WHERE id = ?', [id], (err, resultados) => {
            if (err) {
                console.error('Error al eliminar datos:', err);
                return res.status(500).send('Error al eliminar los datos');
            }
            console.log(resultados);
            res.redirect('/');
        });    
    });
};

module.exports = controller;