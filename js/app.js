// object literals for each location 

var storeSeattle = {
    location: "Seattle",
    minCust: 23,
    maxCust: 65, 
    avgSale: 6.3,
    allCookies: [],
    getCustomers: function() {
        return computeCustomers(this.maxCust,this.minCust);
    },
    cookiesSold: function() {
        var cookies = [0]
        var total = 0;
        for(var i = 0; i < 14; i++) {
            var sold = Math.round(this.getCustomers() * this.avgSale);
            total = total + sold;
            cookies[i] = sold;
        }
        cookies[cookies.length] = total;
        this.allCookies = cookies;
    },
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



var storeTokyo = {
    location: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    allCookies: [],
    getCustomers: function() {
        return computeCustomers(this.maxCust,this.minCust);
    },
    cookiesSold: function() {
        var cookies = [0]
        var total = 0;
        for(var i = 0; i < 14; i++) {
            var sold = Math.round(this.getCustomers() * this.avgSale);
            total = total + sold;
            cookies[i] = sold;
        }
        cookies[cookies.length] = total;
        console.log(cookies);
        this.allCookies = cookies;
    },
}

var storeDubai = {
    location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    allCookies: [],
    getCustomers: function() {
        return computeCustomers(this.maxCust,this.minCust);
    },
    cookiesSold: function() {
        var cookies = [0]
        var total = 0;
        for(var i = 0; i < 14; i++) {
            var sold = Math.round(this.getCustomers() * this.avgSale);
            total = total + sold;
            cookies[i] = sold;
        }
        cookies[cookies.length] = total;
        console.log(cookies);
        this.allCookies = cookies;
    },
}

var storeParis = {
    location: "Paris",
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
    allCookies: [],
    getCustomers: function() {
        return computeCustomers(this.maxCust,this.minCust);
    },
    cookiesSold: function() {
        var cookies = [0]
        var total = 0;
        for(var i = 0; i < 14; i++) {
            var sold = Math.round(this.getCustomers() * this.avgSale);
            total = total + sold;
            cookies[i] = sold;
        }
        cookies[cookies.length] = total;
        console.log(cookies);
        this.allCookies = cookies;
    },
}

var storeLima = {
    location: "Lima",
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    allCookies: [],
    getCustomers: function() {
        return computeCustomers(this.maxCust,this.minCust);
    },
    cookiesSold: function() {
        var cookies = [0]
        var total = 0;
        for(var i = 0; i < 14; i++) {
            var sold = Math.round(this.getCustomers() * this.avgSale);
            total = total + sold;
            cookies[i] = sold;
        }
        cookies[cookies.length] = total;
        console.log(cookies);
        this.allCookies = cookies;
    },
}

var allStores = [storeSeattle,storeTokyo,storeDubai,storeParis,storeLima];

var main = function(stores) {
    for(var i = 0; i < stores.length; i++) {
        stores[i].cookiesSold();
        printCookieSales(stores[i].allCookies,stores[i].location);
    }
}

main(allStores);