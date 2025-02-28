function getCustomers(){

    let promise = new Promise(
        function (resolve, reject){

            console.log("Getting customers");
            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( "John Smith"); // got the customer
                }else{
                    reject("Can't get customers");
                }
            },1000);

        }
    );
    return promise;
}

function getOrders(customer){

    let promise =  new Promise(
        function (resolve, reject){

            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( `Found the order 123 for ${customer}`); // got the order
                }else{
                    reject("Can't get orders");
                }
            },1000);

        }
    );
    return promise;
}


getCustomers()
    .then(cust => {
       return getOrders(cust) // explicitly return helps to understand better,
        // that a promise has been returned.
    })
    .then(order => console.log(order))
    .catch(err => console.error(err));

console.log("Chained getCustomers and getOrders. Waiting for results");  