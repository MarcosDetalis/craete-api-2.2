const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img'), //definimos la carpeta donde se guardara las imgs
    filename: (req, file, cb, filename) => {
        console.log(file);
        nombre = file.originalname
        cb(null, (file.originalname)); //guardamos con el nombre original
    }
})
let subir = multer({ storage: storage })
app.post("/subir", subir.single('image')
    /*Definimos que los archivos subidos 
    seran de a uno y le damos el name del html*/
    , (req, res) => {
        //Optenemos el tipo de protocolo que se utiliza mas el nombre
        let url = req.protocol + '://' + req.get('host')
        const { title, autor } = req.body;
        if (!title ||!nombre||!autor) {
            res.status(400).send("Ingrese todo los campos");
            return;
        }
        //hacemos un map al json para obtener la id mayor
        let ids = books.map(clave => clave.id)
        let maxid  = Math.max(...ids)
        maxid < 0 ? maxid = 0:{} 
        let id = maxid + 1
        let newBook = {
            id,
            autor,
            title,
            image: url + "/img/" + nombre,
        };
        books.push(newBook);
        //escribimos los datos al archivo json
        const json_books = JSON.stringify(books);
        fs.writeFileSync("src/books.json", json_books, "utf-8");
        //res.json(books)
        res.send("<h1> Enviado</h1>")
    })