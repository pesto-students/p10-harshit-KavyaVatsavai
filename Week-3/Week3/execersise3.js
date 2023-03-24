function createIncrement(){
    let count=0;
    function increment(){
        count++;
    }
    let message= `Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment,log];
}
    const[increment,log]=createIncrement();
    increment();
    increment();
    increment();
    log();

    //output : Count is 0
    //first createIncrement function called  in 12 line
    //count will be 0 but increment function not yet called , message value is appended as count is 0
    //next in log() it logs the message but log() function not called
    // increment() function called 3 times each time count value increases and comes out of the function as scope of the function stops
//log() function called at that time it logs the message :Count is 0 bcz message value is out side of increment() ,
//so it wont be called it is called only once that tooo in createIncrement();
