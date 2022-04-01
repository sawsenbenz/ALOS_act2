var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

//get all Cars
app.get('/getCars', function(req, res){
    fs.readFile(__dirname + "/" + "Cars.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})

//get a new Car

var Car =
    {
        "id": 101,
        "model": "AUDI",
        "name": "A3 Limousine Sport Line",
        "motor": "TDI",
        "Box": "S Tronic",
        "Energie": "Diesel",
        "price":  6350

    }

app.post('/addCars', function(req, res){
    fs.readFile(__dirname + "/" + "Cars.json", 'utf8', function(err, data){
         data = JSON.parse(data);
         data["Car"] = user["Car"];
         console.log(data);
         res.end(JSON.stringify(data));

        });
})
//get a car by ID
app.get('/:id', function (req, res){

    fs.readFile( __dirname + "/" + "Cars.json", 'utf8', function (err, data) {

        var Cars = JSON.parse( data );
        var Car = Cars["Car" + req.params.id] 
        console.log( Car );
        res.end( JSON.stringify(car));

        });
})

//delete car 
var id = 3;
app.delete('/deleteCars', function (req, res) {    
    fs.readFile( __dirname + "/" + "Cars.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["Car" + 3];    
        console.log( data );
        res.end( JSON.stringify(data));
        });
})

app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})
