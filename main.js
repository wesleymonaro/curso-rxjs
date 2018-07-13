var observable = Rx.Observable.create(observer => {
    var i = 0;
    setInterval(() => {
        observer.next(i++)
        if (i > 5) observer.complete()
    }, 1000)
})

observable.subscribe(
    value => console.log(`My Value is ${value}`),
    err => console.log(`error ${err}`),
    () => console.log(`Completed`),
)