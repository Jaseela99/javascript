/* const myarray =[1,2,3,4,5,6,7,8]
let outputArray =[]
function evenarray(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
         outputArray.push(arr[i])
        }
    }return outputArray
}

const result= evenarray(myarray)
console.log(result) 
module["exports"]=evenarray */

const { resolve } = require("path/posix")

/* //filter 

const array = [1,2,3,4,5,6,7,8]
const output =array.filter(function even(a){
return a%2===0;
})
console.log(output)
module["exports"] = even()

//class 
class School{
    constructor(p1,p2,p3){
        this.name = p1;
        this.learners=p2;
        this.address=p3;
    }printSchool() {
        console.log(`name of the school is ${this.name}`)
    }
}
var school = new School('SOAL',['learner1,learner2'],'mumbai')
school.printSchool()
 */

 /* let firstDiv =document.querySelector(".first")
 let secondDiv =document.querySelector(".second")
 let thirdDiv =document.querySelector(".third")

 firstDiv.addEventListener("click",show)
 secondDiv.addEventListener("click",show)
 thirdDiv.addEventListener("click",show)

 function show(){
     alert(firstDiv.innerHTML)
 }  */

 //async await
 const Time1 = async()=>{
return new promise =(resolve)=>{
 setTimeout(()=>{
     resolve()
console.log("Time 1")
 },3000)}
}
await Time1
 setTimeout(()=>{
console.log("Time 2")
 },2000)
 setTimeout(()=>{
console.log("Time 3")
 },1000)