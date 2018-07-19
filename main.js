// var subject = new Rx.Subject();

// var subscription = subject.subscribe(
//     value => console.log(`my value is ${value}`),
//     err => console.log(`Error ${err}`),
//     () => console.log(`Completed`),
// );

// subject.next(55);
// subject.next(34);
// subject.complete();

var observable = Rx.Observable.create(observer => {
    var i = 0,
        interval = setInterval(() => {
            i++;
            observer.next(parseInt(Math.random() * 10));
            if(i > 5){
                clearInterval(interval);
                observer.complete();
            }
        }, 1000)
})

var subject = new Rx.Subject();

var subSource = observable.subscribe(subject);

var subscription = subject.subscribe(
    value => console.log(`my value is ${value}`),
    err => console.log(`Error ${err}`),
    () => console.log(`Completed`),
)