// console.log('LEts Start')



// //object create

// // let rectangle={
// //     length:1,

// //     breadth:2,
// //        draw : function(){
// //     console.log('draw');
// // }

// // };
// // let rectangle1={
// //     length:1,

// //     breadth:2,
// //        draw : function(){
// //     console.log('draw');
// // }

// // };


// //factory function...


// // function createRectangle(len,bre){
// //     return rectangle ={

// //         // length:2,
// //         // breadth:1,
// //         length :len,
// //         breadth :bre,

// //         draw() {
// //             console.log('drawing rectangle');

// //         }
// //     };
// // }

// //     let rectangleObj1 = createRectangle(5,4);



// function Rectangle(len,bre){
//     this.length=len;
//     this.breath=bre;
//     this.draw =function(){
//         console.log('drawing');

//     }
// }
// let rectangleObject= new Rectangle(4,6);
// rectangleObject.color= 'yellow';


// console.log(rectangleObject);

// // delete rectangleObject.color;

// let Rectangle1= new Function('length' ,
// 'this.length=len;
// this.breath=bre;
// this.draw =function(){
//     console.log('drawing');

// }''  );







// let a =10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


// let a=  {value :10};
// let b  = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);

// The output will be 11 11 as it is object reference


// primitve are copied by their value
// references are copied byt their address


// let a = {value:10};
// function inc(a){
//     a.value++;

// }
// inc(a);

// console.log(a.value);





// let rectangle = { 
// length:2,
// breath:4

// };

// //for in loop


// for(let key in rectangle){

//     //keys are reflected through key variable
//     //values are reflected through rectangle key variable
//     console.log(key,rectangle[key]);

// }




//object #1 clone........


// let src = {
//     a:10,
//     b:20,c:30

// };
// let dest={}

// for(let key in src){
//     dest[key] =src[key];

// }
// console.log(dest);

// src.a++;
// console.log(dest);




 //object #2


 let src ={
    a:10,b:20,c:30
 };

let dest = Object.assign({} ,src);

console.log(dest);
























































































































































































































































































//}























