import { Router } from "express";
import  path  from "path"
import multer from "multer"
const __dirname = path.resolve();
 
const router = Router();
let nombre

 //Para usar archivos estaticos

 
//Leemos el archivo json
//const json_books = fs.readFileSync("src/books.json", "utf-8");
//let books = JSON.parse(json_books);
//Guardamos las imaganes que van a ser procesadas por multer
const storage = multer.diskStorage({
   
    destination: path.join(__dirname, 'public/img'), //definimos la carpeta donde se guardara las imgs
    filename: (req, file, cb, filename) => {
        console.log("gg",path.join(__dirname, 'public/img'));
        nombre = file.originalname
        cb(null, (file.originalname)); //guardamos con el nombre original
    }
})
let subir = multer({ storage: storage })
router.post("/subir",subir.single('image')
    /*Definimos que los archivos subidos 
    seran de a uno y le damos el name del html*/
    , (req, res) => {
        //Optenemos el tipo de protocolo que se utiliza mas el nombre
        let url = req.protocol + '://' + req.get('host')
         
         
        //hacemos un map al json para obtener la id mayor
       
        let newBook = {
           
            image: url + "/img/" + nombre,
        };
        console.log(newBook);
        //escribimos los datos al archivo json
        //const json_books = JSON.stringify(books);
       // fs.writeFileSync("src/books.json", json_books, "utf-8");
        //res.json(books)
        res.json("Datos"); 
    })





export default router;
