// let a = 10;
// console.log(a);
// const val = true;
// console.log(val);

// function test(){
//     console.log("function is executing...")
// }
// test();

// let btnBuy= document.getElementById("btnBuy");
// console.log(btnBuy);
// btnBuy.onclick=function(){
//     confirm("Are you sure you want to delete")
// }

//single line Comment
/*multiline
comment
*/

// !outputs
// console.log(console)
// console.log(1000);
// let user="Sam";
// console.log(user);

// console.error("404 page not found");
// console.warn("501 server is not responding")

// document.write("Javascript is a frontend language");
// document.write("Html css is used to create static web pages")

// document.writeln("Javascript is a frontend language");
// document.write("Html css is used to create static web pages")

// let user = "Miller";
// document.write(user)
// document.write(10*10);
// document.write("<h1 style='color:red'>JavaScript</h1>")
//!DHTML

// alert("")
// alert(10+10);
// let x = 1000;
// alert(x)

// let ele = document.getElementById("demo");
// ele.innerText = "JS"

// !Javascript
// !declare & initialize in a different line
// var a;
// a=10;
// console.log(a);

// let b;
// b="hi";
// console.log(b)

// const c;
// c=true;
// console.log(c)
// !declare & initialize in a same line
// var a=10;
// let b=20;
// const c=30;
// console.log(a , b, c)

// ! re-initialize  line
// var a=10;
// a="Hi";
// console.log(a)

// let b="Hello";
// b=10000;
// console.log(b)

// const c=true;
// c=false;
// console.log(c)

// !ReDeclaration
// var a=10;
// var a="Hi";
// console.log(a);

// let b=10;
// let b=1000;
// console.log(b)

// const c=true;
// const c= false;
// console.log(c)

// !scope of variables
// console.log("hello");
// console.log(10+10)
// var a =10;
// let b= "hi";
// const c=true;
// console.log(a)
// console.log(b)
// console.log(c)

// function test(){
//     console.log(a , b, c);
    // var username="Sam";
    // let company="Google";
    // const sal=12345;
    // console.log(username);
    // console.log(company);
    // console.log(sal);
    // console.log(this)
    // console.log(this.a);
    // console.log(this.b)
    // console.log(this.c)
// }
// test();
// console.log(sal);

// if(true){
//     console.log(a , b , c)
//     var username="Sam";
//     let company="Google";
//     const sal=12345;
//     console.log(username , company , sal);
// }

// var username="Sam";
// var $username="Sam";
// var _username="Sam";
// var 2username="Sam";
// var user2name="Sam";
// var #username="Sam";
// var user name="Sam";
// var new="Sam";
// const userName="Sam";
// const aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa="Sam"

// console.log(aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa);


// !variable hoisting
// console.log(a);
// let a =10;
// console.log(c)
// const c=true;

// console.log(d);
// var d="Variable hoisitng";
// demo();
// function demo(){
//     console.log("statements executing...")
// }

// let str= "Hello";
// // console.log(str[0]);
// str[0]="h";
// console.log(str)


// let arr= [1,2,3,4,5];
// arr[0]="Hello";
// console.log(arr)

// !string
// let firstName="Sam";
// let lastName="Miller";
// let company="Google";
// console.log("My name is"+" "+firstName+" "+lastName +" "+"and i am working in "+company)
// console.log('My name is '+firstName + ' ' + lastName + ' and i am working in '+company)
// console.log(`My name is ${firstName} ${lastName} and i am working in ${company}`)

// console.log("Lorem ipsum dolor sit, \n amet consectetur adipisicing \n elit. Tempora dolores odit, facere dolore voluptate maiores sit nisi voluptates est nulla?")
// console.log(`Lorem ipsum dolor sit,
// amet consectetur
//  adipisicing elit.
//  Tempora dolores odit, facere dolore
//   voluptate maiores sit nisi voluptates
//   est nulla?`)

// let dblq="Double Quotes";
// console.log(dblq);
// console.log(typeof(dblq));

// let single = 'Single Quotes';
// console.log(single);
// console.log(typeof(single))

// let tl = `Template Literals`;
// console.log(tl);
// console.log(typeof(tl));

// !string constructor
// let str = new String("JavaScript");
// console.log(str);
// console.log(typeof(str));

// let str1= str.valueOf();
// console.log(str1);
// console.log(typeof(str1))

// !
// let num =100;
// console.log(num , typeof(num));

// let str = String(num);
// console.log(str , typeof(str));

// let username=prompt("enter user name here...");
// console.log(username ,typeof(username));
// let n1=prompt("enter n1 value");
// let n2=prompt("enter n2 value");
// console.log(n1+n2);

// !eval();
// let str="100+100";
// console.log(str);
// let totalNum = eval(str);
// console.log(totalNum)

// let n1 = Number(prompt("Enter n1 value"));
// let n2 = Number(prompt("Enter n2 value"));
// let operator = prompt("Enter Operator");

// switch(operator){
//     case "+" :
//         let add = n1 + n2;
//         console.log(add);
//         alert(add);
//         break;
//     case "-" :
//         let sub = n1 - n2;
//         alert(sub);
//         break;
//     case "*" :
//         let mul = n1 * n2;
//         alert(mul);
//         break;
//     case "/" :
//         let div = n1 / n2;
//         alert(div);
//         break;
//     case "%" :
//         let mod = n1 % n2;
//         alert(mod);
//         break;
//     case "^" :
//         let exp = n1 ^ n2;
//         alert(exp);
//         break;
//     case "++" :
//         let inc = ((n1 + n2)++);
//         alert(inc);
//         break;
//     case "--" :
//         let dec = ((n1 + n2) --);
//         alert(dec);
//         break;
// }
// for (let i = 0; i < 5; i ++){
//     console.log("Hello, World!");
// }
// let n = 100;
// for (let i = 0; i <= n; i ++){
//     if (i % 2 == 0)
//         console.log(i + " is an even number");
//     else
//         console.log(i + " is an odd number");
// }

// let i = 0;
// while (i <= 10){
//     console.log(i);i ++
// }

// let i = 100;
// do {
//     console.log(i--);
// }while(i >= 0)
// document.getElementById(muthu)

// function add(a, b = 10){
    //     return a + b;
    // }

    // let x = add(5, 7);
    // console.log(x);

    // //!pure function
    // let pureFunction = (a, b) =>
    // {
    //     return a + b;
    // }
    // let pure = pureFunction(18, 9);
    // console.log(pure);

    //impure function
    // let n = Number(prompt("Enter your Number here"));
    // let pure = (a, b) =>{
    //     return a + b + n;
    // }
    // let p = pure(19, 29);
    // console.log(p);

    // var num = 100;
    // let str = "JavaSCript";
    // console.log(num, str);
    // function userDetails(){
    //     var hero = "arya";
    //     let movie = "sarvam";
    //     console.log(hero, movie);
    //     console.log(num);
    //     console.log(this.num);
    //     console.log(str);
    //     console.log(this.str);
    // }
    // userDetails();

    // let str = "Hello JavaScript";
    // let str1 = " is a scripting language";
    // let str2 = " and also it is a interpreted language";
    // let joinStrings = str.concat(str1, str2);
    // console.log(joinStrings);

    // let str = "Hello JavaScript";
    // let index = str.indexOf("p");
    // console.log(index);
    // let index1 = str.indexOf("n");
    // console.log(index1);
    // let lastIndex = str.lastIndexOf("l");
    // console.log(lastIndex);

    // let str = "Hello JavaScript";
    // let val = str.startsWith("h");
    // console.log(val);
    // console.log(str.startsWith("J"));
    // console.log(str.startsWith("Java"));
    // console.log(str.startsWith("java"));
    // console.log(str.endsWith("java"));
    // console.log(str.includes("Java"));
    // console.log(str.includes("Script"));
    // console.log(str.repeat(10));
    // console.log(str.replace("Java", "Hello Java"));
    // console.log(str.split());
    // console.log(str.split(""));
    // console.log(str.split(" "));
    // console.log(str.slice(6, 9));
    // console.log(str.slice(6, 10));
    // console.log(str.slice(10, 16));
    // console.log(str.slice(6));
    // console.log(str.slice(-6));
    // console.log(str.slice(-6, -1));
    // console.log(str.slice(-6, -10));
    // console.log(str.length);
    // console.log(str.substring(6, 10));
    // console.log(str.substring(-8, -9));

    // let backend = ["Java ", "Sql", "Advance Java"];
    // let frontend = ["WebTech", "React js"];
    // let fullstack = frontend.concat(backend);
    // console.log(fullstack);

    // frontend[5] = "Angular";
    // console.log(frontend);
    // frontend.push("Angular", "Vue Js");
    // console.log(frontend);
    // frontend.pop();
    // console.log(frontend);

    // let array = [1, 2, ["HTML", "CSS"], ["JS", ["React Js", "Angular"]]]
    // console.log(array);
    // let flatArray = array.flat(3);
    // console.log(flatArray);

    // let array = [82, 234, 8920, 1, 4, 58, 89, 938, 757];
    // let sortarray = array.sort((big, small) => big - small);
    // console.log(sortarray);
    // let sortarray1 = array.sort((big, small) => small - big);
    // console.log(sortarray1);

    // let 
    