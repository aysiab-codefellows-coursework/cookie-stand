// object literals for each location 

var storeSeattle = {
    location: "Seattle",
    minCust: 23,
    maxCust: 65, 
    avgSale: 6.3,
    getCustomers: function() {
        return Math.random * (this.maxCust - this.minCust) + this.minCust;
    }
}

var storeTokyo = {
    location: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    getCustomers: function() {
        return Math.random * (this.maxCust - this.minCust) + this.minCust;
    }
}

var storeDubai = {
    location: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    getCustomers: function() {
        return Math.random * (this.maxCust - this.minCust) + this.minCust;
    }
}

var storeParis = {
    location: "Paris",
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
    getCustomers: function() {
        return Math.random * (this.maxCust - this.minCust) + this.minCust;
    }
}

var storeLima = {
    location: "Lima",
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    getCustomers: function() {
        return Math.random * (this.maxCust - this.minCust) + this.minCust;
    }
}