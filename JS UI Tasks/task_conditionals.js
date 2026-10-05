// if conditions
var n = 9

if (n>0){
    console.log("positive number")
}
// n is positive

var a = 10
 if (a%2===0){
    console.log(a,"is even")
 }
// a is even


let n = 5

if (n%2!=0){
    console.log(n,"is odd")
}
// n is odd

var n = 25

if (n%5==0){
    console.log(n,"is divisible by 5")
}
// 25 is divisible by 5

var temp = 35

if (temp>30){
    console.log("Hot")
}


var age = 20

if (age>18){
    console.log("eligible to vote")
}
// eligible to vote



// ---------------------------------------------------------------if else

let pass = "akhil"

if (pass==="akhill"){
    console.log("valid password")
}
else{
    console.log("incorrect password")
}
// login successful-----

var marks = 35

if (marks>30){
    console.log("pass")
}
else{
    console.log("fail")
}
// pass-------


var age = 18

if (age>18){
    console.log("eligble to driving license")
}
else{
    console.log("not eligible to driving license")
}
// not eligible to driving license



let a = "username"

let b = "password"

if (a==="username" && b==="password"){
    console.log("login successful")
}
else{
    console.log("invalid credentials")
}

// login successful


let pur = 1100

if (pur>1000){
    console.log("eligible to discount")
}
else{
    console.log("not eligible to discount")
}

// eligible to discount


let n = 100

if (n>101){
    console.log("n is greater than")
}
else{
    console.log("n is less than")
}

// n is less than



let attend = 75

if (attend>65){
    console.log("eligible to write exam")
}
else{
    console.log("not eligible to write exam")
}
// eligible to write exam

// ------------------------------------------------------if else if 

let n = 0

if (n>0){
    console.log("positive number")
}
else if(n<0){
    console.log("negative number")
}
else{
    console.log("zero")
}
// zero


let n = 5

if (n%2==0){
    console.log("n is even")
}
else if(n%2!=0){
    console.log("n is odd")
}
else{
    console.log("positive")
}
// n is odd


let marks = 50

if (marks>=91 && marks<100){
    console.log("Grade A")
}
else if(marks>=71 && marks<=90){
    console.log("Grade B")
}
else if(marks>=51 && marks<=70){
    console.log("Grade C")
}
else if(marks>=35 && marks<=50){
    console.log("Grade D")
}
else{
    console.log("fail")
}

// Grade D


let age = 35

if (age>=60){
    console.log("senior citizen")
}
else if(age>30){
    console.log("adult")
}
else if(age>15){
    console.log("teenager")
}
else{
    console.log("child")
}


let temp = 20

if(temp>=30){
    console.log("Hot")
}
else if(temp>=20){
    console.log("Normal")
}
else{
    console.log("Cold")
}


let color = "Red"

if (color==="Red"){
    console.log("Stop")
}
else if(color==="orange"){
    console.log("Ready")
}
else{
    console.log("Go")
}