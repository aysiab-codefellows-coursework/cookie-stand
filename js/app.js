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
}

// computes random customer amount
var computeCustomers = function(max,min) {
    var customers = Math.random() * (max - min) + min
    return customers;
}

// for printing cookies during a given time
var printCookieSales = function (cookies,location) {
    var time = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"];
    makeDiv(location);
    makeHeader(location);
    makeList(location);
    for(var i = 0; i < time.length; i++) {
        var input = time[i] + " : " + cookies[i] + " cookies";
        addListContent(input,location);
    }
}

var makeHeader = function(className) {
    var newHeader = document.createElement('h1');
    var position = document.querySelector('div.' + className);
    newHeader.textContent = className;
    position.appendChild(newHeader);
}

var makeDiv = function(className) {
    var newDiv = document.createElement('div');
    var position = document.querySelector('body');
    newDiv.setAttribute('class',className);
    position.appendChild(newDiv);
}

var makeList = function(className){
    var newList = document.createElement('ul');
    var position = document.querySelector('div.' + className);
    newList.setAttribute('class',className);
    position.appendChild(newList);
}

var addListContent = function(text,className){
    var newLI = document.createElement('li');
    var position = document.querySelector('ul.' + className);
    newLI.textContent = text;
    position.appendChild(newLI);
}

// using constructor function to create stores
var seattle = new CreateStore("Seattle",23,65,6.3,[]);
var tokyo = new CreateStore("Tokyo",3,24,1.2,[]);
var dubai = new CreateStore("Dubai",11,38,3.7,[]);
var paris = new CreateStore("Paris",20,38,2.3,[]);
var lima = new CreateStore("Lima",2,16,4.6,[]);

var allStores = [seattle,tokyo,dubai,paris,lima];

var main = function(stores) {
    for(var i = 0; i < stores.length; i++) {
        stores[i].cookiesSold();
        printCookieSales(stores[i].allCookies,stores[i].location);
    }
}

main(allStores);