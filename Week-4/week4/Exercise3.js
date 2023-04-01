let Fib = {
    [Symbol.iterator]() {
        var n1 = 1, n2 = 0;

        return {
            // make the iterator an iterable
            [Symbol.iterator]() { return this; },

            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
             
                if(current > 50) return this.return(current);
                return { value: current, done: false };
            },

            return(v) {
                console.log(
                    "Fibonacci sequence abandoned."
                );
                return { value: v, done: true };
            }
        };
    }
};

for (const v of Fib) {
    console.log( v );

}

//output for 50:0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// Fibonacci sequence abandoned.