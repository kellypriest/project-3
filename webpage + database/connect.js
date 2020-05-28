//Make sure postgres dependency is installed.    
//npm install pg or npm install –g pg
var pg = require('pg');

//Provide connection string for the postgreSQL client, port generally is default one i.e. 5432:
var connectionString = "postgres://karl:WaldoMoose121@Bootcamp SQL/192.168.2.7.:5432/dog_db";

//activate connection
var pgClient = new pg.Client(connectionString);
pgClient.connect();

//query example to test connection
var query = pgClient.query("SELECT * FROM dog WHERE color = 'Black'");

//get result of query
query.on("row", function(row,result){
    result.addRow(row);
    });