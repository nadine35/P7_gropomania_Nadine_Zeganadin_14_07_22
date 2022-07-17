const multer = require('multer');  //npm install --save multer

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        let name = file.originalname.split('.').slice(0, -1).join('.') // permet d'extraire le nom du ficher sans l'extension (même si il y a des points dans le nom du fichier)
        name = name.split(' ').join('_'); // élimine le problème des espaces dans les noms de fichiers

        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + '_' + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('file');