'use strict';

///Hours of operation 6am - 8pm
///Daily sales projections based on:
///Minimum and Max number of customers per hours
///Average number of cookies per customers

///User requirements
///Add or remove location
///Easily change number of customers and average cookies based on special circumstances

///Location Object has:
///Min number of customers
///Max number of customers
///Average cookie purchase per customers
///function: random  number of customers per hour based on min/Max
///Simulated number of cookies purchased each hour
///Array of all calculated properties

///LOCATION OBJECTS
///Constructor function for locations
function Location(name, minCustomers, maxCustomers,cookieAverage){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookieAverage = cookieAverage;
  this.openHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
  this.hourlyCookies = randomizedCookieHours(this);
  this.hourlyEmployees = salmonTosser(this);
}

///Prints out location row data
Location.prototype.tableRow = function(){
  var tableDataRow = document.createElement('tr');
  var tableDataCell = document.createElement('td');
  tableDataCell.textContent = this.name;
  tableDataCell.setAttribute('class', 'location');
  tableDataRow.appendChild(tableDataCell);

  for(var i = 0; i < this.hourlyCookies.length; i++){
    var hourlyCookiesCell = document.createElement('td');
    hourlyCookiesCell.textContent = this.hourlyCookies[i];
    tableDataRow.appendChild(hourlyCookiesCell);
  }
  var dailyTotalCell = document.createElement('td');
  dailyTotalCell.textContent = dailyTotal(this);
  tableDataRow.appendChild(dailyTotalCell);

  tableBody.appendChild(tableDataRow);
};

///Print number of employees needed to employee-table
Location.prototype.employeeRow = function(){
  var employeeTableRowEl = document.createElement('tr');
  var employeeTableCellEl = document.createElement('td');

  employeeTableCellEl.textContent = this.name;
  employeeTableCellEl.setAttribute('class', 'location');
  employeeTableRowEl.appendChild(employeeTableCellEl);

  for(var i = 0; i < this.hourlyEmployees.length; i++){
    var hourlyEmployeesCell = document.createElement('td');
    hourlyEmployeesCell.textContent = this.hourlyEmployees[i];
    employeeTableRowEl.appendChild(hourlyEmployeesCell);
  }
  // var dailyTotalCell = document.createElement('td');
  // dailyTotalCell.textContent = 'Total!';  ///turn this into a function
  // employeeTableRowEl.appendChild(dailyTotalCell);

  employeeTableBody.appendChild(employeeTableRowEl);
};

///Calculates number of employees needed in an hour. Min of 2
function salmonTosser(location){
  var salmonTosserHours = [];
  var tosserPerHour = 0;

  for(var i = 0; i < location.hourlyCookies.length; i++){
    tosserPerHour = Math.ceil((location.hourlyCookies[i]) / 20);
    if(tosserPerHour === 1){
      tosserPerHour += 1;
    }
    salmonTosserHours.push(tosserPerHour);
  }
  return salmonTosserHours;
}

///Randomize cookie total for 1 hour based on paramaters of location
function randomizedCookie(min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
}

///Creates array that randomizes cookies per hour
function randomizedCookieHours(location){
  var hourlyCookies = [];
  for(var i = 0; i < location.openHours.length; i++){
    hourlyCookies.push(randomizedCookie(location.minCustomers, location.maxCustomers, location.cookieAverage));
  }
  return hourlyCookies;
}

///Caluclates total of cookies for a location for all day
function dailyTotal(location){
  var total = 0;
  for(var i = 0; i < location.hourlyCookies.length; i++){
    total += location.hourlyCookies[i];
  }
  finalTotal += total; ///Total for all cookies at all locations
  return total;
}

///Prints out the table. Has functions for Header, Footer and goes through the render function of the Location object for each location
function printTable(){
  ///Table head
  tableHead(locationArray[0].openHours);
  tableBody = document.createElement('tbody');
  tableBody.setAttribute('id', 'table-body');

  tableEl.appendChild(tableBody);

  ///Triggers the render method for each location in LocationArray
  for(var i = 0; i < locationArray.length; i++){
    locationArray[i].tableRow(locationArray[i]);
  }
  ///Set individual ids for each row
  setTableRowId();

  ///Renders table footer
  tableFooter();

  ///For employee table
  for(var i = 0; i < locationArray.length; i++){
    locationArray[i].employeeRow(locationArray[i]);
  }
}

///Creates the table header
function tableHead(hours){
  var tableHeader = document.createElement('thead');
  var tableHeaderRow = document.createElement('tr');
  var tableHeaderLocationCell = document.createElement('th');
  tableHeaderRow.appendChild(tableHeaderLocationCell);

///For Employee table
  var employeeHeader = document.createElement('thead');
  var employeeHeaderRow = document.createElement('tr');
  var employeeHeaderLocationCell = document.createElement('th');
  employeeHeaderRow.appendChild(employeeHeaderLocationCell);

///Creates a header cell for each hour in the first location in the LocationArray
  for(var i = 0; i < hours.length; i++){
    var tableHeaderCell = document.createElement('th');
    tableHeaderCell.textContent = hours[i];
    tableHeaderRow.appendChild(tableHeaderCell);

    ///For employees
    var employeeHeaderCell = document.createElement('th');
    employeeHeaderCell.textContent = hours[i];
    employeeHeaderRow.appendChild(employeeHeaderCell);
  }
  var tableHeaderTotal = document.createElement('th');
  tableHeaderTotal.textContent = 'Daily Total';

  tableHeaderRow.appendChild(tableHeaderTotal);
  tableEl.appendChild(tableHeader);

  employeeHeader.appendChild(employeeHeaderRow);
  employeeTable.appendChild(employeeHeader); ///This is for the employees

  tableHeader.appendChild(tableHeaderRow);
}

///Creates the table footer and adds the totals for each hour
function tableFooter(){
  var tfootEl = document.createElement('tfoot');
  var tfootCell = document.createElement('th');
  var tfootTotal = document.createElement('th');

  tfootTotal.textContent = finalTotal;
  tfootCell.textContent = 'Total Cookies';
  tfootEl.appendChild(tfootCell);

///Adds the totals for each hour
  for(var i = 0; i < locationArray[0].openHours.length; i++){
    var tableFooterTotalEl = document.createElement('th');
    tableFooterTotalEl.textContent = columnTotal(i);
    tfootEl.appendChild(tableFooterTotalEl);
  }
  tfootEl.appendChild(tfootTotal);
  tableEl.appendChild(tfootEl);
}

///Calculates the total cookies for one hour
function columnTotal(hour){
  var total = 0;
  for(var i = 0; i < locationArray.length; i++){
    total += locationArray[i].hourlyCookies[hour];
  }
  return total;
}

///Populate Update store form options

function updateStoreOption(){
  for(var i = 0; i < locationArray.length; i++){
    storeNameOption.innerHTML += '<option value="option' + i + '">' + locationArray[i].name + '</option>';
  }
}

///Sets unique IDs for each Location to be used for submit update of a location
function setTableRowId(){
  var option = document.getElementsByClassName('location');
  for(var j = 0; j < option.length; j++){
    var optionParent = option[j].parentElement;
    optionParent.setAttribute('id', 'option' + j);
  }
}

var finalTotal = 0;
///Array of all locations -used to print out location and cookie totals
var pike = new Location('1st and Pike',23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20,	38,	2.3);
var alki = new Location('Alki', 2, 16, 4.6);

var locationArray = [pike, seaTac, seattleCenter, capitolHill, alki];
console.log(locationArray);

///Form update location
var storeNameOption = document.getElementById('storeName');

///Gets the attribute where the Table is in the HTML
var tableEl = document.getElementById('location-table');
var employeeTable = document.getElementById('employee-table');
var employeeTableBody = document.getElementById('employee-table-body');
///Table Body element to append the table body to in printTable(); Not sure why I can't seem to make things work without this!
var tableBody;

printTable();
updateStoreOption();

////Form Submit
var formEl = document.getElementById('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.store.value);
  var store = event.target.store.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var cookieAverage = event.target.cookieAverage.value;
  var index = -1;

  for(var i = 0; i < locationArray.length; i++){
    if(locationArray[i].name === store){
      ///Update item in array and call functions again
      console.log('Updating an already existing item');
      ///Update Item and print table again
      index = i;

      locationArray[index].name = store;
      locationArray[index].minCustomers = min;
      locationArray[index].maxCustomers = max;
      locationArray[index].cookieAverage = cookieAverage;
      locationArray[index].hourlyCookies = randomizedCookieHours(locationArray[index]);

      ///TODO: Delete table row
      var option = 'option' + index;
      var rowEl = document.getElementById(option);
      var parentRowEl = rowEl.parentElement;
      parentRowEl.removeChild(rowEl);

      locationArray[index].tableRow();
      break;
    }
  }
  if(index === -1) {
    var newLocation = new Location (store,min,max,cookieAverage);
    newLocation.tableRow();
  }
}

///Select location from form dropdown. Populates values of form
storeNameOption.addEventListener('change', handleLocationUpdate);
function handleLocationUpdate(event){
  ///Looks at what option was selected and populates fields based on that
  var optionChosen = event.target.value;
  var index;
  console.log(optionChosen);
  switch (optionChosen) {
  case 'option0':
    index = 0;
    break;
  case 'option1':
    index = 1;
    break;
  case 'option2':
    index = 2;
    break;
  case 'option3':
    index = 3;
    break;
  case 'option4':
    index = 4;
    break;
  default: 'No option selected';
  }
  var name = locationArray[index].name;
  var min = locationArray[index].minCustomers;
  var max = locationArray[index].maxCustomers;
  var cookieAverage = locationArray[index].cookieAverage;

  ///Update form fields based on these variables
  form['store'].value = name;
  form['min'].value = min;
  form['max'].value = max;
  form['cookieAverage'].value = cookieAverage;
  ///Create new item on item submit
  ///How do I get rid of the old one?
}
