// object constructor to create a new store location 
var CreateStore = function(location,minCust,maxCust,avgSale,allCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.allCookies = allCookies;
  this.getCustomers = function() {
    return computeCustomers(this.maxCust,this.minCust);
  }
  this.cookiesSold = function() {
    var cookies = [0]
    var total = 0;
    for(var i = 0; i < 14; i++) {
      var sold = Math.round(this.getCustomers() * this.avgSale);
      total = total + sold;
      cookies[i] = sold;
    }
    cookies[cookies.length] = total;
    this.allCookies = cookies;
  }
  this.render = function(cookies,location) {
    return printCookieSales(cookies,location);
  }
}

// computes random customer amount
var computeCustomers = function(max,min) {
  var customers = Math.random() * (max - min) + min
  return customers;
}

// for printing cookies during a given time
var printCookieSales = function (cookies,location) {
  makeRow(location);
  addItem(location,location);
  for(var i = 0; i < cookies.length; i++) {
    var input = cookies[i] + " cookies";
    addItem(location,input);
  }
}

// responsible for creating table header
var makeHeader = function(times) {
  makeRow("header");
  newHeader = document.createElement('th');
  position = document.getElementById('header')
  position.appendChild(newHeader);
  for(var i = 0; i < times.length; i++) {
    newHeader = document.createElement('th');
    position = document.getElementById('header');
    newHeader.textContent = times[i];
    position.appendChild(newHeader);
  }
}

// responsible for creating the table footer totals 
var makeFooter = function(stores) {
  makeRow('footer');
  addItem('footer','Totals');
  for(var i = 0; i < 15; i++) {
    var hourly = 0;
    for(var j = 0; j < stores.length; j++) {
      hourly = hourly + stores[j].allCookies[i];
    }
    addItem('footer', hourly);
  }
}

// responsible for creating a new table element
var makeTable = function() {
  var newTable = document.createElement('table');
  var position = document.querySelector('body');
  newTable.setAttribute('id','sales');
  position.appendChild(newTable);
}

// responsible for creating a new row element
var makeRow = function(location) {
  var newRow = document.createElement('tr');
  var position = document.getElementById('sales');
  newRow.setAttribute('id',location);
  position.appendChild(newRow);
}

// responsible for adding a new cell to row 
var addItem = function(location,text) {
  var newItem = document.createElement('td');
  var position = document.getElementById(location)
  newItem.textContent = text;
  position.appendChild(newItem);
}

// using constructor function to create stores
var seattle = new CreateStore("Seattle",23,65,6.3,[]);
var tokyo = new CreateStore("Tokyo",3,24,1.2,[]);
var dubai = new CreateStore("Dubai",11,38,3.7,[]);
var paris = new CreateStore("Paris",20,38,2.3,[]);
var lima = new CreateStore("Lima",2,16,4.6,[]);

var allStores = [seattle,tokyo,dubai,paris,lima];

// puts everything together
var main = function(stores) {
  var time = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"];
  makeTable();
  makeHeader(time);
  for(var i = 0; i < stores.length; i++) {
    stores[i].cookiesSold();
    stores[i].render(stores[i].allCookies,stores[i].location);
  }
  makeFooter(stores);
}

main(allStores);