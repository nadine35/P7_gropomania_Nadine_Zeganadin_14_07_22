const userMulter = require('multer');  //npm install --save multer

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = userMulter.diskStorage({

    destination: (req, file, callback) => {
        callback(null, '../front/public/userProfilImages/')
    },
    filename: (req, file, callback) => {
        let name = file.originalname.split('.').slice(0, -1).join('.') // permet d'extraire le nom du ficher sans l'extension (même si il y a des points dans le nom du fichier)
        name = name.split(' ').join('_'); // élimine le problème des espaces dans les noms de fichiers

        const extension = MIME_TYPES[file.mimetype];
        // callback(null, name +'.'+extension);
        callback(null, name + '_' + Date.now() + '.' + extension);

        console.log("userMulter.diskStorage");
        console.log(file);
        console.log(name);
    }
});

console.log("userMulter.diskstorage()");

console.log(storage);

module.exports = userMulter({ storage, limits:{fieldSize: 25 * 1024 * 1024} } ).single('file');
