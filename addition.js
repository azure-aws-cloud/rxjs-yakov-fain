let {Observable} = require('rxjs/Observable');
var a1 = 10;
var b1 = 20;
function A1(){

    return Observable.create( observer => {
    //beers.forEach( beer => observer.next(beer));
        observer.next(a1)
        observer.complete();
        }
    );
}

A1()
    .subscribe(
        a1 => console.log("Subscriber got " + a1),
        error => console.err(error),
        () => console.log("The stream is over")
    );
function B1(){

    return Observable.create( observer => {
            //beers.forEach( beer => observer.next(beer));
            observer.next(b1)
            observer.complete();
        }
    );
}

B1()
    .subscribe(
        b1 => console.log("Subscriber got " + b1),
        error => console.err(error),
        () => console.log("The stream is over")
    );

