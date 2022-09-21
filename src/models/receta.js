import mongoose, {Schema} from 'mongoose';

const recetaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique: true
    },
    imagen: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true        
    }
});

const Receta = mongoose.model('receta', recetaSchema);

export default Receta;