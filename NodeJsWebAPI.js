/*-- -------------------------------------------------------------
N O D E js  W E B    A P I routines
  using:
        express
        mssql
        body-parser
-----------------------------------------------------------------*/
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
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*-- -------------------------------------------------------------
N O D E js  W E B    A P I       type : POST 
Delete a record from a table
http://localhost:2247/Delete
tableName As Table
ID as _ID of one records to delete
-----------------------------------------------------------------*/
app.post('/Delete',function(req,res){
  var tableName =req.body.tableName ;
  var ID = req.body.ID;
  var Q="Delete from _"+tableName+" where _ID='"+ID+"'";
  console.log(Q);
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
    req.query(Q).then(function (recordset) {
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
N O D E js  W E B    A P I       type : POST 
Submit to insert a record to a table
http://localhost:2247/Submit
tableName As Table
-----------------------------------------------------------------*/
app.post('/Submit',function(req,res){
  var tableName =req.body.tableName ;
  var Q="";
  switch(tableName){
    case 'PFB_MATERIAL':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_MATERIAL ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_ADDITIVES':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_ADDITIVES ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_COLOR':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_COLOR ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_GRADE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_GRADE ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_DIE_MOLD_TYPE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_DIE_MOLD_TYPE ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_PACKAGING':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_PACKAGING ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_MEASUREMENT':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_MEASUREMENT ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_MACHINE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_MACHINE ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_STORAGE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_STORAGE ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_OPERATOR':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_OPERATOR ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_LABEL_BARCODE_PLANNING':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        var P15 = req.body.P15;
        var P16 = req.body.P16;
        var P17 = req.body.P17;
        var P18 = req.body.P18;
        var P19 = req.body.P19;
        var P20 = req.body.P20;
        var P21 = req.body.P21;
        var P22 = req.body.P22;
        var P23 = req.body.P23;
        Q = "insert into dbo._PFB_LABEL_BARCODE_PLANNING ([_ID],[SERIAL],[DATE],[MATERIAL],[ADDITIVES],[COLOR],[GRADE],[DIE_MOLD_TYPE],[PRODUCT_LENGHT],[PRODUCT_WIDTH],[PRODUCT_TICKNESS],[PACKAGING],[NO_IN_BAG],[BAG_IN_PACK],[TOTAL_NO],[MEASUREMENT],[MACHINE],[STORAGE],[PLANNING_NAME],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','"+P14+"','"+P15+"','"+P16+"','"+P17+"','"+P18+"','"+P19+"','"+P20+"','"+P21+"','"+P22+"','"+P23+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_SERIAL_PORT_TEST':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        Q = "insert into dbo._PFB_SERIAL_PORT_TEST ([_ID],[SERIAL],[DATE],[PORT_NAME],[BAUD_RATE],[DATA_BITS],[PARITY],[STOP_BITS],[READ_DATA],[DECODE_NUMBER],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','"+P14+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_LABEL_BARCODE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        Q = "insert into dbo._PFB_LABEL_BARCODE ([_ID],[SERIAL],[DATE],[LABEL_BARCODE_PLANNING],[PLANNING_NAME],[OPERATOR],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[BARCODE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','"+P14+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_LABEL_BARCODE_PLANNING1':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        var P15 = req.body.P15;
        var P16 = req.body.P16;
        var P17 = req.body.P17;
        var P18 = req.body.P18;
        var P19 = req.body.P19;
        var P20 = req.body.P20;
        var P21 = req.body.P21;
        var P22 = req.body.P22;
        var P23 = req.body.P23;
        var P24 = req.body.P24;
        var P25 = req.body.P25;
        var P26 = req.body.P26;
        var P27 = req.body.P27;
        Q = "insert into dbo._PFB_LABEL_BARCODE_PLANNING1 ([_ID],[SERIAL],[DATE],[MATERIAL],[ADDITIVES],[COLOR],[GRADE],[DIE_MOLD_TYPE],[PRODUCT_LENGHT],[PRODUCT_WIDTH],[PRODUCT_TICKNESS],[PACKAGING],[NO_IN_BAG],[BAG_IN_PACK],[TOTAL_NO],[MACHINE],[STORAGE],[PLANNING_NAME],[OPERATOR],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[BARCODE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','"+P14+"','"+P15+"','"+P16+"','"+P17+"','"+P18+"','"+P19+"','"+P20+"','"+P21+"','"+P22+"','"+P23+"','"+P24+"','"+P25+"','"+P26+"','"+P27+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_STORAGE_TRANSACTION':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        var P15 = req.body.P15;
        var P16 = req.body.P16;
        Q = "insert into dbo._PFB_STORAGE_TRANSACTION ([_ID],[SERIAL],[DATE],[FROM_STORAGE],[TO_STORAGE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P13+"','"+P14+"','"+P15+"','"+P16+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_STORAGE_BARCODE_INVENTORY':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        Q = "insert into dbo._PFB_STORAGE_BARCODE_INVENTORY ([_ID],[SERIAL],[DATE],[STORAGE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P11+"','"+P12+"','"+P13+"','"+P14+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_STORAGE_INVENTORY':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_STORAGE_INVENTORY ([_ID],[SERIAL],[DATE],[STORAGE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_STORAGE_BARCODE_STOCK_CARD':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        var P15 = req.body.P15;
        var P16 = req.body.P16;
        Q = "insert into dbo._PFB_STORAGE_BARCODE_STOCK_CARD ([_ID],[SERIAL],[DATE],[STORAGE],[LABEL_BARCODE_PLANNING],[PLANNING_NAME],[TOTAL_VALUE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P13+"','"+P14+"','"+P15+"','"+P16+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_STORAGE_STOCK_CARD':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        var P15 = req.body.P15;
        Q = "insert into dbo._PFB_STORAGE_STOCK_CARD ([_ID],[SERIAL],[DATE],[STORAGE],[LABEL_BARCODE_PLANNING],[PLANNING_NAME],[TOTAL_VALUE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P12+"','"+P13+"','"+P14+"','"+P15+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_PRODUCTING_INPUT_OR_OUTPUT':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._PFB_PRODUCTING_INPUT_OR_OUTPUT ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_PRODUCT_FORMULA':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P15 = req.body.P15;
        var P16 = req.body.P16;
        var P17 = req.body.P17;
        var P18 = req.body.P18;
        Q = "insert into dbo._PFB_PRODUCT_FORMULA ([_ID],[SERIAL],[DATE],[FORMULA_NAME],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P15+"','"+P16+"','"+P17+"','"+P18+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_CALCULATE_THE_DEVIATION_FROM_FORMULA':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P19 = req.body.P19;
        var P20 = req.body.P20;
        var P21 = req.body.P21;
        var P22 = req.body.P22;
        Q = "insert into dbo._PFB_CALCULATE_THE_DEVIATION_FROM_FORMULA ([_ID],[SERIAL],[DATE],[FORMULA],[FORMULA_NAME],[CALC_FROM_DATE],[CALC_TO_DATE],[DEVIATION_PERCENTAGE],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P19+"','"+P20+"','"+P21+"','"+P22+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_FROM_THIS_MATERIAL':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_FROM_THIS_MATERIAL ([_ID],[SERIAL],[DATE],[MATERIAL],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_FROM_THIS_ADDITIVES':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_FROM_THIS_ADDITIVES ([_ID],[SERIAL],[DATE],[ADDITIVES],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_WITH_THIS_DIE_MOLD_TYPE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_WITH_THIS_DIE_MOLD_TYPE ([_ID],[SERIAL],[DATE],[DIE_MOLD_TYPE],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_WITH_THIS_MACHINE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_WITH_THIS_MACHINE ([_ID],[SERIAL],[DATE],[MACHINE],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_INTO_THIS_STORAGE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_INTO_THIS_STORAGE ([_ID],[SERIAL],[DATE],[STORAGE],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_WITH_THIS_OPERATOR':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_WITH_THIS_OPERATOR ([_ID],[SERIAL],[DATE],[OPERATOR],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_DAILY':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_DAILY ([_ID],[SERIAL],[DATE],[DAILY],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_MONTHLY':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_MONTHLY ([_ID],[SERIAL],[DATE],[MONTHLY],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'PFB_HOW_MUCH_YEARLY':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        Q = "insert into dbo._PFB_HOW_MUCH_YEARLY ([_ID],[SERIAL],[DATE],[MONTHLY],[TOTAL_RECORD],[TOTAL_NO],[TOTAL_WEIGHT],[PACKAGING_WEIGHT],[PURE_WEIGHT],[DETAIL],[FROM_DATE],[TO_DATE],[FROM_NO],[TO_NO],[UID1],[UID2],[UID3],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','0','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_STATION':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._GEN_STATION ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_YESNO':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._GEN_YESNO ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_MNUOBJTYPE':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._GEN_MNUOBJTYPE ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_MNUACCESSFLAG':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._GEN_MNUACCESSFLAG ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_MNUMAIN':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        Q = "insert into dbo._GEN_MNUMAIN ([_ID],[NAME],[DETAIL],[UID1],[UID2],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_MNU':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        Q = "insert into dbo._GEN_MNU ([_ID],[SERIAL],[NAME],[OBJTYPE],[MNUMAIN],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_MNUACCESS':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        Q = "insert into dbo._GEN_MNUACCESS ([_ID],[SERIAL],[DATE],[REQUESTUSER],[REQUESTUSERNAME],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_U':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        Q = "insert into dbo._GEN_U ([_ID],[SERIAL],[NAME],[PASSWORD],[TELL],[MOBILE],[ADDRESS],[ACCOUNTNO],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_SURVEY':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        Q = "insert into dbo._GEN_SURVEY ([_ID],[SERIAL],[FINGERPRINT],[USER],[FORM],[SUCCESSED],[COMFORTABLE],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_LOG':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        Q = "insert into dbo._GEN_LOG ([_ID],[SERIAL],[FINGERPRINT],[USER],[FORM],[COMMAND],[VALUE],[RESULT],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_LOG_FIELDS':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        Q = "insert into dbo._GEN_LOG_FIELDS ([_ID],[SERIAL],[GEN_LOG],[FIELD],[COMMAND],[VALUE],[RESULT],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_LAST_STATUS':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        Q = "insert into dbo._GEN_LAST_STATUS ([_ID],[SERIAL],[FINGERPRINT],[USER],[FORM],[UPFIELDSJSON],[GRIDFIELDSJSON],[SEARCHFIELDSJSON],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;
    case 'GEN_CALENDARS':
        var P1 = req.body.P1;
        var P2 = req.body.P2;
        var P3 = req.body.P3;
        var P4 = req.body.P4;
        var P5 = req.body.P5;
        var P6 = req.body.P6;
        var P7 = req.body.P7;
        var P8 = req.body.P8;
        var P9 = req.body.P9;
        var P10 = req.body.P10;
        var P11 = req.body.P11;
        var P12 = req.body.P12;
        var P13 = req.body.P13;
        var P14 = req.body.P14;
        var P15 = req.body.P15;
        var P16 = req.body.P16;
        var P17 = req.body.P17;
        var P18 = req.body.P18;
        Q = "insert into dbo._GEN_CALENDARS ([_ID],[SERIAL],[JUDATE],[HDATE],[HIJDATE],[PDATE],[BDATE],[HINDATE],[JADATE],[CDATE],[TIMEZONE],[WDAY],[TIME1],[TIME2],[TIME3],[TIME4],[TIME5],[DAYTYPE],[DETAIL],[UID1],[UID2],[ESERIAL],[_LastSecurityOption],[_LastSaveOption],[_LastDate],[_LastTime],[_LastDateTime],[_LastUID],[_LastStID],[_LastStatus]) values (0,'"+P1+"','"+P2+"','"+P3+"','"+P4+"','"+P5+"','"+P6+"','"+P7+"','"+P8+"','"+P9+"','"+P10+"','"+P11+"','"+P12+"','"+P13+"','"+P14+"','"+P15+"','"+P16+"','"+P17+"','"+P18+"','0','0','0','0','0','1/1/1','1/1/1','1/1/1','0','0','1');";
    break;

  }
  console.log(Q);
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
    req.query(Q).then(function (recordset) {
      //console.log(recordset);
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
N O D E js  W E B    A P I       type : POST 
Query Base on one or more Tables of Data and create a table of data with click for loading data 
http://localhost:2247/Query
tableName As Table
ID as _ID of one records or * insteade of ALL RECORDS
-----------------------------------------------------------------*/
app.post('/Query',function(req,res){
  var tableName =req.body.tableName ;
  var ID =req.body.ID;
  var checkID="  t1._ID="+ID;
  if(ID=="*"){
    checkID="";
  }
  var Q="";
  switch(tableName){
    case 'PFB_MATERIAL':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_MATERIAL as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_ADDITIVES':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_ADDITIVES as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_COLOR':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_COLOR as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_GRADE':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_GRADE as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_DIE_MOLD_TYPE':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_DIE_MOLD_TYPE as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_PACKAGING':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_PACKAGING as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_MEASUREMENT':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_MEASUREMENT as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_MACHINE':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_MACHINE as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_STORAGE':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_STORAGE as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_OPERATOR':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_OPERATOR as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_LABEL_BARCODE_PLANNING':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as MATERIAL,t3.NAME as ADDITIVES,t4.NAME as COLOR,t5.NAME as GRADE,t6.NAME as DIE_MOLD_TYPE,t1.PRODUCT_LENGHT as PRODUCT_LENGHT,t1.PRODUCT_WIDTH as PRODUCT_WIDTH,t1.PRODUCT_TICKNESS as PRODUCT_TICKNESS,t7.NAME as PACKAGING,t1.NO_IN_BAG as NO_IN_BAG,t1.BAG_IN_PACK as BAG_IN_PACK,t1.TOTAL_NO as TOTAL_NO,t8.NAME as MEASUREMENT,t9.NAME as MACHINE,t10.NAME as STORAGE,t1.PLANNING_NAME as PLANNING_NAME,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID,t4._ID as t4ID,t5._ID as t5ID,t6._ID as t6ID,t7._ID as t7ID,t8._ID as t8ID,t9._ID as t9ID,t10._ID as t10ID";
      Q = Q + " from _PFB_LABEL_BARCODE_PLANNING as t1  , _PFB_MATERIAL as t2 , _PFB_ADDITIVES as t3 , _PFB_COLOR as t4 , _PFB_GRADE as t5 , _PFB_DIE_MOLD_TYPE as t6 , _PFB_PACKAGING as t7 , _PFB_MEASUREMENT as t8 , _PFB_MACHINE as t9 , _PFB_STORAGE as t10";
      if(ID=="*"){
        Q = Q + "  where  t1.MATERIAL=t2._ID  and  t1.ADDITIVES=t3._ID  and  t1.COLOR=t4._ID  and  t1.GRADE=t5._ID  and  t1.DIE_MOLD_TYPE=t6._ID  and  t1.PACKAGING=t7._ID  and  t1.MEASUREMENT=t8._ID  and  t1.MACHINE=t9._ID  and  t1.STORAGE=t10._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t1.DATE Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t2. Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t3. Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t4. Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t5. Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t6. Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.PRODUCT_LENGHT Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.PRODUCT_WIDTH Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.PRODUCT_TICKNESS Like '%"+P9+"%'"); 
        var P10 = req.body.P10;
        Q = Q + ((P10=='')?"":" and t7. Like '%"+P10+"%'"); 
        var P11 = req.body.P11;
        Q = Q + ((P11=='')?"":" and t1.NO_IN_BAG Like '%"+P11+"%'"); 
        var P12 = req.body.P12;
        Q = Q + ((P12=='')?"":" and t1.BAG_IN_PACK Like '%"+P12+"%'"); 
        var P13 = req.body.P13;
        Q = Q + ((P13=='')?"":" and t1.TOTAL_NO Like '%"+P13+"%'"); 
        var P14 = req.body.P14;
        Q = Q + ((P14=='')?"":" and t8. Like '%"+P14+"%'"); 
        var P15 = req.body.P15;
        Q = Q + ((P15=='')?"":" and t9. Like '%"+P15+"%'"); 
        var P16 = req.body.P16;
        Q = Q + ((P16=='')?"":" and t10. Like '%"+P16+"%'"); 
        var P17 = req.body.P17;
        Q = Q + ((P17=='')?"":" and t1.PLANNING_NAME Like '%"+P17+"%'"); 
        var P18 = req.body.P18;
        Q = Q + ((P18=='')?"":" and t1.FROM_DATE Like '%"+P18+"%'"); 
        var P19 = req.body.P19;
        Q = Q + ((P19=='')?"":" and t1.TO_DATE Like '%"+P19+"%'"); 
        var P20 = req.body.P20;
        Q = Q + ((P20=='')?"":" and t1.FROM_NO Like '%"+P20+"%'"); 
        var P21 = req.body.P21;
        Q = Q + ((P21=='')?"":" and t1.TO_NO Like '%"+P21+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_SERIAL_PORT_TEST':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t1.PORT_NAME as PORT_NAME,t1.BAUD_RATE as BAUD_RATE,t1.DATA_BITS as DATA_BITS,t1.PARITY as PARITY,t1.STOP_BITS as STOP_BITS,t1.READ_DATA as READ_DATA,t1.DECODE_NUMBER as DECODE_NUMBER,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_SERIAL_PORT_TEST as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.DATE Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.PORT_NAME Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.BAUD_RATE Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.DATA_BITS Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.PARITY Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.STOP_BITS Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.FROM_DATE Like '%"+P7+"%'"); sw=true; } 
        var P8 = req.body.P8;
        if(P8!='') { Q = Q + ((P8=='')?"":((sw)?" and ":" where ")+ " t1.TO_DATE Like '%"+P8+"%'"); sw=true; } 
        var P9 = req.body.P9;
        if(P9!='') { Q = Q + ((P9=='')?"":((sw)?" and ":" where ")+ " t1.FROM_NO Like '%"+P9+"%'"); sw=true; } 
        var P10 = req.body.P10;
        if(P10!='') { Q = Q + ((P10=='')?"":((sw)?" and ":" where ")+ " t1.TO_NO Like '%"+P10+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_LABEL_BARCODE':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as LABEL_BARCODE_PLANNING,t1.PLANNING_NAME as PLANNING_NAME,t3.NAME as OPERATOR,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.BARCODE as BARCODE,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID";
      Q = Q + " from _PFB_LABEL_BARCODE as t1  , _PFB_LABEL_BARCODE_PLANNING as t2 , _PFB_OPERATOR as t3";
      if(ID=="*"){
        Q = Q + "  where  t1.LABEL_BARCODE_PLANNING=t2._ID  and  t1.OPERATOR=t3._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t1.DATE Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t2. Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.PLANNING_NAME Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t3. Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.BARCODE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_DATE Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.FROM_NO Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.TO_NO Like '%"+P9+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_LABEL_BARCODE_PLANNING1':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as MATERIAL,t3.NAME as ADDITIVES,t4.NAME as COLOR,t5.NAME as GRADE,t6.NAME as DIE_MOLD_TYPE,t1.PRODUCT_LENGHT as PRODUCT_LENGHT,t1.PRODUCT_WIDTH as PRODUCT_WIDTH,t1.PRODUCT_TICKNESS as PRODUCT_TICKNESS,t7.NAME as PACKAGING,t1.NO_IN_BAG as NO_IN_BAG,t1.BAG_IN_PACK as BAG_IN_PACK,t1.TOTAL_NO as TOTAL_NO,t8.NAME as MACHINE,t9.NAME as STORAGE,t1.PLANNING_NAME as PLANNING_NAME,t10.NAME as OPERATOR,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.BARCODE as BARCODE,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID,t4._ID as t4ID,t5._ID as t5ID,t6._ID as t6ID,t7._ID as t7ID,t8._ID as t8ID,t9._ID as t9ID,t10._ID as t10ID";
      Q = Q + " from _PFB_LABEL_BARCODE_PLANNING1 as t1  , _PFB_MATERIAL as t2 , _PFB_ADDITIVES as t3 , _PFB_COLOR as t4 , _PFB_GRADE as t5 , _PFB_DIE_MOLD_TYPE as t6 , _PFB_PACKAGING as t7 , _PFB_MACHINE as t8 , _PFB_STORAGE as t9 , _PFB_OPERATOR as t10";
      if(ID=="*"){
        Q = Q + "  where  t1.MATERIAL=t2._ID  and  t1.ADDITIVES=t3._ID  and  t1.COLOR=t4._ID  and  t1.GRADE=t5._ID  and  t1.DIE_MOLD_TYPE=t6._ID  and  t1.PACKAGING=t7._ID  and  t1.MACHINE=t8._ID  and  t1.STORAGE=t9._ID  and  t1.OPERATOR=t10._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t3. Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t4. Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t5. Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t6. Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.PRODUCT_LENGHT Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.PRODUCT_WIDTH Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.PRODUCT_TICKNESS Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t7. Like '%"+P9+"%'"); 
        var P10 = req.body.P10;
        Q = Q + ((P10=='')?"":" and t1.NO_IN_BAG Like '%"+P10+"%'"); 
        var P11 = req.body.P11;
        Q = Q + ((P11=='')?"":" and t1.BAG_IN_PACK Like '%"+P11+"%'"); 
        var P12 = req.body.P12;
        Q = Q + ((P12=='')?"":" and t1.TOTAL_NO Like '%"+P12+"%'"); 
        var P13 = req.body.P13;
        Q = Q + ((P13=='')?"":" and t8. Like '%"+P13+"%'"); 
        var P14 = req.body.P14;
        Q = Q + ((P14=='')?"":" and t9. Like '%"+P14+"%'"); 
        var P15 = req.body.P15;
        Q = Q + ((P15=='')?"":" and t1.PLANNING_NAME Like '%"+P15+"%'"); 
        var P16 = req.body.P16;
        Q = Q + ((P16=='')?"":" and t10. Like '%"+P16+"%'"); 
        var P17 = req.body.P17;
        Q = Q + ((P17=='')?"":" and t1.BARCODE Like '%"+P17+"%'"); 
        var P18 = req.body.P18;
        Q = Q + ((P18=='')?"":" and t1.FROM_DATE Like '%"+P18+"%'"); 
        var P19 = req.body.P19;
        Q = Q + ((P19=='')?"":" and t1.TO_DATE Like '%"+P19+"%'"); 
        var P20 = req.body.P20;
        Q = Q + ((P20=='')?"":" and t1.FROM_NO Like '%"+P20+"%'"); 
        var P21 = req.body.P21;
        Q = Q + ((P21=='')?"":" and t1.TO_NO Like '%"+P21+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_STORAGE_TRANSACTION':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as FROM_STORAGE,t3.NAME as TO_STORAGE,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID";
      Q = Q + " from _PFB_STORAGE_TRANSACTION as t1  , _PFB_STORAGE as t2 , _PFB_STORAGE as t3";
      if(ID=="*"){
        Q = Q + "  where  t1.FROM_STORAGE=t2._ID  and  t1.TO_STORAGE=t3._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t1.DATE Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t2. Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t3. Like '%"+P3+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.FROM_DATE Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.TO_DATE Like '%"+P9+"%'"); 
        var P10 = req.body.P10;
        Q = Q + ((P10=='')?"":" and t1.FROM_NO Like '%"+P10+"%'"); 
        var P11 = req.body.P11;
        Q = Q + ((P11=='')?"":" and t1.TO_NO Like '%"+P11+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_STORAGE_BARCODE_INVENTORY':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as STORAGE,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_STORAGE_BARCODE_INVENTORY as t1  , _PFB_STORAGE as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.STORAGE=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_DATE Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.FROM_NO Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.TO_NO Like '%"+P9+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_STORAGE_INVENTORY':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as STORAGE,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_STORAGE_INVENTORY as t1  , _PFB_STORAGE as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.STORAGE=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.FROM_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.TO_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.FROM_NO Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.TO_NO Like '%"+P8+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_STORAGE_BARCODE_STOCK_CARD':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as STORAGE,t3.NAME as LABEL_BARCODE_PLANNING,t1.PLANNING_NAME as PLANNING_NAME,t1.TOTAL_VALUE as TOTAL_VALUE,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID";
      Q = Q + " from _PFB_STORAGE_BARCODE_STOCK_CARD as t1  , _PFB_STORAGE as t2 , _PFB_LABEL_BARCODE_PLANNING as t3";
      if(ID=="*"){
        Q = Q + "  where  t1.STORAGE=t2._ID  and  t1.LABEL_BARCODE_PLANNING=t3._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t3. Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.PLANNING_NAME Like '%"+P3+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_DATE Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.FROM_NO Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.TO_NO Like '%"+P9+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_STORAGE_STOCK_CARD':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as STORAGE,t3.NAME as LABEL_BARCODE_PLANNING,t1.PLANNING_NAME as PLANNING_NAME,t1.TOTAL_VALUE as TOTAL_VALUE,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID";
      Q = Q + " from _PFB_STORAGE_STOCK_CARD as t1  , _PFB_STORAGE as t2 , _PFB_LABEL_BARCODE_PLANNING as t3";
      if(ID=="*"){
        Q = Q + "  where  t1.STORAGE=t2._ID  and  t1.LABEL_BARCODE_PLANNING=t3._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t3. Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.PLANNING_NAME Like '%"+P3+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.FROM_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.TO_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.FROM_NO Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.TO_NO Like '%"+P8+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_PRODUCTING_INPUT_OR_OUTPUT':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_PRODUCTING_INPUT_OR_OUTPUT as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_PRODUCT_FORMULA':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t1.FORMULA_NAME as FORMULA_NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_PRODUCT_FORMULA as t1 ";
      if(ID=="*"){
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t1.FORMULA_NAME Like '%"+P1+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_DATE Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.FROM_NO Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.TO_NO Like '%"+P9+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_CALCULATE_THE_DEVIATION_FROM_FORMULA':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as FORMULA,t1.FORMULA_NAME as FORMULA_NAME,t1.CALC_FROM_DATE as CALC_FROM_DATE,t1.CALC_TO_DATE as CALC_TO_DATE,t1.DEVIATION_PERCENTAGE as DEVIATION_PERCENTAGE,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_CALCULATE_THE_DEVIATION_FROM_FORMULA as t1  , _PFB_PRODUCT_FORMULA as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.FORMULA=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.FORMULA_NAME Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.CALC_FROM_DATE Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.CALC_TO_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.DEVIATION_PERCENTAGE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_DATE Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_DATE Like '%"+P7+"%'"); 
        var P8 = req.body.P8;
        Q = Q + ((P8=='')?"":" and t1.FROM_NO Like '%"+P8+"%'"); 
        var P9 = req.body.P9;
        Q = Q + ((P9=='')?"":" and t1.TO_NO Like '%"+P9+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_FROM_THIS_MATERIAL':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as MATERIAL,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_HOW_MUCH_FROM_THIS_MATERIAL as t1  , _PFB_MATERIAL as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.MATERIAL=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.TOTAL_RECORD Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.TOTAL_NO Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.FROM_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.TO_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_NO Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_NO Like '%"+P7+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_FROM_THIS_ADDITIVES':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as ADDITIVES,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_HOW_MUCH_FROM_THIS_ADDITIVES as t1  , _PFB_ADDITIVES as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.ADDITIVES=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.TOTAL_RECORD Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.TOTAL_NO Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.FROM_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.TO_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_NO Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_NO Like '%"+P7+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_WITH_THIS_DIE_MOLD_TYPE':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as DIE_MOLD_TYPE,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_HOW_MUCH_WITH_THIS_DIE_MOLD_TYPE as t1  , _PFB_DIE_MOLD_TYPE as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.DIE_MOLD_TYPE=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.TOTAL_RECORD Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.TOTAL_NO Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.FROM_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.TO_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_NO Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_NO Like '%"+P7+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_WITH_THIS_MACHINE':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as MACHINE,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_HOW_MUCH_WITH_THIS_MACHINE as t1  , _PFB_MACHINE as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.MACHINE=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.TOTAL_RECORD Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.TOTAL_NO Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.FROM_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.TO_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_NO Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_NO Like '%"+P7+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_INTO_THIS_STORAGE':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as STORAGE,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_HOW_MUCH_INTO_THIS_STORAGE as t1  , _PFB_STORAGE as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.STORAGE=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.TOTAL_RECORD Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.TOTAL_NO Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.FROM_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.TO_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_NO Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_NO Like '%"+P7+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_WITH_THIS_OPERATOR':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as OPERATOR,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _PFB_HOW_MUCH_WITH_THIS_OPERATOR as t1  , _PFB_OPERATOR as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.OPERATOR=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t2. Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.TOTAL_RECORD Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t1.TOTAL_NO Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.FROM_DATE Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.TO_DATE Like '%"+P5+"%'"); 
        var P6 = req.body.P6;
        Q = Q + ((P6=='')?"":" and t1.FROM_NO Like '%"+P6+"%'"); 
        var P7 = req.body.P7;
        Q = Q + ((P7=='')?"":" and t1.TO_NO Like '%"+P7+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_DAILY':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t1.DAILY as DAILY,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_HOW_MUCH_DAILY as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.TOTAL_RECORD Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.TOTAL_NO Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.FROM_DATE Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.TO_DATE Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.FROM_NO Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.TO_NO Like '%"+P6+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_MONTHLY':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t1.MONTHLY as MONTHLY,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_HOW_MUCH_MONTHLY as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.TOTAL_RECORD Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.TOTAL_NO Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.FROM_DATE Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.TO_DATE Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.FROM_NO Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.TO_NO Like '%"+P6+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'PFB_HOW_MUCH_YEARLY':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t1.MONTHLY as MONTHLY,t1.TOTAL_RECORD as TOTAL_RECORD,t1.TOTAL_NO as TOTAL_NO,t1.TOTAL_WEIGHT as TOTAL_WEIGHT,t1.PACKAGING_WEIGHT as PACKAGING_WEIGHT,t1.PURE_WEIGHT as PURE_WEIGHT,t1.DETAIL as DETAIL";
      Q = Q + " from _PFB_HOW_MUCH_YEARLY as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.TOTAL_RECORD Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.TOTAL_NO Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.FROM_DATE Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.TO_DATE Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.FROM_NO Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.TO_NO Like '%"+P6+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_STATION':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_STATION as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_YESNO':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_YESNO as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_MNUOBJTYPE':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_MNUOBJTYPE as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_MNUACCESSFLAG':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_MNUACCESSFLAG as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_MNUMAIN':
      Q = "Select t1._ID as _ID,t1.NAME as NAME,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_MNUMAIN as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.NAME Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P2+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_MNU':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.NAME as NAME,t2.NAME as OBJTYPE,t3.NAME as MNUMAIN,t1.DETAIL as DETAIL,t2._ID as t2ID,t3._ID as t3ID";
      Q = Q + " from _GEN_MNU as t1  , _GEN_MNUOBJTYPE as t2 , _GEN_MNUMAIN as t3";
      if(ID=="*"){
        Q = Q + "  where  t1.OBJTYPE=t2._ID  and  t1.MNUMAIN=t3._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t1.SERIAL Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.NAME Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t2. Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t3. Like '%"+P4+"%'"); 
        var P5 = req.body.P5;
        Q = Q + ((P5=='')?"":" and t1.DETAIL Like '%"+P5+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_MNUACCESS':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.DATE as DATE,t2.NAME as REQUESTUSER,t1.REQUESTUSERNAME as REQUESTUSERNAME,t1.DETAIL as DETAIL,t2._ID as t2ID";
      Q = Q + " from _GEN_MNUACCESS as t1  , _GEN_U as t2";
      if(ID=="*"){
        Q = Q + "  where  t1.REQUESTUSER=t2._ID ";
        var P1 = req.body.P1;
        Q = Q + ((P1=='')?"":" and t1.SERIAL Like '%"+P1+"%'"); 
        var P2 = req.body.P2;
        Q = Q + ((P2=='')?"":" and t1.DATE Like '%"+P2+"%'"); 
        var P3 = req.body.P3;
        Q = Q + ((P3=='')?"":" and t2. Like '%"+P3+"%'"); 
        var P4 = req.body.P4;
        Q = Q + ((P4=='')?"":" and t1.REQUESTUSERNAME Like '%"+P4+"%'"); 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_U':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.NAME as NAME,t1.PASSWORD as PASSWORD,t1.TELL as TELL,t1.MOBILE as MOBILE,t1.ADDRESS as ADDRESS,t1.ACCOUNTNO as ACCOUNTNO,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_U as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.SERIAL Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.NAME Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.PASSWORD Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.TELL Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.MOBILE Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.ADDRESS Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.ACCOUNTNO Like '%"+P7+"%'"); sw=true; } 
        var P8 = req.body.P8;
        if(P8!='') { Q = Q + ((P8=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P8+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_SURVEY':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.FINGERPRINT as FINGERPRINT,t1.USER as USER,t1.FORM as FORM,t1.SUCCESSED as SUCCESSED,t1.COMFORTABLE as COMFORTABLE,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_SURVEY as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.SERIAL Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.FINGERPRINT Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.USER Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.FORM Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.SUCCESSED Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.COMFORTABLE Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P7+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_LOG':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.FINGERPRINT as FINGERPRINT,t1.USER as USER,t1.FORM as FORM,t1.COMMAND as COMMAND,t1.VALUE as VALUE,t1.RESULT as RESULT,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_LOG as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.SERIAL Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.FINGERPRINT Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.USER Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.FORM Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.COMMAND Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.VALUE Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.RESULT Like '%"+P7+"%'"); sw=true; } 
        var P8 = req.body.P8;
        if(P8!='') { Q = Q + ((P8=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P8+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_LOG_FIELDS':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.GEN_LOG as GEN_LOG,t1.FIELD as FIELD,t1.COMMAND as COMMAND,t1.VALUE as VALUE,t1.RESULT as RESULT,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_LOG_FIELDS as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.SERIAL Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.GEN_LOG Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.FIELD Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.COMMAND Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.VALUE Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.RESULT Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P7+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_LAST_STATUS':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.FINGERPRINT as FINGERPRINT,t1.USER as USER,t1.FORM as FORM,t1.UPFIELDSJSON as UPFIELDSJSON,t1.GRIDFIELDSJSON as GRIDFIELDSJSON,t1.SEARCHFIELDSJSON as SEARCHFIELDSJSON,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_LAST_STATUS as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.SERIAL Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.FINGERPRINT Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.USER Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.FORM Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.UPFIELDSJSON Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.GRIDFIELDSJSON Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.SEARCHFIELDSJSON Like '%"+P7+"%'"); sw=true; } 
        var P8 = req.body.P8;
        if(P8!='') { Q = Q + ((P8=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P8+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;
    case 'GEN_CALENDARS':
      Q = "Select t1._ID as _ID,t1.SERIAL as SERIAL,t1.JUDATE as JUDATE,t1.HDATE as HDATE,t1.HIJDATE as HIJDATE,t1.PDATE as PDATE,t1.BDATE as BDATE,t1.HINDATE as HINDATE,t1.JADATE as JADATE,t1.CDATE as CDATE,t1.TIMEZONE as TIMEZONE,t1.WDAY as WDAY,t1.TIME1 as TIME1,t1.TIME2 as TIME2,t1.TIME3 as TIME3,t1.TIME4 as TIME4,t1.TIME5 as TIME5,t1.DAYTYPE as DAYTYPE,t1.DETAIL as DETAIL";
      Q = Q + " from _GEN_CALENDARS as t1 ";
      if(ID=="*"){
        var sw=false;
        var P1 = req.body.P1;
        if(P1!='') { Q = Q + ((P1=='')?"":" where t1.SERIAL Like '%"+P1+"%'"); sw=true; } 
        var P2 = req.body.P2;
        if(P2!='') { Q = Q + ((P2=='')?"":((sw)?" and ":" where ")+ " t1.JUDATE Like '%"+P2+"%'"); sw=true; } 
        var P3 = req.body.P3;
        if(P3!='') { Q = Q + ((P3=='')?"":((sw)?" and ":" where ")+ " t1.HDATE Like '%"+P3+"%'"); sw=true; } 
        var P4 = req.body.P4;
        if(P4!='') { Q = Q + ((P4=='')?"":((sw)?" and ":" where ")+ " t1.HIJDATE Like '%"+P4+"%'"); sw=true; } 
        var P5 = req.body.P5;
        if(P5!='') { Q = Q + ((P5=='')?"":((sw)?" and ":" where ")+ " t1.PDATE Like '%"+P5+"%'"); sw=true; } 
        var P6 = req.body.P6;
        if(P6!='') { Q = Q + ((P6=='')?"":((sw)?" and ":" where ")+ " t1.BDATE Like '%"+P6+"%'"); sw=true; } 
        var P7 = req.body.P7;
        if(P7!='') { Q = Q + ((P7=='')?"":((sw)?" and ":" where ")+ " t1.HINDATE Like '%"+P7+"%'"); sw=true; } 
        var P8 = req.body.P8;
        if(P8!='') { Q = Q + ((P8=='')?"":((sw)?" and ":" where ")+ " t1.JADATE Like '%"+P8+"%'"); sw=true; } 
        var P9 = req.body.P9;
        if(P9!='') { Q = Q + ((P9=='')?"":((sw)?" and ":" where ")+ " t1.CDATE Like '%"+P9+"%'"); sw=true; } 
        var P10 = req.body.P10;
        if(P10!='') { Q = Q + ((P10=='')?"":((sw)?" and ":" where ")+ " t1.TIMEZONE Like '%"+P10+"%'"); sw=true; } 
        var P11 = req.body.P11;
        if(P11!='') { Q = Q + ((P11=='')?"":((sw)?" and ":" where ")+ " t1.WDAY Like '%"+P11+"%'"); sw=true; } 
        var P12 = req.body.P12;
        if(P12!='') { Q = Q + ((P12=='')?"":((sw)?" and ":" where ")+ " t1.TIME1 Like '%"+P12+"%'"); sw=true; } 
        var P13 = req.body.P13;
        if(P13!='') { Q = Q + ((P13=='')?"":((sw)?" and ":" where ")+ " t1.TIME2 Like '%"+P13+"%'"); sw=true; } 
        var P14 = req.body.P14;
        if(P14!='') { Q = Q + ((P14=='')?"":((sw)?" and ":" where ")+ " t1.TIME3 Like '%"+P14+"%'"); sw=true; } 
        var P15 = req.body.P15;
        if(P15!='') { Q = Q + ((P15=='')?"":((sw)?" and ":" where ")+ " t1.TIME4 Like '%"+P15+"%'"); sw=true; } 
        var P16 = req.body.P16;
        if(P16!='') { Q = Q + ((P16=='')?"":((sw)?" and ":" where ")+ " t1.TIME5 Like '%"+P16+"%'"); sw=true; } 
        var P17 = req.body.P17;
        if(P17!='') { Q = Q + ((P17=='')?"":((sw)?" and ":" where ")+ " t1.DAYTYPE Like '%"+P17+"%'"); sw=true; } 
        var P18 = req.body.P18;
        if(P18!='') { Q = Q + ((P18=='')?"":((sw)?" and ":" where ")+ " t1.DETAIL Like '%"+P18+"%'"); sw=true; } 
      }
      else{
        Q = Q + " where " + checkID ;
      }
      break;

    default:
      Q="SELECT * from _" + tableName + " as t1 "+((checkID =='') ? "" : " where " + checkID );
  }
  Q = Q + " order by 2 ";
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
    req.query(Q).then(function (recordset) {
      //console.log(recordset);
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
N O D E js  W E B    A P I       type : POST 
Save a survey
http://localhost:2247/Survey
Successed as Percentage of Successed Requirements
Comfortable as Percentage of Comfortable and Catisfaction
-----------------------------------------------------------------*/
app.post('/Survey',function(req,res){
  var Successed =req.body.Successed ;
  var Comfortable = req.body.Comfortable;
  var Q="Insert into ";
  console.log(Q);
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
    req.query(Q).then(function (recordset) {
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
N O D E js  W E B    A P I       type : GET
Populate datalist options
http://localhost:2247/Populate_Datalist_Options?t=GEN_MNU&f=NAME&c=1
tableName as Table Name
fieldName as FIELD
catName as reserved
-----------------------------------------------------------------*/
app.get('/Populate_Datalist_Options', function (req, res) {
  var tableName = req.param('t');
  var fieldName = req.param('f');
  var catName = req.param('c');
  console.log("select "+fieldName +" as VALUE,_ID as ID from [PlasticFactoryBarcode].[dbo].[_"+tableName+"]");

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
      req.query("select  "+fieldName +" as NAME,cast(_ID AS varchar) as ID from [PlasticFactoryBarcode].[dbo].[_"+tableName+"]").then(function (recordset) {
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
N O D E js  W E B    A P I       type : GET 
Finding First available numeric field in a table
http://localhost:2247/Table_Field_Default?t=GEN_MNU&f=SERIAL&c=1
tableName as Table Name
fieldName as FIELD
catName as reserved
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
N O D E js  W E B    A P I       type : GET 
Finding date ( TODAY )
http://localhost:2247/Today?c=1
catName as reserved
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
N O D E js  W E B    A P I       type : GET 
Finding First SERIAL in GEN_MNU table
http://localhost:2247/Table_Field_Default?t=GEN_MNU&f=SERIAL&c=1
tableName as Table Name
fieldName as FIELD
catName as reserved
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
/*-- -------------------------------------------------------------
N O D E js  W E B    A P I       type : POST 
RESERVED
http://localhost:2247/t
-----------------------------------------------------------------*/
app.post('/t',function(req,res){
  console.log("User name = "+user_name);
  res.status(200).json("{'menu': test1}");
});


/*-- -------------------------------------------------------------
N O D E js  W E B    A P I
listen at port # 2247
-----------------------------------------------------------------*/
var server = app.listen(2247, process.argv[2], function () {
  console.log('Server is running 2247..');
});
