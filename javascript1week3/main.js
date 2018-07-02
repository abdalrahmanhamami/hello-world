//String
// console.clear();

// let myString = "hello,this,is,a,difficult,to,read,sentence";       
// console.log(myString);                                               
// console.log(myString.length);                                      
// myString = "hello this is a difficult to read sentence";           
// console.log(myString);                                             


// //Arrays
// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
//  console.log(favoriteAnimals);
// favoriteAnimals.push('turtle');
//  console.log(favoriteAnimals);

// favoriteAnimals.splice(1,0, 'meerkat');
// console.log(favoriteAnimals);
// console.log(favoriteAnimals.length);
// console.log("the length of the array is 5");
// console.log(favoriteAnimals);
// favoriteAnimals.splice(3,1,);
// console.log(favoriteAnimals);
// //.splice(the_number_of_the_index and 1 ); deletes that index that we referd to
// //and .splice(the_number_of_the_index and 0, .....something  ); adds something to the position that we want 
// let idx = favoriteAnimals.indexOf('meerkat');
// if (idx != -1) {
//   favoriteAnimals.splice(idx, 1, );
// }
// console.log(favoriteAnimals);
// //the item that i'm looking for is at index idx

                       //////////////
 // console.log(idx);  //    1     //
                       //////////////   
// //1
// function whatever(a,b,c){
  
// return a+b+c; 
// }
// ///
//  console.log(whatever(1,2,3));
// //2
// function colorCar(color){
//     console.log("a "+ color +" car" )   

// };
// colorCar("red");
// colorCar("green");
// // 3
// const myObject={
//   Name:"AbdalRahman",
//   SurName:"Hamami",
//   Age:17
// };

// function printObjectEntries(obj){
//   for (let i=0; i<(Object.entries(obj).length); i++){
//     console.log(Object.entries(obj)[i]);
//   };
// };
// printObjectEntries(myObject);
// // 4
// function vehicleType(color,code){
//   if(code === 1){
//     console.log("a " + color + " car"); 
//      }else if(code===2) {
//            console.log("a " + color + " motorbike"); 
//      } 
// } 
// vehicleType("blue",1 );
//, 1 for car, 2 for motorbike.
// vehicleType("blue", y)
//'a blue motorbike'
 //  //5

// if (3 === 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }
// (3=== 3) ? console.log('yes') : console.log('no');
// //6
// function vehicleType (color,age,code){
//   let response = "a ";
//   if (age>=1) {
//     response = response + "used ";
//   } else {
//     response = response + "new ";
//   }
//   response = response + color;
//   response = response + " " + vehicle[code];
  // if(code === 1 && age === 0){
  //   console.log("a new " + color + " car"); 
  //    } else if(code===2 && age>=1) {
  //          console.log("a used " + color + " motorbike"); 
  //    } 
//   console.log(response);
// }

//vehicleType ("green",3,1 );
// //7//8//9//
 //let vehicle  = ["car","motorbike","caravan","bike"];
// console.log(vehicle);
// vehicleType("blue", 0, 2);

// // 10 
// function myAdvertisement(a){
//   let len = a.length ;
//   let text = "Amazing Joe's Garage, we service ";
//   for (let i=0; i< len-1 ; i++){
//     text += vehicle[i] + "s, "
//     return text;
//    };
//   console.log(text );
// };

//   myAdvertisement(vehicle);
   // //11

// 
// //12
// let object = {};
// // 13
// let objectA = {
//  "Kostas Minaidis":"",
//  "Kosmas Pouianou":"",
//  "George Sisko" :"",
//  "Aristeidis Bampakos":"",
// };
// console.log(objectA);
// // 14
// objectA[ "Kostas Minaidis"] = "javascript";
// objectA[ "Kosmas Pouianou"] = "javascript";
// objectA["George Sisko"] = ["HTML","CSS"];
// objectA["Aristeidis Bampakos"] = ["HTML","CSS"];
// console.log(objectA);
// 15  What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
    // let x = [1,2,3];
    // let y = [1,2,3];
    // let z = y;
// if(x == y){
//    console.log(true);
//    }else{
//      console.log(false)
//    } ;//this one is false 
// if(x === y){
//    console.log(true);
//    }else{
//      console.log(false)
//    } ; //this one is false
// if(z == y){
//    console.log(true);
//    }else{
//      console.log(false)
//    } ; //this one is true 
// if(z == x){
//    console.log(true);
//    }else{
//      console.log(false)
 //} ;//this one is false 
//   let x = [1,2,3];
//     let y = [1,2,3];
//     let z = y;
// function same(a,b){
//     var same = a.length === b.length,
//         result,
//         len;
//     if(!same) { result = false }
//     else {
//         // so far, they're the same
//         result = true;
//         len = a.length;
//         for(var i=0;result !== false && i < len; i++) {
//             if(a[i] !== b[i]) {
//                 result = false;
//             }
//         }
//     }
    
//     return result;
// }

// console.log(same(x, y));
// 16 Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// let o1 = { foo: 'Hello' };//changing o1 doesn't changes o3
// let o2 = { foo: 'Hey' };//changing o2 does changes o3 
// let o3 = o2; //yes it does materr ,because you can't re-declar a variable by using (let) twice 
//  console.log(o3);
 // console.log(o2);
//17
// let bar = 42;
// typeof typeof bar;//it returns error 

