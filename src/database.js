import mongoose from 'mongoose';

//base de datos local
const url = 'mongodb://localhost:27017/blogrecetas';
//base de datos en la nube
//const url = 'mongodb+srv://carlosmsx:ePSOItVV9oWvJGfw@cluster0.x3szwek.mongodb.net/cafe2i';

//Conexion a DB como lo vimos en clase
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada');
})
