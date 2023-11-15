import {Subject} from 'rxjs/Subject';

enum Action{      // <1>
    Buy = 'BUY',
    Sell = 'SELL'
}

class Order{   // <2>
    constructor(public orderId: number, public traderId: number, public stock: string, public shares: number, public action:Action){}
}

let orders = new Subject<Order>();  // <3>

class Trader {   // <4>

    constructor(private traderId:number, private traderName:string){}

    placeOrder(order: Order){
        orders.next(order);   // <5>
    }
}

let stockExchange = orders.subscribe(   // <6>
    ord => console.log(`Sending to stock exchange the order to ${ord.action} ${ord.shares} shares of ${ord.stock}`));
let tradeCommission = orders.subscribe(  // <7>
    ord => console.log(`Reporting to trade commission the order to ${ord.action} ${ord.shares} shares of ${ord.stock}`));

let trader = new Trader(1, 'Joe');
let order1 = new Order(1, 1,'IBM',100,Action.Buy);
let order2 = new Order(2, 1,'AAPL',100,Action.Sell);

trader.placeOrder( order1);   // <8>
trader.placeOrder( order2);   // <9>