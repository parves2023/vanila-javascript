

// var Rochona = "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.";
// console.log(Rochona.toUpperCase());

// var amrBOndhu = "aiman raju eshan rony";
// console.log(amrBOndhu.indexOf('raju'));

// var ek = 30;
// var dow = 40;
// console.log(ek + dow);

// // aivabeo jog kora jai



// var voter = 5.444;
// var sum = Math.random(voter) *100;
// console.log(sum);

// //aikane 100 er modde random value show korbe



// var sum1 = -20;
// var sum = Math.abs(sum1);
// console.log(sum)

// //mainas value ke plus e convert korbo jevabe



// var a = 14;
// var b = 18;
// if(a < b){
//     console.log("no relation")
// }
// if(a > b){
//     console.log("yes we should go ahead")
// }


// var a = 144;
// var b = 18;
// if(a < b){
//     console.log("no relation")
// }
// else{
//     console.log("yes we should go ahead")
// }



// var a = 14;
// var b = 14;
// if(a < b){
//     console.log("no relation")
// }
// else if(a > b){
//     console.log("yes we should go ahead")
// }
// else{
//     console.log("they both are same")
// }

// //else if ta onk bar use kora jai. if ar else ta shudu ak bar kore use kora jai ba uchit.




//swich statement

// // var sum = 10; //aitao newa jai parves er bodle
// var sum = "parves";
// switch(sum){
//     case 10:
//         console.log("hello world");
//         break;
//     case 5:
//         console.log("it is 5")
//         break;
//     case "parves":
//         console.log("it is parves");
//         break;
//     default:
//         console.log("khuze pawa gelo na");
// }



// var myDate = new Date();
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());




//// javascript Array

// var fdName = ["anamul","raju","emon"];
// var fd = fdName[1];
// console.log(fd);




// var fdName = ["anamul","raju","emon"];
// fdName[1]="eshan";
// console.log(fdName);

// // [ 'anamul', 'eshan', 'emon' ] aita show  korbe



// var fdName = ["anamul","raju","emon"];
// fdName.push("nafis")
// console.log(fdName);

// //aivabe  push kora jai




// var fdName = ["anamul","raju","emon"];
// fdName.pop()
// console.log(fdName);

// //aivabe  laster nam ta remove kora jai kora jai




// var fdName = ["anamul","raju","emon"];
// fdName.unshift("nafis")
// console.log(fdName);

// //aivabe surute  push kora jai




// var fdName = ["anamul","raju","emon"];
// fdName.shift()
// console.log(fdName);

// //aivabe surute theke remove kora jai aita te braket e kisu lekte nai.




//slice

// var fdName = ["anamul","raju","emon","eshak"];
// console.log(fdName.slice(1,3))

// //shudhu raju ar emon ke aivabe show kora jai



//splice

// var fdName = ["anamul","raju","emon","eshak","dorjoy"];
// fdName.splice(1,3,"jankar mahbub");
// console.log(fdName);

// //majer 3 ta ke kete jankar mahbub leklam




//loops --for loop

// for(var sum = 0; sum <= 5; sum++){
//     console.log(sum);
// }

////aivabe 012345



// for(var sum = 0; sum <= 5; sum++){
//     console.log('alif');
// }

// //aivabe alif 6 bar show korbe




// var Nums = [0,1,2,3,4,5,'alif','parves','eshan'];
// for(var i = 0; i < Nums.length; i++){
//     console.log(Nums[i])
// }

// //aitar maddome .length use kore var er item gulo dhora hoise.




//while loop

// var i =0;
// while(i<=10){
//     console.log(i);
//     i++
// }

//aivabe 1234 kore count

// var i =0;
// while(i<=10){
//     console.log("parves");
//     i++
// }

// //aivabe parves 11 bar asbe.




//function

// function Fun(){
//     var num = 80;
//     var num2=50;
//     console.log(num * num2);
// }
// Fun();
// Fun();
// Fun();



// function Fun(num1,num2){
//     var total = num1 + num2;
    
//     console.log(total);
// }
// Fun(20,30);
// Fun(40,50);
// Fun(60,70);

// //aivabe alada alada value jog kora jai.



// function Fun(num1){
//     var total = num1 * 10;
//     return total;
// }
// var a =Fun(10);
// var b=Fun(20);
// console.log(b);
// console.log(a);
// console.log(a+b);

// //return use kore baire var use  kora jai abar bar bar  console  use kora jai.abr chile duita value jog o kora jai, chile vag ba vagses o kora jai.




// javascript Object

// var MyInfo = { YourName:'eshan', village:'nator',phoneNo:03213145};
// console.log(MyInfo)

// var MyInfo = { YourName:'eshan', village:'nator',phoneNo:03213145};
// console.log(MyInfo.village)



//function obj

// function MyInfo(yourName, village ,phoneno){
//     this.yourName= yourName;
//     this.village=village;
//     this.phoneno=phoneno;
// }
// var NewObj = new MyInfo('eshan','nator',0135564654);
// var NewObj2 = new MyInfo('emon','nator',0135564654);
// var NewObj3 = new MyInfo('parves','natore',0135564654);
// console.log(NewObj);
// console.log(NewObj2.village);

// //aivabe function e object use kore onk gula Newobj and console create kora jai.


// function MyInfo(yourName, village ,phoneno){
//     this.yourName= yourName;
//     this.village=village;
//     this.phoneno=phoneno;
//     this.ShowMe =function(){   
//         console.log(this.yourName);
//         console.log(this.village);
//         console.log(this.phoneno);
//     }
// }
// var NewObj = new MyInfo('eshan','nator',0135564654);
// var NewObj2 = new MyInfo('emon','nator',0135564654);
// var NewObj3 = new MyInfo('parves','nator',0135564654);

// NewObj.ShowMe();
// NewObj3.ShowMe();

////showme use kore console charai kono value show kora jai. 
// //aivabe show me er modde console use kore code ke aro base komano jai.showme er moto alada akta value icca moto newa jai .






// //ternary operator

// var num = 50;
// var MyCondition = (num<10) ? 'ami boro na': 'ami boro';
// console.log(MyCondition)

// //aita ture or false er khetre use kora jai.





//  //break

//  for(var i =0;i<= 10;i ++){
//     if(i==5){
//         console.log('break now ')
//         break;
//     }
//     console.log(i);
//  }

//  //4 e gie theme gese 5 er jaigai leka aise break NOw





//  //continue

//  for(var i =0;i<= 10;i ++){
//     if(i==5){
//         console.log('break now ')
//         continue;
//     }
//     console.log(i);
//  }

//  //aikane 5 er jaigai break nOw kotha aise then abr count suru hoise.




// // var let const

// var num = 10;
// var num = "parves"; //var e aita possible
// console.log(num);

// let ami = 20;
// ami = "eshan"
// ////let ami = "nobin"   ////aikane let use kore ami ke change kora possible na.
// console.log(ami);

// const tui = 30;
// //tui = "fazle" ////aikane value change korao possible na. 
// console.log(tui);




// // global scope 

// var fdName = 'eshan ahmed';
// console.log(fdName);
// function me(){
//     var num ='ami 99';
//     console.log(num);
//     console.log(fdName);
// }
// me()

// //console.log(num)    aitake baire newa jai na. aita holo local scope. ar fdName ta  holo global scope
// //var function er baire hole global scope. and  function er under e hole local scope




//block scope
//{}   ----ai braket use kore  kono var nie er  modde console korle value asbe.but baraket er outside e console korle value asbe na.aita holo block scope.
//block  scope use  korte let & const use kora hoi




//   Hoisting 
//   fdname = 'hablu' //assign
//   let fdname;  //declear
//   //aikane let er pori-bor-te var use  korle  console e relult dei. let & const  dite pare na . karon fdname er value let & const e dhor-te pare na jeita var pare.
//const kokono 2nd time niche ba upre assing kora jai na.korle sintext error hoi.






//function expression
//akta veriable er modde jokon akta function expression kora hoi take  bole function expression
//function expression hoisting hoi na

// var  ExpressionFun = function CallBack(){
//   console.log("my message")
// }
// ExpressionFun()

//aikane reasult show korte CallBack use kora jabe na. ExpressionFun use korle result show korbe.callback tokon anonomyus  function hoye jai


// var  ExpressionFun = function CallBack(messege, message1){
//   console.log(messege, message1)
// }
// ExpressionFun("i love javascript"+"i love python","i am anamul")

// messege ke bole perammeter ai perammeter use kora jai.+ use korar karone duita kotha akta perametar er modde duke gese.





// inner function
// outer function er kono jinis inner function e newa jai but inner  function er kono jenis outer e newa jai Na.akta function er modde ar akta function holo inner function 


// function World (mess1){
//   var MyName = "anamul";

//   function banglaDesh(mess2){
//     console.log(MyName);
//     let Hablu = "hablu mama";
//     console.log(Hablu);
//     console.log(mess2)
    
//   }
//   console.log(mess1)
//   banglaDesh("i am from bangladesh")
  
// }
// World("amr nam parves")

//perametter use korte function er carly braket er modde console diye perammeter er nam set korte hobe .ar carly braket er  baire function er nam diye quatation use kore kisu leka show kora jai. ai leka guloke bola hoi argument.





// aita akta project 

{/* <script>
    let one = prompt('user one');
    let two = prompt('user two');
    one = parseInt(one);
    two = parseInt(two);
    //parseInt die string theke integer e kono value  ke convert
    const jog = one+two;
    const biyog = one-two;
    const gun = one*two;
    const vag = one/two;
    const vagses = one%two;



    document.write("output-jog:"+jog+"<br>");
    document.write("output-biyog:"+biyog+"<br>");
    document.write("output-gun:"+gun+"<br>");
    document.write("output-vag:"+vag+"<br>");
    document.write("output-vagses:"+vagses+"<br>");

    //document die browser e show kora jai aivabe browser e jog biyog kora jai

</script> */}

///prompt e kono value newa hole seita string e thake tai  aitake integer e convert korte hoi.