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
///Simulated number of cookies purchased each hours
///Array of all calculated properties

var pike = {
  minCustomers:23,
  maxCustomers: 65,
  cookieAverage: 6.3
};

var seaTac = {
  minCustomers:3,
  maxCustomers: 24,
  cookieAverage: 1.2
  ///3	24	1.2
};

var seattleCenter = {
  ///11	38	3.7
  minCustomers: 11,
  maxCustomers: 38,
  cookieAverage: 3.7
};

var capitolHill = {
  ///	20	38	2.3
  minCustomers: 20,
  maxCustomers: 38,
  cookieAverage: 2.3
};

var alki = {
  ///2	16	4.6
  minCustomers: 2,
  maxCustomers: 16,
  cookieAverage: 4.6
};
///Display in unordered list in Sales.html this way:
///Location:
///Hour: Number of cookies
