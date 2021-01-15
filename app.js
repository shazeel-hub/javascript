                                // Changing case question.1


// var str = "hello World!";
// var res = str.toUpperCase();
// document.write(res)




                              // Changing case question.2


// var str = "hello world " 
// var str2 = str.split(' ') ;
// var str3;
// var str6 = []
// for(var i = 0 ; i <  str2.length ; i++){
//      str3 = str2[i].slice(0,1).toUpperCase() +str2[i].slice(1).toLowerCase()
//      str6.push(str3)     
// }
// document.write(str6.join(' '))




                                // Strings: measuring length and extracting parts question 1

// var favMobile = prompt("Enter your mobile phone model");
// var lengthOfMobile = favMobile.length;
// document.write("My Favorite mobile phone is :" + " " + favMobile + "<br />");
// document.write("Length of String :" + " " + lengthOfMobile)


                                // Strings: measuring length and extracting parts question 2

// var input1 = prompt('write something')

// alert(input1.charAt(input1.length-1))




                                // Strings: finding segments.question 1


//  var helloWorld = "Pakistani";
//  var lastIndex = helloWorld.lastIndexOf("n");
//  document.write("String :" + " " + helloWorld + "<br />")
//  document.write("Last  index of  :" + " " + lastIndex)





                                // Strings: finding segments.question 2

// var userName = prompt('enter username')
// for(var i = 0; i<userName.length;i++ ){
//      if(userName[i] === '@' || userName[i] === ',' ||userName[i] === '!'){
//           alert('enter valid username')
//           break
//      }
// }


                                // Strings: finding segments.question 2


// var para = prompt('enter para')
// var para1 = para.toLowerCase()
// var a = 0
// // console.log(para.length)
// for(var i = 0 ; i < para1.length -1 ; i++){
//      if(para1.slice(i,i+3) === 'the'){
//           a = a + 1
//      }
// }
// alert('the is present ' + a + 'times')




                                // Strings: finding a character at a location. question 1

// var Pakistani = "Pakistani"
// var charAt = Pakistani.charAt(3)
// document.write("String :" + " " + Pakistani + "<br />")
// document.write("Character at index 3 :" + " " + charAt)




                                // Strings: replacing characters question 1

// var city = "Hyderabad";
// var replacement =" "
// for(var i=0 ; i < city.length; i++){
//         if(city.slice(i,i+5) === "Hyder"){
//                 replacement = "Islam" + city.slice(i+5)
//         }
// }
// document.write("City :" + " " + city + "<br />")
// document.write("After replacement :" + " " + replacement)


                               

                                // Strings: replacing characters.2

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageReplace = message.replace(/and/g,"&");
// document.write(messageReplace)


                                // Rounding numbers. question 1 part A


// var num =  9.4557778


                                // Rounding numbers. question 1 part B

// document.write(Math.round(num)) 



                                // Rounding numbers. question 1 part C


// document.write(Math.floor(num))

                                // Rounding numbers. question 1 part D

// document.write(Math.ceil(num))


                                // Rounding numbers. question 2 part A


// var num = "-2.678"




                                // Rounding numbers. question 2 part B


// document.write(Math.round(num))



                                // Rounding numbers. question 2 part C

// document.write(Math.floor(num))





                                // Rounding numbers. question 2 part D

// document.write(Math.ceil(num))




                                // Generating random numbers question 1


// var a= random;
// var random =Math.ceil(Math.random()*6);
// document.write(random)



                                // Generating random numbers question 2

// var headuser=prompt("Enter head username")
// var tailuser=prompt("Enter tail username")

// var toss=Math.random()*2;
// var floor=Math.floor(toss);
//  if(floor===1){
//      alert("head"+ " " + headuser + " " + "Win the toss")
//  }else{
//     alert("Tail"+ " " + tailuser +" " + "Win the toss")
// }


// Converting strings to integers and decimals


// var weight = prompt("What is the net weight in ounces?");
// var pounds = weight/16;
// var response = "That weight in pounds is " + pounds + ".";
// document.write(response)



                                // Converting strings to numbers, numbers to strings question 1



// var num = 472;
// document.write("Type of value is" + " " +(472)+" " + typeof(472) + "<br/>");
// var b=num.toString();
// document.write("Type of value is" + " " +(472)  + " " + typeof(b))








                                // Converting strings to numbers, numbers to strings question 2


// var numbers=35.36
// var a =numbers.toString()
// alert(a)
// var spli = a.split('')
// for(var i=0;i<spli.length-1;i++){
//     if(spli[i]==='.'){
//         spli.splice(i,1)
//     }
// }
// var joi = spli.join('')
// document.write(Number(joi))


// Controlling the length of decimals


// var total =66.66666
// var control =total.toFixed(2);
// document.write(control)



