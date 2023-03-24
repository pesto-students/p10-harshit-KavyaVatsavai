 var items=[];
function createStack(){
    return {
        
        push(item){
            items.push(item);
        },
        pop(){
            return items.pop();
        }

    };
}
const stack=createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
//stack.items=[10,100,1000];// encapsulation broken
//console.log(stack.items);
//output for above code : 5 undefined

//it creates new instance for the object and saves the data previous instance is dropped
