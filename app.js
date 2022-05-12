// get the http module:copy
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function(request, response){
    // default file path and status code
    let file_path    = "views/404.html";
    let status_code  = 404;
    let content_type = "text/html";
    let encoding     = "utf8";
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/'){
        file_path    = "views/index.html";
        status_code  = 200;
        content_type = "text/html";
    }
    else if(request.url === "/cars"){
        file_path    = "views/cars.html";
        status_code  = 200;
        content_type = "text/html";
    }
    else if(request.url === "/cats"){
        file_path    = "views/cats.html";
        status_code  = 200;
        content_type = "text/html";
    }
    else if(request.url === "/stylesheets/index.css"){ // INDEX CSS
        file_path    = "stylesheets/index.css";
        status_code  = 200;
        content_type = "text/css";
    }
    else if(request.url === "/stylesheets/cars.css"){ // CARS AND CATS CSS
        file_path    = "stylesheets/cars_and_cats.css";
        status_code  = 200;
        content_type = "text/css";
    }
    else if(request.url === "/stylesheets/404.css"){ // 404 CSS
        file_path    = "stylesheets/404.css";
        status_code  = 200;
        content_type = "text/css";
    }
    else if(request.url === '/images/car_1.jpeg'){ // CAR IMAGE
        file_path    = "images/car_1.jpeg";
        status_code  = 200;
        content_type = "image/jpg";
        encoding     = null;
    }
    else if(request.url === '/images/car_2.jpeg'){ // CAR IMAGE
        file_path    = "images/car_2.jpeg";
        status_code  = 200;
        content_type = "image/jpg";
        encoding     = null;
    }
    else if(request.url === '/images/car_3.jpeg'){ // CAR IMAGE
        file_path    = "images/car_3.jpeg";
        status_code  = 200;
        content_type = "image/jpg";
        encoding     = null;
    }
    else if(request.url === '/images/cat_1.jpeg'){ // CAT IMAGE
        file_path    = "images/cat_1.jpeg";
        status_code  = 200;
        content_type = "image/jpg";
        encoding     = null;
    }
    else if(request.url === '/images/cat_2.jpeg'){ // CAT IMAGE
        file_path    = "images/cat_2.jpeg";
        status_code  = 200;
        content_type = "image/jpg";
        encoding     = null;
    }
    else if(request.url === '/images/cat_3.jpeg'){ // CAT IMAGE
        file_path    = "images/cat_3.jpeg";
        status_code  = 200;
        content_type = "image/jpg";
        encoding     = null;
    }

    fs.readFile(file_path, encoding, function (errors, contents){
        response.writeHead(status_code, {'Content-type': content_type});
        response.write(contents); 
        response.end();
    });
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");