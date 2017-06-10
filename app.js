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
var pike = {
  locationName: '1st and Pike',
  minCustomers:23,
  maxCustomers: 65,
  cookieAverage: 6.3,
  hourlyCookies: []
};
pike.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
};

var seaTac = {
  locationName: 'SeaTac Airport',
  minCustomers:3,
  maxCustomers: 24,
  cookieAverage: 1.2,
  hourlyCookies: []
  ///3	24	1.2
};
seaTac.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
};

var seattleCenter = {
  ///11	38	3.7
  locationName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  cookieAverage: 3.7,
  hourlyCookies: []
};
seattleCenter.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
};

var capitolHill = {
  ///	20	38	2.3
  locationName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookieAverage: 2.3,
  hourlyCookies: []
};
capitolHill.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
};

var alki = {
  ///2	16	4.6
  locationName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookieAverage: 4.6,
  hourlyCookies: []
};
alki.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
};

///Array of all locations -used to print out location and cookie totals
var locationArray = [pike, seaTac, seattleCenter, capitolHill, alki];
console.log(locationArray);

///create array with randomized cookie numbers for each hour
for(var i = 0; i < locationArray.length; i++){
  for(var z = 0; z < 24; z++){
    ///randomized cookie count for each hour 0-23
    locationArray[i].hourlyCookies.push(locationArray[i].randomizedCookies(locationArray[i].minCustomers, locationArray[i].maxCustomers, locationArray[i].cookieAverage));
  }
  console.log(locationArray[i].locationName + ': ' + locationArray[i].hourlyCookies);
}

///Display in unordered list in Sales.html this way:
///Location:
///Hour: Number of cookies
var ulElement = document.getElementById('location-list');

///Prints location and randomized cookies to sales.html
for (var i = 0; i < locationArray.length ; i++) {
  console.log(locationArray[i].locationName);

  ///Location header goes here
  var locationElement = document.createElement('li');
  locationElement.textContent = locationArray[i].locationName;
  locationElement.setAttribute('class', 'location-head');

  ///Header for unordered list where hourly cookies will go
  var locationHourlyList = document.createElement('ul');
  ///Hook id for the hourlyElement
  locationHourlyList.setAttribute('id', locationArray[i].locationName);

  ///Add location header and new ul with id to location-list id
  ulElement.appendChild(locationElement);
  ulElement.appendChild(locationHourlyList);

  ///Gets the newly created location ul to append the hourlyElement to
  var ulElementLocation = document.getElementById(locationArray[i].locationName);

///Prints out hours and hourly randomized cookies. Change var start and ends to change office hours
  for(var z = 6; z < 12; z++){
    ///6 am to 11am
    var hourlyElement = document.createElement('li');
    hourlyElement.textContent = z + ' am: ' + locationArray[i].hourlyCookies[z] + ' cookies';
    hourlyElement.setAttribute('class', 'location-hours');
    ulElementLocation.appendChild(hourlyElement);
  }
  for(var z = 12; z < 13; z++){
    ///Noon
    var hourlyElement = document.createElement('li');
    hourlyElement.textContent = z + ' pm: ' + locationArray[i].hourlyCookies[z] + ' cookies';
    hourlyElement.setAttribute('class', 'location-hours');
    ulElementLocation.appendChild(hourlyElement);
  }
  for(var z = 13; z < 21; z++){
    ///1 pm - 8pm
    var hourlyElement = document.createElement('li');
    hourlyElement.textContent = (z - 12) + ' pm: ' + locationArray[i].hourlyCookies[z] + ' cookies';
    hourlyElement.setAttribute('class', 'location-hours');
    ulElementLocation.appendChild(hourlyElement);
  }

}
