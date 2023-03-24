let name1={
    firstname:"kavya",
    lastname:"vatsavai"
}

let printFullName = function(hometown,state){
    console.log(this.firstname+ " "+ this.lastname+ " from " + hometown+ ", "+state);
}

printFullName.call(name1,"Hyderabad","Telangana");
//output :kavya vatsavai from Hyderabad, Telangana
let name2={
    firstname:"saikiran",
    lastname: "vatsavai"
}

//call method
printFullName.call(name2,"Mumbai","Maharastra");
//output :saikiran vatsavai from Mumbai, Maharastra

//apply method
printFullName.apply(name2,["Mumbai","Maharastra"]);
//output :saikiran vatsavai from Mumbai, Maharastra
//bind method (simalar to call but gives you copy of excat method which can be invoked later)
let printMyName =printFullName.bind(name2,"Mumbai","Maharastra");
console.log(printMyName);
printMyName();
//output :saikiran vatsavai from Mumbai, Maharastra
