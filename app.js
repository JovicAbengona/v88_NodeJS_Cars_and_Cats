// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function(request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  // send response body
            response.end(); // finished!
        });
    }
    else if(request.url === "/cars"){
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === "/cats"){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === "/stylesheets/index.css"){ // INDEX CSS
        fs.readFile('stylesheets/index.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === "/stylesheets/cars.css"){ // CARS AND CATS CSS
        fs.readFile('stylesheets/cars_and_cats.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === "/stylesheets/404.css"){ // 404 CSS
        fs.readFile('stylesheets/404.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/images/car_1.jpeg'){ // CAR IMAGE
            // notice we won't include the utf8 encoding
            fs.readFile('images/car_1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car_2.jpeg'){ // CAR IMAGE
            // notice we won't include the utf8 encoding
            fs.readFile('images/car_2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car_3.jpeg'){ // CAR IMAGE
            // notice we won't include the utf8 encoding
            fs.readFile('images/car_3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_1.jpeg'){ // CAT IMAGE
            // notice we won't include the utf8 encoding
            fs.readFile('images/cat_1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_2.jpeg'){ // CAT IMAGE
            // notice we won't include the utf8 encoding
            fs.readFile('images/cat_2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_3.jpeg'){ // CAT IMAGE
            // notice we won't include the utf8 encoding
            fs.readFile('images/cat_3.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else{
        fs.readFile('views/404.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");