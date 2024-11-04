const controller = {};

controller.home = (req,res)=>{
    res.render('clientes',{
    });
};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM clientes',(err,clientes)=>{
            if(err){
                res.json(err);
            }
            console.log(clientes);
            
            res.render('usuario',{
                
                data: clientes
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