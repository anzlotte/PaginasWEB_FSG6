const controller = {};

controller.home = (req,res)=>{
    res.render('clientes',{
    });
};

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