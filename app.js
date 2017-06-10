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
    tableDataCell.setAttribute('id', location.name);
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

function randomizedCookie(min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
}

function randomizedCookieHours(location){
  var hourlyCookies = [];
  for(var i = 0; i < location.openHours.length; i++){
    hourlyCookies.push(randomizedCookie(location.minCustomers, location.maxCustomers, location.cookieAverage));
  }
  return hourlyCookies;
}

function dailyTotal(location){
  var total = 0;
  for(var i = 0; i < location.hourlyCookies.length; i++){
    total += location.hourlyCookies[i];
  }
  return total;
}

function printTable(){
  tableHead(locationArray[0].openHours);
  tableBody = document.createElement('tbody');

  tableEl.appendChild(tableBody);

  for(var i = 0; i < locationArray.length; i++){
    locationArray[i].render(locationArray[i]);
  }
  tableFooter();
}

function tableHead(hours){
  var tableHeader = document.createElement('thead');
  var tableHeaderRow = document.createElement('tr');
  var tableHeaderLocationCell = document.createElement('th');
  tableHeaderRow.appendChild(tableHeaderLocationCell);

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

function tableFooter(){
  var tfootEl = document.createElement('tfoot');
  var tfootCell = document.createElement('th');

  tfootCell.textContent = 'Total Cookies';

  tfootEl.appendChild(tfootCell);
  tableEl.appendChild(tfootEl);
}

// function tableRow(location){
//   var tableDataRow = document.createElement('tr');
//   var tableDataCell = document.createElement('td');
//   tableDataCell.textContent = location.name;
//   tableDataCell.setAttribute('id', location.name);
//   tableDataRow.appendChild(tableDataCell);
//
//   for(var i = 0; i < location.hourlyCookies.length; i++){
//     var hourlyCookiesCell = document.createElement('td');
//     hourlyCookiesCell.textContent = location.hourlyCookies[i];
//     tableDataRow.appendChild(hourlyCookiesCell);
//   }

  ///Adds daily total to end of hourly totals
//   var dailyTotalCell = document.createElement('td');
//   dailyTotalCell.textContent = dailyTotal(location);
//   tableDataRow.appendChild(dailyTotalCell);
//
//   tableBody.appendChild(tableDataRow);
// }
// var pike = {
//   locationName: '1st and Pike',
//   minCustomers:23,
//   maxCustomers: 65,
//   cookieAverage: 6.3,
//   hourlyCookies: []
// };
// pike.randomizedCookies = function (min, max, cookies) {
//   var customers = Math.floor(Math.random() * (max - min + 1) + min);
//   var cookiesPerHour = Math.ceil(customers * cookies);
//   return cookiesPerHour;
// };
//
// var seaTac = {
//   locationName: 'SeaTac Airport',
//   minCustomers:3,
//   maxCustomers: 24,
//   cookieAverage: 1.2,
//   hourlyCookies: []
//   ///3	24	1.2
// };
// seaTac.randomizedCookies = function (min, max, cookies) {
//   var customers = Math.floor(Math.random() * (max - min + 1) + min);
//   var cookiesPerHour = Math.ceil(customers * cookies);
//   return cookiesPerHour;
// };
//
// var seattleCenter = {
//   ///11	38	3.7
//   locationName: 'Seattle Center',
//   minCustomers: 11,
//   maxCustomers: 38,
//   cookieAverage: 3.7,
//   hourlyCookies: []
// };
// seattleCenter.randomizedCookies = function (min, max, cookies) {
//   var customers = Math.floor(Math.random() * (max - min + 1) + min);
//   var cookiesPerHour = Math.ceil(customers * cookies);
//   return cookiesPerHour;
// };
//
// var capitolHill = {
//   ///	20	38	2.3
//   locationName: 'Capitol Hill',
//   minCustomers: 20,
//   maxCustomers: 38,
//   cookieAverage: 2.3,
//   hourlyCookies: []
// };
// capitolHill.randomizedCookies = function (min, max, cookies) {
//   var customers = Math.floor(Math.random() * (max - min + 1) + min);
//   var cookiesPerHour = Math.ceil(customers * cookies);
//   return cookiesPerHour;
// };
//
// var alki = {
//   ///2	16	4.6
//   locationName: 'Alki',
//   minCustomers: 2,
//   maxCustomers: 16,
//   cookieAverage: 4.6,
//   hourlyCookies: []
// };
// alki.randomizedCookies = function (min, max, cookies) {
//   var customers = Math.floor(Math.random() * (max - min + 1) + min);
//   var cookiesPerHour = Math.ceil(customers * cookies);
//   return cookiesPerHour;
// };

///Array of all locations -used to print out location and cookie totals
var pike = new Location('1st and Pike',23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20,	38,	2.3);
var alki = new Location('Alki', 2, 16, 4.6);

var locationArray = [pike, seaTac, seattleCenter, capitolHill, alki];
console.log(locationArray);

var tableEl = document.getElementById('location-table');
var tableBody;
printTable();

// ///create array with randomized cookie numbers for each hour
// for(var i = 0; i < locationArray.length; i++){
//   for(var z = 0; z < 24; z++){
//     ///randomized cookie count for each hour 0-23
//     locationArray[i].hourlyCookies.push(locationArray[i].randomizedCookies(locationArray[i].minCustomers, locationArray[i].maxCustomers, locationArray[i].cookieAverage));
//   }
//   console.log(locationArray[i].locationName + ': ' + locationArray[i].hourlyCookies);
// }

///Display in unordered list in Sales.html this way:
///Location:
///Hour: Number of cookies
// var ulElement = document.getElementById('location-list');
//
// ///Prints location and randomized cookies to sales.html
// for (var i = 0; i < locationArray.length ; i++) {
//   console.log(locationArray[i].locationName);
//
//   ///Location header goes here
//   var locationElement = document.createElement('li');
//   locationElement.textContent = locationArray[i].locationName;
//   locationElement.setAttribute('class', 'location-head');
//
//   ///Header for unordered list where hourly cookies will go
//   var locationHourlyList = document.createElement('ul');
//   ///Hook id for the hourlyElement
//   locationHourlyList.setAttribute('id', locationArray[i].locationName);
//
//   ///Add location header and new ul with id to location-list id
//   ulElement.appendChild(locationElement);
//   ulElement.appendChild(locationHourlyList);
//
//   ///Gets the newly created location ul to append the hourlyElement to
//   var ulElementLocation = document.getElementById(locationArray[i].locationName);
//
// ///Prints out hours and hourly randomized cookies. Change var start and ends to change office hours
//   for(var z = 6; z < 12; z++){
//     ///6 am to 11am
//     var hourlyElement = document.createElement('li');
//     hourlyElement.textContent = z + ' am: ' + locationArray[i].hourlyCookies[z] + ' cookies';
//     hourlyElement.setAttribute('class', 'location-hours');
//     ulElementLocation.appendChild(hourlyElement);
//   }
//   for(var z = 12; z < 13; z++){
//     ///Noon
//     var hourlyElement = document.createElement('li');
//     hourlyElement.textContent = z + ' pm: ' + locationArray[i].hourlyCookies[z] + ' cookies';
//     hourlyElement.setAttribute('class', 'location-hours');
//     ulElementLocation.appendChild(hourlyElement);
//   }
//   for(var z = 13; z < 21; z++){
//     ///1 pm - 8pm
//     var hourlyElement = document.createElement('li');
//     hourlyElement.textContent = (z - 12) + ' pm: ' + locationArray[i].hourlyCookies[z] + ' cookies';
//     hourlyElement.setAttribute('class', 'location-hours');
//     ulElementLocation.appendChild(hourlyElement);
//   }
//
// }
