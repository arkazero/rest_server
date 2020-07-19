const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('Peticion Get')
});

app.put('/usuario/:id', function(req, res) {
    res.json('Peticion Put')
});

app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;

    if (id === "") {
        res.status("400").json({
            ok: false,
            menseje: 'El nombre es necesario'
        });
    } else {
        res.json({
            id
        });
    }

});

app.post('/usuario', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status("400").json({
            ok: false,
            menseje: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        });
    }


});


app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});