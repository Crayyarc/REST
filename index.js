require('dotenv').config();
const morgan = require('morgan');
const sequelize = require('./app/db')
const express = require('express');

const app = express();

const router = require('./app/routes');

app.use(morgan('dev'));
app.use(express.json());
app.use('/app', router);
app.listen(process.env.PORT, async (err) => {
    if (err) throw new Error(`Error: no se abre el port ${process.env.PORT}`)
    console.log(`my appp listening on port ${process.env.PORT}`)
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter: true})
        console.log('Estamos conectados')
    } catch(error){
        console.error('Error, no se ha conectado', error);
    }
});