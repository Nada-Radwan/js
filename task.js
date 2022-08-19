//Model B
 
//    let x = prompt("Please enter any number : ");
//    let num = parseInt(x);
//     for(let i=num-1;i>0;i--)
//     {
//         num*=i;

//     }
    
// //    function fact(n)
// //  {  if(n<=0) return 1;
// //    else
// //    return n*fact(n-1)
// // }


// console.log(num)
// const a1 =[];
// const a2 =[];
// const k=[];
// let obj =
// {
//     a: "1",
//     b:"2"
// }
// let a = Object.keys(obj);
// a1.entries=a;
// k.keys=a;
// let b= Object.values(obj);
// a2.entries=b;
// // k.values=b;
// // console.log(a1.entries)
// // console.log(`${a1.entries} , ${a2.entries}`);


// //alert(a1);
// console.log(k.join(a1,a2));
//console.log(`${k.keys.values}`);



// const str = "Hello Grepper!";
// const chars = [...str];
// chars.forEach((c, i) => console.log(c, i));

// function foo(x,y)
// {
//     x= x|| 11; y=y||31;
//     console.log(x+y)
// }
// foo();
// foo(5,6);
// foo(5);
// foo(null,6);

// let obj ={
//   msg : "Hello world",
//   x : 10

// }
// var x="msg";
// console.log(obj[x])
// console.log(obj["x"]);


// console.log(Number("1")-1)
// console.log(true+false>false+1)
// console.log("1"+1)

// function counter()
// {
//     var i=0;
//     return ++i;
// }
// console.log(i);

// var arr= new Array(5);
// arr.push(5);
// console.log(arr[0]);
// console.log(typeof(arr));
// for(var i=0;i<5;i++)
// {
//     arr.push(i);
// }
// console.log(arr);
// let fruits=['apple','banana','orange'];
// let fruit =fruits.shift();
// console.log(fruit);

// function test()
// {
//     return{
//         x:1
//     }
// }
// console.log(test());

// let oldcars=['fiat','kia','volvo'];
// let newcars =oldcars.slice();
// newcars.push('mercedes');
// for(let car of newcars)
// {
//     console.log(car);
//     console.log(newcars[car]);
// }


// const arr=[2,5,3,6,7];
// arr.push(12);
// arr.unshift(28);
// arr.unshift(8);
// arr.push(80);
// arr.pop();
// arr.shift();
// console.log(arr);

// var obj = {
//     a: 1,
//     b: 2
// };
// const arr = Object.entries(obj);

// console.log(arr);


// const arr=[13,5,3,66,7];
// const minimum = Math.min(...arr);
// const index = arr.indexOf(minimum);
// console.log(minimum);
// console.log(index);
// function obj() {
//     let a = 1,
//        b = 2;
//     return {
//       'value of a is : ': a,
//       'value of b is : ': b
//     };
//   }
// console.log(obj() );

function add()
{
        num1 = document.getElementById("Fnum").value;
        x1=parseInt(num1);
        num2 = document.getElementById("Snum").value;
        x2=parseInt(num2);
        document.getElementById("result").innerHTML = x1 + x2;
}

function sub() 
{ 
    num1 = document.getElementById("Fnum").value;
    x1=parseInt(num1);
    num2 = document.getElementById("Snum").value;
    x2=parseInt(num2);
    document.getElementById("result").innerHTML = x1 - x2;
}
function mul()
{
    num1 = document.getElementById("Fnum").value;
    num2 = document.getElementById("Snum").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function div() 
{ 
    num1 = document.getElementById("Fnum").value;
    num2 = document.getElementById("Snum").value;
    document.getElementById("result").innerHTML = num1 / num2;
}