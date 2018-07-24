/*-- -------------------------------------------------------------
A N G U L A R     J S     O F    PFB_LABEL_BARCODE_PLANNING app 
-----------------------------------------------------------------*/ 
var app = angular.module("app",[]);
/*---------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Common Controller
---------------------------------------------------------------*/
app.controller('PFB_LABEL_BARCODE_PLANNING_Common',['$scope',function($scope){
/*-------------------------------------------------------------
A N G U L A R     J S    O F    getdetails function 
-------------------------------------------------------------*/
  $scope.getdetails = function (element) {
    var x = element;
    // RESERVED
  };
/*-------------------------------------------------------------
A N G U L A R     J S    O F    Loading_Data function 
     value is current ID for loading record and showing in page 
-------------------------------------------------------------*/
  $scope.Loading_Data = function(value)
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText).recordset[0];

          $scope.PFB_LABEL_BARCODE_PLANNING_SERIAL=myObj.SERIAL;
          $scope.PFB_LABEL_BARCODE_PLANNING_DATE=myObj.DATE;
          $scope.PFB_LABEL_BARCODE_PLANNING_MATERIAL=myObj.MATERIAL;
          $scope.PFB_LABEL_BARCODE_PLANNING_ADDITIVES=myObj.ADDITIVES;
          $scope.PFB_LABEL_BARCODE_PLANNING_COLOR=myObj.COLOR;
          $scope.PFB_LABEL_BARCODE_PLANNING_GRADE=myObj.GRADE;
          $scope.PFB_LABEL_BARCODE_PLANNING_DIE_MOLD_TYPE=myObj.DIE_MOLD_TYPE;
          $scope.PFB_LABEL_BARCODE_PLANNING_PRODUCT_LENGHT=myObj.PRODUCT_LENGHT;
          $scope.PFB_LABEL_BARCODE_PLANNING_PRODUCT_WIDTH=myObj.PRODUCT_WIDTH;
          $scope.PFB_LABEL_BARCODE_PLANNING_PRODUCT_TICKNESS=myObj.PRODUCT_TICKNESS;
          $scope.PFB_LABEL_BARCODE_PLANNING_PACKAGING=myObj.PACKAGING;
          $scope.PFB_LABEL_BARCODE_PLANNING_NO_IN_BAG=myObj.NO_IN_BAG;
          $scope.PFB_LABEL_BARCODE_PLANNING_BAG_IN_PACK=myObj.BAG_IN_PACK;
          $scope.PFB_LABEL_BARCODE_PLANNING_TOTAL_NO=myObj.TOTAL_NO;
          $scope.PFB_LABEL_BARCODE_PLANNING_MEASUREMENT=myObj.MEASUREMENT;
          $scope.PFB_LABEL_BARCODE_PLANNING_MACHINE=myObj.MACHINE;
          $scope.PFB_LABEL_BARCODE_PLANNING_STORAGE=myObj.STORAGE;
          $scope.PFB_LABEL_BARCODE_PLANNING_PLANNING_NAME=myObj.PLANNING_NAME;
          $scope.PFB_LABEL_BARCODE_PLANNING_DETAIL=myObj.DETAIL;
          $scope.PFB_LABEL_BARCODE_PLANNING_FROM_DATE=myObj.FROM_DATE;
          $scope.PFB_LABEL_BARCODE_PLANNING_TO_DATE=myObj.TO_DATE;
          $scope.PFB_LABEL_BARCODE_PLANNING_FROM_NO=myObj.FROM_NO;
          $scope.PFB_LABEL_BARCODE_PLANNING_TO_NO=myObj.TO_NO;

        $scope.$apply();
      }
    };
    xhttp.open("POST", "http://localhost:2247/Query", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    sessionStorage.setItem("Cur_ID", value);
    xhttp.send("tableName=PFB_LABEL_BARCODE_PLANNING&ID="+value);
  }
/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Search function 
     using all tags with id started by 'searchField' for searching
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_Search = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText).recordsets[0];
        var txt="";
        txt += "<table class='searchTable' style='width:100%' >" ;
        txt += "<tr>";

        txt += "<th>SERIAL…</th>";
        txt += "<th>DATE…</th>";
        txt += "<th>MATERIAL…</th>";
        txt += "<th>ADDITIVES…</th>";
        txt += "<th>COLOR…</th>";
        txt += "<th>GRADE…</th>";
        txt += "<th>DIE/MOLD/TYPE…</th>";
        txt += "<th>PRODUCT LENGHT</th>";
        txt += "<th>PRODUCT WIDTH</th>";
        txt += "<th>PRODUCT TICKNESS</th>";
        txt += "<th>PACKAGING…</th>";
        txt += "<th>NO IN BAG</th>";
        txt += "<th>BAG IN PACKAGE</th>";
        txt += "<th>TOTAL NO</th>";
        txt += "<th>MEASUREMENT…</th>";
        txt += "<th>MACHINE…</th>";
        txt += "<th>STORAGE…</th>";
        txt += "<th>PLANNING NAME</th>";
        txt += "<th>DETAIL</th>";
       txt += "</tr>";
        for (x in myObj) {
          txt += "<tr id='_ID" + myObj[x]._ID + "'><td style='display:none;'>" + myObj[x]._ID + "</td>";

        txt += "<td>" + myObj[x].SERIAL + "</td>";
        txt += "<td>" + myObj[x].DATE + "</td>";
        txt += "<td>" + myObj[x].MATERIAL + "</td>";
        txt += "<td>" + myObj[x].ADDITIVES + "</td>";
        txt += "<td>" + myObj[x].COLOR + "</td>";
        txt += "<td>" + myObj[x].GRADE + "</td>";
        txt += "<td>" + myObj[x].DIE_MOLD_TYPE + "</td>";
        txt += "<td>" + myObj[x].PRODUCT_LENGHT + "</td>";
        txt += "<td>" + myObj[x].PRODUCT_WIDTH + "</td>";
        txt += "<td>" + myObj[x].PRODUCT_TICKNESS + "</td>";
        txt += "<td>" + myObj[x].PACKAGING + "</td>";
        txt += "<td>" + myObj[x].NO_IN_BAG + "</td>";
        txt += "<td>" + myObj[x].BAG_IN_PACK + "</td>";
        txt += "<td>" + myObj[x].TOTAL_NO + "</td>";
        txt += "<td>" + myObj[x].MEASUREMENT + "</td>";
        txt += "<td>" + myObj[x].MACHINE + "</td>";
        txt += "<td>" + myObj[x].STORAGE + "</td>";
        txt += "<td>" + myObj[x].PLANNING_NAME + "</td>";
        txt += "<td>" + myObj[x].DETAIL + "</td>";
          txt = txt+ "</tr>";
        }
        txt = txt+ "</table>";
        document.getElementById("searchTable").innerHTML = txt;
        $('#searchTable tr').click(function(){
          $(this).addClass('selected').siblings().removeClass('selected');
          var value=$(this).find('td:first').html();
          $scope.Loading_Data(value);
          //alert(value);
        });
      }
    };
    xhttp.open("POST", "http://localhost:2247/Query", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var Q = "tableName=PFB_LABEL_BARCODE_PLANNING&ID=*";

  Q=Q+"&P1="+document.getElementById('searchFieldDATE_Filter').value;
  Q=Q+"&P2="+document.getElementById('searchListMATERIAL').value;
  Q=Q+"&P3="+document.getElementById('searchListADDITIVES').value;
  Q=Q+"&P4="+document.getElementById('searchListCOLOR').value;
  Q=Q+"&P5="+document.getElementById('searchListGRADE').value;
  Q=Q+"&P6="+document.getElementById('searchListDIE_MOLD_TYPE').value;
  Q=Q+"&P7="+document.getElementById('searchFieldPRODUCT_LENGHT_Filter').value;
  Q=Q+"&P8="+document.getElementById('searchFieldPRODUCT_WIDTH_Filter').value;
  Q=Q+"&P9="+document.getElementById('searchFieldPRODUCT_TICKNESS_Filter').value;
  Q=Q+"&P10="+document.getElementById('searchListPACKAGING').value;
  Q=Q+"&P11="+document.getElementById('searchFieldNO_IN_BAG_Filter').value;
  Q=Q+"&P12="+document.getElementById('searchFieldBAG_IN_PACK_Filter').value;
  Q=Q+"&P13="+document.getElementById('searchFieldTOTAL_NO_Filter').value;
  Q=Q+"&P14="+document.getElementById('searchListMEASUREMENT').value;
  Q=Q+"&P15="+document.getElementById('searchListMACHINE').value;
  Q=Q+"&P16="+document.getElementById('searchListSTORAGE').value;
  Q=Q+"&P17="+document.getElementById('searchFieldPLANNING_NAME_Filter').value;
  Q=Q+"&P18="+document.getElementById('searchFieldFROM_DATE_Filter').value;
  Q=Q+"&P19="+document.getElementById('searchFieldTO_DATE_Filter').value;
  Q=Q+"&P20="+document.getElementById('searchFieldFROM_NO_Filter').value;
  Q=Q+"&P21="+document.getElementById('searchFieldTO_NO_Filter').value;

    xhttp.send(Q);
  };

/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Submit function 
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_Submit = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert( this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:2247/Submit", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var Q = "tableName=PFB_LABEL_BARCODE_PLANNING";

    Q = Q + "&P1="+document.getElementById('formFieldSERIAL').value;
    Q = Q + "&P2="+document.getElementById('formFieldDATE').value;
    Q = Q + "&P3="+document.getElementById('formListMATERIAL').value;
    Q = Q + "&P4="+document.getElementById('formListADDITIVES').value;
    Q = Q + "&P5="+document.getElementById('formListCOLOR').value;
    Q = Q + "&P6="+document.getElementById('formListGRADE').value;
    Q = Q + "&P7="+document.getElementById('formListDIE_MOLD_TYPE').value;
    Q = Q + "&P8="+document.getElementById('formFieldPRODUCT_LENGHT').value;
    Q = Q + "&P9="+document.getElementById('formFieldPRODUCT_WIDTH').value;
    Q = Q + "&P10="+document.getElementById('formFieldPRODUCT_TICKNESS').value;
    Q = Q + "&P11="+document.getElementById('formListPACKAGING').value;
    Q = Q + "&P12="+document.getElementById('formFieldNO_IN_BAG').value;
    Q = Q + "&P13="+document.getElementById('formFieldBAG_IN_PACK').value;
    Q = Q + "&P14="+document.getElementById('formFieldTOTAL_NO').value;
    Q = Q + "&P15="+document.getElementById('formListMEASUREMENT').value;
    Q = Q + "&P16="+document.getElementById('formListMACHINE').value;
    Q = Q + "&P17="+document.getElementById('formListSTORAGE').value;
    Q = Q + "&P18="+document.getElementById('formFieldPLANNING_NAME').value;
    Q = Q + "&P19="+document.getElementById('formFieldDETAIL').value;
    Q = Q + "&P20="+document.getElementById('formFieldFROM_DATE').value;
    Q = Q + "&P21="+document.getElementById('formFieldTO_DATE').value;
    Q = Q + "&P22="+document.getElementById('formFieldFROM_NO').value;
    Q = Q + "&P23="+document.getElementById('formFieldTO_NO').value;

    xhttp.send(Q);
  };

/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Export function 
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_Export = function() {
    // RESERVED
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert( this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:2247/t", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("t=Export&lname=Ford");
  };
/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Themes function 
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_Themes = function() {
    var newTheme = document.getElementById("changingThemes").value;
    localStorage.setItem("Cur_Themes", newTheme);
    alert(localStorage.getItem("Cur_Themes"));
  };
/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Survey function 
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_Survey = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert( this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:2247/Survey", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var Successed = document.getElementById("Successed").value;
    var Comfortable = document.getElementById("Comfortable").value;
    xhttp.send("Successed="+Successed+"&Comfortable="+Comfortable);
  };

/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Print function 
-------------------------------------------------------------*/
    $scope.PFB_LABEL_BARCODE_PLANNING_Print = function() {
    window.print();
    };
/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_New function 
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_New = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert( this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:2247/t", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("t=New&lname=Ford");
  };
/*-------------------------------------------------------------
A N G U L A R     J S    O F    PFB_LABEL_BARCODE_PLANNING_Delete function 
-------------------------------------------------------------*/
  $scope.PFB_LABEL_BARCODE_PLANNING_Delete = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert( this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:2247/Delete", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var value="0";
    if(sessionStorage.getItem("Cur_ID")!=null ){ value=sessionStorage.getItem("Cur_ID");}
    xhttp.send("tableName=PFB_LABEL_BARCODE_PLANNING&ID="+value);
  };
}]);

/*--------------------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T    O F    SERIAL  Finding first available SERIAL 
---------------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_SERIAL_default',['$scope','$http',function($scope,$http){
  //$scope.PFB_LABEL_BARCODE_PLANNING_SERIAL=0;
  $http({
    url: 'http://localhost:2247/First_available_SERIAL?t=PFB_LABEL_BARCODE_PLANNING&f=SERIAL&c=1',
    method : 'GET'
  }).then(function(resp){
    //success function
    var obj =resp.data;
    //$scope.PFB_LABEL_BARCODE_PLANNING_SERIAL= obj.recordsets[0][0].SERIAL;
  },function(resp){
    //failure function
    //alert("Failure "+resp.request);
    //$scope.PFB_LABEL_BARCODE_PLANNING_SERIAL=1;
  });
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T    O F    DATE  Finding date ( TODAY )
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_DATE_default',['$scope','$http',function($scope,$http){
  //$scope.PFB_LABEL_BARCODE_PLANNING_DATE=0;
  $http({
    url: 'http://localhost:2247/Today?c=1',
    method : 'GET'
  }).then(function(resp){
    //success function
    var obj =resp.data;var d = new Date(obj.recordsets[0][0].DATE.substring(0, 10));
    //$scope.PFB_LABEL_BARCODE_PLANNING_DATE= d;
  },function(resp){
    //failure function
    //alert("Failure "+resp.request);
    //$scope.PFB_LABEL_BARCODE_PLANNING_DATE=1;
  });
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    PRODUCT_LENGHT  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_PRODUCT_LENGHT_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    PRODUCT_WIDTH  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_PRODUCT_WIDTH_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    PRODUCT_TICKNESS  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_PRODUCT_TICKNESS_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    NO_IN_BAG  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_NO_IN_BAG_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    BAG_IN_PACK  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_BAG_IN_PACK_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    TOTAL_NO  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_TOTAL_NO_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    PLANNING_NAME  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_PLANNING_NAME_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    DETAIL  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_DETAIL_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    FROM_DATE  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_FROM_DATE_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    TO_DATE  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_TO_DATE_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    FROM_NO  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_FROM_NO_default',['$scope','$http',function($scope,$http){
}]);
/*-- ----------------------------------------------------------------------------------
D E F A U L T    A N G U L A R     S C R I P T     O F    TO_NO  Reserved
-------------------------------------------------------------------------------------*/ 
app.controller('PFB_LABEL_BARCODE_PLANNING_TO_NO_default',['$scope','$http',function($scope,$http){
}]);
