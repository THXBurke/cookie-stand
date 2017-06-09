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
/*
function randomizedCookiesPerHour(min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = customers * cookies;
  return cookiesPerHour;
}
*/

var pike = {
  locationName: '1st and Pike',
  minCustomers:23,
  maxCustomers: 65,
  cookieAverage: 6.3
};
pike.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.round(customers * cookies);
  return cookiesPerHour;
};

var seaTac = {
  locationName: 'SeaTac Airport',
  minCustomers:3,
  maxCustomers: 24,
  cookieAverage: 1.2
  ///3	24	1.2
};
seaTac.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.round(customers * cookies);
  return cookiesPerHour;
};

var seattleCenter = {
  ///11	38	3.7
  locationName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  cookieAverage: 3.7
};
seattleCenter.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.round(customers * cookies);
  return cookiesPerHour;
};

var capitolHill = {
  ///	20	38	2.3
  locationName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookieAverage: 2.3
};
capitolHill.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.round(customers * cookies);
  return cookiesPerHour;
};

var alki = {
  ///2	16	4.6
  locationName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookieAverage: 4.6
};
alki.randomizedCookies = function (min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.round(customers * cookies);
  return cookiesPerHour;
};

var locationArray = [pike, seaTac, seattleCenter, capitolHill, alki];
console.log(locationArray);
///Display in unordered list in Sales.html this way:
///Location:
///Hour: Number of cookies
var ulElement = document.getElementById('location-list');

for (var i = 0; i < locationArray.length ; i++) {
  console.log(locationArray[i].locationName);
  var locationElement = document.createElement('li');
  var locationHourlyList = document.createElement('ul');
  locationElement.textContent = locationArray[i].locationName;
  locationHourlyList.setAttribute('id', locationArray[i].locationName);
  ulElement.appendChild(locationElement);
  ulElement.appendChild(locationHourlyList);
  var ulElementLocation = document.getElementById(locationArray[i].locationName);

  for(var z = 6; z < 12; z++){

    var hourlyElement = document.createElement('li');
    hourlyElement.textContent = z + ' am: ' + locationArray[i].randomizedCookies(locationArray[i].minCustomers, locationArray[i].maxCustomers, locationArray[i].cookieAverage);
    ulElementLocation.appendChild(hourlyElement);
  }
  for(var z = 12; z < 13; z++){

    var hourlyElement = document.createElement('li');
    hourlyElement.textContent = z + ' pm: ' + locationArray[i].randomizedCookies(locationArray[i].minCustomers, locationArray[i].maxCustomers, locationArray[i].cookieAverage);
    ulElementLocation.appendChild(hourlyElement);
  }
  for(var z = 1; z < 9; z++){

    var hourlyElement = document.createElement('li');
    hourlyElement.textContent = z + ' pm: ' + locationArray[i].randomizedCookies(locationArray[i].minCustomers, locationArray[i].maxCustomers, locationArray[i].cookieAverage);
    ulElementLocation.appendChild(hourlyElement);
  }

}
