var hours = 'Hours: 6 am to 8 pm';
var locationArray = [
  ['1st and Pike', '1st and Pike','Seattle, WA 98101', hours],
  ['SeaTac Airport', '1234 SeaTac', 'Seattle-Tacoma, WA 98000', hours],
  ['Seattle Center', '109 Denny Way', 'Seattle, WA 98101', hours],
  ['Capitol Hill', '1254 A Location', 'Seattle, WA, 98101,', hours],
  ['Alki', '1409 Aliki', 'Seattle, WA, 98101', hours]
];

///Prints to index.html locations footer
function printLocations(){
  for(var i = 0; i < locationArray.length; i++){
    var footerEl = document.createElement('li');
    footerEl.setAttribute('class', 'footer-location-store');
    footerLocationEl.appendChild(footerEl);

    var footerUlEl = document.createElement('ul');
    footerUlEl.setAttribute('class', 'footer-location-ul');

    footerEl.appendChild(footerUlEl);

    var footerCellEL = document.createElement('li');
    var footerAddressEl = document.createElement('li');
    var footerAddressEl2 = document.createElement('li');
    var footerHoursEl = document.createElement('li');

    footerCellEL.setAttribute('class', 'footer-location-item');
    footerAddressEl.setAttribute('class', 'footer-location-item');
    footerAddressEl2.setAttribute('class', 'footer-location-item');
    footerHoursEl.setAttribute('class', 'footer-location-item');

    footerCellEL.textContent = locationArray[i][0];
    footerAddressEl.textContent = locationArray[i][1];
    footerAddressEl2.textContent = locationArray[i][2];
    footerHoursEl.textContent = locationArray[i][3];

    footerUlEl.appendChild(footerCellEL);
    footerUlEl.appendChild(footerAddressEl);
    footerUlEl.appendChild(footerAddressEl2);
    footerUlEl.appendChild(footerHoursEl);

    footerLocationEl.appendChild(footerUlEl);
    console.log(footerCellEL);
  }
}

var footerLocationEl = document.getElementById('footer-location');
printLocations();
