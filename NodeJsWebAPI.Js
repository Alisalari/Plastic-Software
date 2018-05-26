var express = require('express');
var app = express();
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*-- -------------------------------------------------------------
W E B    A P I  
Populate datalist options   
http://localhost:2247/Populate_Datalist_Options?t=GEN_MNU&f=NAME&c=1
t as TABLE
f as FIELD
c as reserved
-----------------------------------------------------------------*/ 
app.get('/Populate_Datalist_Options', function (req, res) {
  var tableName = req.param('t');
  var fieldName = req.param('f');
 var catName = req.param('c');
  res.setHeader('Content-Type', 'text/html');
  var sql = require("mssql");
  const pool = new sql.ConnectionPool({
    user: 'sa',
    password: '1',
    server: 'localhost\\MSSQLSERVER01', 
    database: 'PlasticFactoryBarcode' 
  })
  var conn = pool;
  console.log("select "+fieldName +" from _"+tableName);
  conn.connect().then(function () {
    var req = new sql.Request(conn);
console.log("select "+fieldName +" as VALUE,_ID as ID from [PlasticFactoryBarcode].[dbo].[_"+tableName+"]");
    req.query("select  "+fieldName +"+'<'+cast(_ID AS varchar)+'>' as NAME from [PlasticFactoryBarcode].[dbo].[_"+tableName+"]").then(function (recordset) {
      console.log(recordset.recordsets[0]);
      res.status(200).json(recordset.recordsets[0]);
      conn.close();
    })
    .catch(function (err) {
      console.log(err);
      conn.close();
    });
  })
  .catch(function (err) {
    console.log(err);
  });
});

/*-- -------------------------------------------------------------
W E B    A P I  
Finding First available numeric field in a table   
http://localhost:2247/Table_Field_Default?t=GEN_MNU&f=SERIAL&c=1
t as TABLE
f as FIELD
c as reserved
-----------------------------------------------------------------*/ 
app.get('/First_available_SERIAL', function (req, res) {
  var tableName = req.param('t');
  var fieldName = req.param('f');
  var catName = req.param('c');
  console.log(tableName);
  res.setHeader('Content-Type', 'text/html');
  var sql = require("mssql");
  const pool = new sql.ConnectionPool({
    user: 'sa',
    password: '1',
    server: 'localhost\\MSSQLSERVER01', 
    database: 'PlasticFactoryBarcode' 
  })
  var conn = pool;
  conn.connect().then(function () {
    var req = new sql.Request(conn);
    req.query("select isnull(max("+fieldName +"),0)+1 as "+fieldName +" from _"+tableName).then(function (recordset) {
      console.log(recordset);
      res.status(200).json(recordset);
      conn.close();
    })
    .catch(function (err) {
      console.log(err);
      conn.close();
    });
  })
  .catch(function (err) {
    console.log(err);
  });
});

/*-- -------------------------------------------------------------
W E B    A P I  
Finding date ( TODAY )  
http://localhost:2247/Today?c=1
c as reserved
-----------------------------------------------------------------*/ 
app.get('/Today', function (req, res) {
  var catName = req.param('c');
  res.setHeader('Content-Type', 'text/html');
  var sql = require("mssql");
  const pool = new sql.ConnectionPool({
    user: 'sa',
    password: '1',
    server: 'localhost\\MSSQLSERVER01', 
    database: 'PlasticFactoryBarcode' 
  })
  var conn = pool;
  conn.connect().then(function () {
    var req = new sql.Request(conn);
    req.query("SELECT CONVERT (date, GETDATE(),101) as DATE").then(function (recordset) {
      console.log(recordset);
      res.status(200).json(recordset);
      conn.close();
    })
    .catch(function (err) {
      console.log(err);
      conn.close();
    });
  })
  .catch(function (err) {
    console.log(err);
  });
});

/*-- -------------------------------------------------------------
W E B    A P I  
Finding First SERIAL in GEN_MNU table   
http://localhost:2247/Table_Field_Default?t=GEN_MNU&f=SERIAL&c=1
t as TABLE
f as FIELD
c as reserved
-----------------------------------------------------------------*/ 
app.get('/Table_Field_Default', function (req, res) {
  var tableName = req.param('t');
  var fieldName = req.param('f');
  var catName = req.param('c');
  console.log(tableName);
  res.setHeader('Content-Type', 'text/html');
  var sql = require("mssql");
  const pool = new sql.ConnectionPool({
    user: 'sa',
    password: '1',
    server: 'localhost\\MSSQLSERVER01', 
    database: 'PlasticFactoryBarcode' 
  })
  var conn = pool;
  conn.connect().then(function () {
    var req = new sql.Request(conn);
    req.query("select max("+fieldName +") as "+fieldName +" from _"+tableName).then(function (recordset) {
      console.log(recordset);
      res.status(200).json(recordset);
      conn.close();
    })
    .catch(function (err) {
      console.log(err);
      conn.close();
    });
  })
  .catch(function (err) {
    console.log(err);
  });
});
var server = app.listen(2247, process.argv[2], function () {
    console.log('Server is running 2247..');
});