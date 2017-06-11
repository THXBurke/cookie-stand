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
  this.openHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
  this.hourlyCookies = randomizedCookieHours(this);
  this.render = function tableRow(location){
    var tableDataRow = document.createElement('tr');
    var tableDataCell = document.createElement('td');
    tableDataCell.textContent = location.name;
    tableDataCell.setAttribute('class', 'location');
    tableDataRow.appendChild(tableDataCell);

    for(var i = 0; i < location.hourlyCookies.length; i++){
      var hourlyCookiesCell = document.createElement('td');
      hourlyCookiesCell.textContent = location.hourlyCookies[i];
      tableDataRow.appendChild(hourlyCookiesCell);
    }
    var dailyTotalCell = document.createElement('td');
    dailyTotalCell.textContent = dailyTotal(location);
    tableDataRow.appendChild(dailyTotalCell);

    tableBody.appendChild(tableDataRow);
  };
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
  return total;
}

///Prints out the table. Has functions for Header, Footer and goes through the render function of the Location object for each location
function printTable(){
  ///Table head
  tableHead(locationArray[0].openHours);
  tableBody = document.createElement('tbody');

  tableEl.appendChild(tableBody);

  ///Triggers the render method for each location in LocationArray
  for(var i = 0; i < locationArray.length; i++){
    locationArray[i].render(locationArray[i]);
  }
  ///Renders table footer
  tableFooter();
}

///Creates the table header
function tableHead(hours){
  var tableHeader = document.createElement('thead');
  var tableHeaderRow = document.createElement('tr');
  var tableHeaderLocationCell = document.createElement('th');
  tableHeaderRow.appendChild(tableHeaderLocationCell);

///Creates a header cell for each hour in the first location in the LocationArray
  for(var i = 0; i < hours.length; i++){
    var tableHeaderCell = document.createElement('th');
    tableHeaderCell.textContent = hours[i];
    tableHeaderRow.appendChild(tableHeaderCell);
  }
  var tableHeaderTotal = document.createElement('th');
  tableHeaderTotal.textContent = 'Daily Total';

  tableHeaderRow.appendChild(tableHeaderTotal);
  tableEl.appendChild(tableHeader);
  tableHeader.appendChild(tableHeaderRow);
}

///Creates the table footer and adds the totals for each hour
function tableFooter(){
  var tfootEl = document.createElement('tfoot');
  var tfootCell = document.createElement('th');

  tfootCell.textContent = 'Total Cookies';
  tfootEl.appendChild(tfootCell);

///Adds the totals for each hour
  for(var i = 0; i < locationArray[0].openHours.length; i++){
    var tableFooterTotalEl = document.createElement('th');
    tableFooterTotalEl.textContent = columnTotal(i);
    tfootEl.appendChild(tableFooterTotalEl);
  }
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

///Array of all locations -used to print out location and cookie totals
var pike = new Location('1st and Pike',23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20,	38,	2.3);
var alki = new Location('Alki', 2, 16, 4.6);

var locationArray = [pike, seaTac, seattleCenter, capitolHill, alki];
console.log(locationArray);

///Gets the attribute where the Table is in the HTML
var tableEl = document.getElementById('location-table');
///Table Body element to append the table body to in printTable(); Not sure why I can't seem to make things work without this!
var tableBody;

printTable();
