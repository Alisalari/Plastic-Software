
/*-----------------------------------------------------------------------
A L L     O N L O A D      R O U T I N E S     O F    PFB_LABEL_BARCODE_PLANNING
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_onload() {
/*-----------------------------------------------------------------------------
set Cur_Themes (represent current themes file name and location) for first time
-----------------------------------------------------------------------------*/
  localStorage.setItem("Cur_Themes", "../css3/theme.css");
/*--------------------------------------------------------------
set Cur_Form (represent current form or web page) for first time
--------------------------------------------------------------*/
  localStorage.setItem("Cur_Form", "PFB_LABEL_BARCODE_PLANNING");
/*----------------------------------------------------------------------------------
set Cur_ID(represent current _ID field in database) for first time. 0 means new form
----------------------------------------------------------------------------------*/
  sessionStorage.setItem("Cur_ID", "0");
/*----------------------------------------------------------------------
set Cur_FingerPrint(represent current current front end OS and hardware)
----------------------------------------------------------------------*/
  var fp1 = new Fingerprint();
  if(localStorage.getItem("Cur_FingerPrint")==null ){
    localStorage.setItem("Cur_FingerPrint", fp1.get());
  }
  else{
  if(localStorage.getItem("Cur_FingerPrint")!=fp1.get())
    localStorage.setItem("Cur_FingerPrint", fp1.get());
  }
  PFB_LABEL_BARCODE_PLANNING_MATERIAL_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_MATERIAL_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_ADDITIVES_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_ADDITIVES_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_COLOR_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_COLOR_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_GRADE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_GRADE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_DIE_MOLD_TYPE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_DIE_MOLD_TYPE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_PACKAGING_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_PACKAGING_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_MEASUREMENT_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_MEASUREMENT_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_MACHINE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_MACHINE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_STORAGE_to_datalist_onload();
  PFB_LABEL_BARCODE_PLANNING_searching_STORAGE_to_datalist_onload();
}

/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    MATERIAL in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_MATERIAL_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListMATERIAL');
      var input = document.getElementById('formListMATERIAL');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_MATERIAL&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    MATERIAL in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_MATERIAL_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListMATERIAL');
      var input = document.getElementById('searchListMATERIAL');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_MATERIAL&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    ADDITIVES in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_ADDITIVES_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListADDITIVES');
      var input = document.getElementById('formListADDITIVES');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_ADDITIVES&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    ADDITIVES in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_ADDITIVES_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListADDITIVES');
      var input = document.getElementById('searchListADDITIVES');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_ADDITIVES&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    COLOR in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_COLOR_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListCOLOR');
      var input = document.getElementById('formListCOLOR');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_COLOR&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    COLOR in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_COLOR_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListCOLOR');
      var input = document.getElementById('searchListCOLOR');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_COLOR&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    GRADE in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_GRADE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListGRADE');
      var input = document.getElementById('formListGRADE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_GRADE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    GRADE in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_GRADE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListGRADE');
      var input = document.getElementById('searchListGRADE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_GRADE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    DIE_MOLD_TYPE in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_DIE_MOLD_TYPE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListDIE_MOLD_TYPE');
      var input = document.getElementById('formListDIE_MOLD_TYPE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_DIE_MOLD_TYPE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    DIE_MOLD_TYPE in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_DIE_MOLD_TYPE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListDIE_MOLD_TYPE');
      var input = document.getElementById('searchListDIE_MOLD_TYPE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_DIE_MOLD_TYPE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    PACKAGING in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_PACKAGING_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListPACKAGING');
      var input = document.getElementById('formListPACKAGING');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_PACKAGING&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    PACKAGING in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_PACKAGING_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListPACKAGING');
      var input = document.getElementById('searchListPACKAGING');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_PACKAGING&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    MEASUREMENT in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_MEASUREMENT_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListMEASUREMENT');
      var input = document.getElementById('formListMEASUREMENT');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_MEASUREMENT&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    MEASUREMENT in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_MEASUREMENT_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListMEASUREMENT');
      var input = document.getElementById('searchListMEASUREMENT');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_MEASUREMENT&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    MACHINE in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_MACHINE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListMACHINE');
      var input = document.getElementById('formListMACHINE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_MACHINE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    MACHINE in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_MACHINE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListMACHINE');
      var input = document.getElementById('searchListMACHINE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_MACHINE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    STORAGE in up form    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_STORAGE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('formDataListSTORAGE');
      var input = document.getElementById('formListSTORAGE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_STORAGE&f=NAME&c=1", true);
  xhttp.send();
};
/*-----------------------------------------------------------------------
F I L L I N G    D A T A L I S T    STORAGE in search    B Y     W E B    A P I 
-----------------------------------------------------------------------*/ 
function PFB_LABEL_BARCODE_PLANNING_searching_STORAGE_to_datalist_onload(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var dataList = document.getElementById('searchDataListSTORAGE');
      var input = document.getElementById('searchListSTORAGE');
      var x= new Array();
      x=JSON.parse(this.responseText);
      // Loop over the JSON array.
      x.forEach(item=> {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item.NAME;
        option.tittle = item.ID;
        option.label = item.ID;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });
      // Update the placeholder text.
      input.placeholder = "e.g. datalist";
    }
    else{
      input.placeholder = "datalist is EMPTY";
    }
  };
  xhttp.open("GET", "http://localhost:2247/Populate_Datalist_Options?t=PFB_STORAGE&f=NAME&c=1", true);
  xhttp.send();
};
