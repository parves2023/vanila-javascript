// for (var  i = 0; i < 5; i++){
//     console.log("inside loop"+i);
// }
// console.log("outside loop"+i);

//aikane var er jaigai let use  korle outside loop e kono reasult show korto na.tokon let er karone aita block level element hoye jeto.
//const 2nd time e dicleyar kora jai na.

// const obj =  {name:"eshan"};
// ////obj ={ age:20 }; //redicleyar ba re-assing not allowed
// obj.name= "ahad" //but obj er property er value change kora jai
// console.log(obj.name);



////2

// function say(mass="ami akn jatrabari"){
//     console.log(mass)
// };
// say();
// say("ami akn bibir bagicha")

//deful perammeter e = diye argument lekha jai. abr function er nam ke {} er baire niye alada argument dewa jai.





// function rest(a,b,...c){
//     console.log(a,b,c);
// } 
// rest(1,2,3,4,5,6,7)

//aikane ... diye rest perammeter use na korle joto issa toto argument newa jaito na



//spread operator

// const array1 =[1,2,3];
// const array2 =[...array1,4,5,6];
// console.log(array2);

// [] -ai sing diye array use kore. 2nd array er vitor array1 er age ... na dile duita alada array hoito but ... dewar karone duita aktase show hoi.spread operator er kaj tahole duita array ke akta kore show kora.




// //Object literals 
//obj literals er jonno mass:mass aivabe leka lage na . jeita es6 e aisa sohoj hoye  gase.

// function say(mass,name="raju"){
//     return{
//         mass,
//         name
//     }
// }
// console.log(say("parves","shanto"));




// for of

// const array = [1,2,3,4,5]
// for(notunarray of array){
//     console.log(notunarray);
// }

//aita te array er value gula show korbe



// for in 

// const arrray = [6,7,8,9,10];
// for (amiarray in arrray){
//     console.log(amiarray)
// }
// aita te 0 theke 4 ta index Number dibe


//uporer kaj ta obj diclare kore kora jai

// const obj = {
//     name:"parves",
//     age:22,
//     profe:"student",
// };
// for (amiarray in obj){
//     console.log(amiarray)
// }

//(name,age) aigula show kortase shudhu. parves 22 student aigula show kortase na.





// es6 String

// const name = `eshan`;
// const age = 18;
// console.log(`my name is ${name} & i am ${age} Year's old.`);

////${}this is es6 method which is very simple.`` this is called template string

//and this is old method which is complex
// console.log("My name is  "+name+" & i am  "+age+" Year's Old"); 





// array distructuring

// const array = [1,2,3,4,5,6,7,8,9,0];
// let [a,b,c,...z] = array;
// console.log(a,b,c,...z);

//aikane // console.log(b); newa jeto. abr z newa jeto. aivabe icca moto console kora jeto. 3 dot ke rest perammeter bole





//es6  object destructuring 

// const obj = {
//     name:"parves",
//     age:18,
//     id:2,
// }
// const {name,age,id}=obj;
// console.log(obj);
// console.log(name,id);

 //// console.log(obj.name);<-- aivabe kora lagto kintu     aita//const {name,age,id}=obj       use korai console.log(name,id); arokokm die e reasult show kora  jaitase.





// import and export ba module
//html e use hoi

{/* <script src="index.js" type="module"></script>


import {NewMessage} from "./message.js"     //import.js
console.log(NewMessage);                   

export let NewMessage = "say hi"; */ }       //message.js   






// class constructor

// class book{
//     constructor(bookname, price){
//         this.bookname = bookname;
//         this.price = price;
//     }
// }
// let bookdetails = new book("rich dad", "300 tk")
// console.log(bookdetails);





//class expression 

// let person = class {
//     constructor(name,age,roll){
//         this.name = name;
//         this.age = age;
//         this.roll = roll;
//     }
// }
//  let newperson = new person("Hablu programmer",18,"50");
//  console.log(newperson.roll);





//es6 Static methods
// class er modde  function leka lage na name use korlei oita function hoye jai

// class book{
//     fun(){
//         console.log("hey it's me");
//     }
// }
// let newobj = new book()
// newobj.fun()

// uporer lekata nicher moto static key-word use korle just book.fun use  korle result shwo korbe

// class book{
//    static fun(){
//         console.log("hey it's me");
//     }
// }
// book.fun()

// aita use kore o uporer result pawa jai







// inheritance & Super
//akta class theke onno kisute value transfar

// class parent{
//     assets1(){
//         console.log("dadar");
//     }
//     assets2(){
//         console.log("babar");
//     }
// }
// class ami extends parent {
//     /*myassets(){
//         super.assets1();
//         super.assets2();
//     }*/
// }
// let myassets= new ami();
// myassets.assets1();
// myassets.assets2();

/*let myassets=new ami();
myassets.myassets()*/






// arrow functions

// let func = (x,y) => {
//     return x+y
// }
// console.log(func(20,10));


///age aita emon silo

// let fun = function (x,y){
//     return x+y
// }
// console.log(fun("a","b"));

//single line e hole 

// let func = (x,y) => x+y    //single line e return na dileo hoi
// console.log(func(20,10));

//x,y holo perammeter . single perammeter pass korle oikhane braket use na korleo reasult show korbe.jemon 

// let func = x => x+10 
// console.log(func(20))





//es6  symbls 
///it is  an another primitive data type.symbols die  unick premitive generate kora jai. 

// let sym = Symbol("hablu");
// let sym1 = Symbol("hablu");
// console.log(sym===sym1);

//aitar reasult asbe false. karon aita sym er argument na .aita holo sym er  comment ba discription.   === diye aktar shate aktar mil ase ki na ta bojha jai.

////code with harry https://youtu.be/5ftatbD3MAI

// const k1 = Symbol ('it is k1');
// const k2 = Symbol ('it  is  k2');
// myObj = {};
// myObj [k1]= "jasim";
// myObj [k2]= "rohan";
// myObj['name']= 'sobuj';
// console.log(myObj);
// console.log(myObj[k1]);
// //  //for in loop er modde symbol ignor kora hoi
// for (key in myObj){
//     console.log(key,myObj[key]);
// }