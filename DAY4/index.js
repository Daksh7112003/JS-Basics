 

for(let count =1 ; count<=100; count++){
    console.log("hello jii");


}
console.log("loop has ended")


//for of loop

let size = 0 ; 

let str = "Javascript"
for(let i of str){
    console.log("i=", i );
    size++;


}
console.log(size)





//for in loop )(basically this loop is used in the case of the objects ....)



let student  ={
    name :"Rahul kumar ",
    age :20,
    cgpa: 7.5,
    isPass:true,
}



for( let key in student){
    console.log("key=",key , "value=", student[key]);

}


//Ques 1...


for(let i = 0 ;  i<=100 ; i=i+2){
    console.log(i)
}





//ques 2...

let game_NUm= 25;
let user_num = prompt("Guess the number: ");
while(user_num!=game_NUm){
    user_num=prompt("YOu have entered the wrong number");



}
console.log("congratulation, you entered the right number ");








