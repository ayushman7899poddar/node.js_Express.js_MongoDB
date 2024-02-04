const EventEmitter = require("events");

// const event  = new EventEmitter();

class Stock extends EventEmitter{
    constructor(symbol,price){
        super();
        this._symbol = symbol;
        this._price = price;
    }

    set price(newPrice){
        if(newPrice != this._price){
            this.emit("priceChanged",{
                symbol:this._symbol,
                oldPrice: this._price,
                newPrice:newPrice,
                adjustment:((newPrice - this._price)*100/ this._price).toFixed(2)
            });
        }
    }
    get price(){
        return this._price;
    }
    get symbol(){
        return this._symbol;
    }
}

