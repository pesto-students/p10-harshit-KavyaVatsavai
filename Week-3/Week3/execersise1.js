


function memoize(fn){
    const cache= new Map();
    return function (...args){
const key=args.toString();
console.log('fn called with '+key);
console.log(cache);
if(cache.has(key)){
    return cache.get(key);
}
cache.set(key,fn(...args));
return cache.get(key);
    };
}

function add(a,b){
    if(a ==null)
  return b;
  else if(b==null)
  return a;
  else
    return a+b;
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}


const memoizeAdd = memoize(add);

time(() => memoizeAdd(100,100));
time(() => memoizeAdd(100));
time(() => memoizeAdd(100,200));
time(() => memoizeAdd(100,100));

//output:fn called with 100,100
//Map(0) {}
//default: 7.858ms
//fn called with 100
//Map(1) { '100,100' => 200 }
//default: 1.514ms
//fn called with 100,200
//Map(2) { '100,100' => 200, '100' => 100 }
//default: 0.979ms
//fn called with 100,100
//Map(3) { '100,100' => 200, '100' => 100, '100,200' => 300 }
//default: 0.891ms