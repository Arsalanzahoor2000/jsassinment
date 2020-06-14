


//chap1

// //q1
alert('welcome to our website');

// //q2
 alert('Error!please enter a valid password');

// //q3
 alert('welcome to js land\nhappy coding');

// //q4
 alert('welcome to js land');



 //chap2
  
 //q1
  var username
 
  //q2
  var Myname="Arsalan zahoor"
  alert(Myname)
 
  //q3
  var message;
  message="hello world"
  alert(message)
 
  //q4
  name=prompt('Enter your name','your name here');
  age=+prompt('Enter your age','your age here');
  profession=prompt('Enter profession name','your profession here');
  alert(name)
  alert(age)
  alert(profession)
 
  //q5
 alert('pizza\npizz\npiz\npi\np')
 
 //q6
 var email='muhammadarsalanzahoor@gmail.com'
 alert('my email addrss is '+email)
 
 //q7
var book='A smarter way to learn JavaScript'
 alert('I am trying to learn from the book '+book)
 
 //q8
 document.write('i can write html content through js')
 
 //q9
  alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬' )






  //chap3
  //q1

var age =+prompt('enter your age','age here..');
alert('i am '+age+' years old')

//q3
var birthyear =+prompt('enter your birth year','put here..');
document.write('my birth year is '+birthyear+'<br/>')
document.write('data type of my declared variable is a number')

//q4
name=prompt('enter your name')
prod=prompt('enter product name')
quant=prompt('enter quantity')
document.write(name+' ordered '+  quant  +   prod +' on XYZ Clothing store')

//chap4
var abc,def,ghi;
document.write('A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________   )



//chap5
// //q1
var num1=+prompt('enter first number')
var num2=+prompt('enter sec number')
sum=num1+num2;
document.write('sum of '+num1+' and '+num2+ ' is '+sum)

// //q2
var num1=+prompt('enter first number')
var num2=+prompt('enter sec number')
sub=num1-num2;
document.write('differ of '+num1+' and '+num2+ ' is '+sub)


var num2=+prompt('enter sec number')
var num1=+prompt('enter first number')
mul=num1*num2;
document.write('prod. of '+num1+' and '+num2+ ' is '+mul)



var num1=+prompt('enter first number')
var num2=+prompt('enter sec number')
div=num1/num2;
document.write('div. of '+num1+' and '+num2+ ' is '+div)



var num1=+prompt('enter first number')
var num2=+prompt('enter sec number')
mod=num1%num2;
document.write('modulus of '+num1+' and '+num2+ ' is '+mod)

//q3
var num=+prompt('enter a number')
document.write('initial value:'+num+"<br/>")
num++;
document.write('Value after increment is: '+num+"<br/>");
num=num+7;
document.write('Value after addition is: '+num+"<br/>");
num--;
document.write('Value after decrement is: '+num+"<br/>");
document.write('the remainder is:'+num%3)

//q4
var tick=+prompt('ENter no of tickets');
document.write('total cost to buy '+tick+' tickets is '+(tick*600));

//q5
num=+prompt('enter a number');
document.write('table of '+num+"<br/");
for(var i=0 ; i<=10 ; i++)
{  
    document.write(num+'x'+i+'='+num*i+"<br/>")
}

//q6
var cel=+prompt('enter temp in celsius')
var fah=+prompt('enter temp in fahrenheit')
var tempf=(cel*9/5)+32
var tempc=(fah-32)*5/9
document.write(cel+'c is '+tempf+"<br/>")
document.write(fah+'f is '+tempc)  

//q7
var item1q=+prompt('quatity of item 1')
var item2q=+prompt('quatity of item 2')
var item1=650
var item2=100
var cost=item1*item1q+item2*item2q+100
document.write('Price of item 1 is '+item1+"<br/>")
document.write('quantity of item 1 is '+item1q+"<br/>")
document.write('Price of item 2 is '+item2+"<br/>")
document.write('quantity of item 2 is '+item2q+"<br/>")
document.write('shipping charges are 100'+"<br/>")
document.write('total cost of your order is'+cost)

//q7
var obtmarks=+prompt('enter obtained marks')
var tmarks=+prompt('enter total marks')
document.write('marks obtained:'+obtmarks+"<br/>")
document.write('total obtained:'+tmarks+"<br/>")
document.write('percentage='+(obtmarks/tmarks*100))

//q8
var dollar=+prompt('enter money in dollars')
var riyal=+prompt('enter money in riyal')
document.write('total money in pkr'+dollar*104.80+"<br/>")
document.write('total money in pkr'+riyal*28)

//q9
var num=+prompt('enter a num')
document.write('add 5:'+(num+5)+"<br/>"+'mult by 10:'+(num*10)+"<br/>"+'div by 2:'+(num/2))


//chap6-9///////////////////////////////////////////////////////////////////////////////////
//Q1

var a=+prompt('enter a number')
document.write('the value of a is:'+a+"<hr>")

a=++a;
document.write('the value of ++a is:'+a+"<br>")
document.write('now the value of a is:'+a+"<hr>")

a=a++;
document.write('the value of ++a is:'+a+"<br>")
document.write('now the value of a is:'+a+"<hr>")

a=--a;
document.write('the value of ++a is:'+a+"<br>")
document.write('now the value of a is:'+a+"<hr>")

a=a--;
document.write('the value of ++a is:'+a+"<br>")
document.write('now the value of a is:'+a+"<hr>")


//q2
var a=2
var b=1
document.write(--a+"<br>")
document.write(--a - --b+"<br>")
document.write(--a - --b + ++b+"<br>")
document.write('result is:'+--a - --b + ++b+b--+"<br>")

//q3

var name=prompt('enter your name')
alert('welcome '+name)


//q5


var num=+prompt('enter a number')

for(var i=1;i<=10;i++)
{
    document.write(num+'x'+i+'='+num*i+"<br>")
}

//q6


var math=+prompt('enter marks in math')
var eng=+prompt('enter marks in english')
var sci=+prompt('enter marks in science')
var tmark=100
var mathperc=math/tmark*100
var engperc=eng/tmark*100
var sciperc=sci/tmark*100

document.write('subject       total marks       obt marks       percentage'+"<br>")
document.write('math'+tmark+'         '+math+'         '+mathperc+"<br>")
document.write('english'+tmark+'         '+eng+'         '+engperc+"<br>")
document.write('science'+tmark+'         '+sci+'         '+sciperc+"<br>")
document.write('total'+tmark*3+'         '+(sci+eng+math)+'         '+((sci+eng+math)/(tmark*3)*100)+"<br>")




////////////////////////chap 9-11/////////////////////
//q1

var city=prompt('enter a city name')
if (city==='karachi'){
    alert('welcome to the city of lights')
}
else{
    alert('mummy daddy awam')
}


//q2

var gender=prompt('enter your gender')
if(gender==='male'){
    alert('godd morning sir')
}
else{
    alert('godd morning madam')
}

//q3

var color=prompt('enter signal color')
if(color==='red'){
    alert('must stop')
}
else if(color==='yellow'){
    alert('ready to move')
}
else if(color==='green'){
    alert('move now')
}


//q4


var fuel=+prompt('enter your fuel in litres')
if(fuel<0.25){
    alert('please refill your fuel tank')
}
else {
    alert('you are good to go')
}


//q5
a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


c

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

d

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

e
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }



    f
    if("car" < "cat"){
        alert("car is smaller than cat");
        }



//q6


 var math=+prompt('enter marks in math')
 var eng=+prompt('enter marks in english')
 var sci=+prompt('enter marks in science')
 var tmark=+prompt('enter total marks')
var percentage=(math+eng +sci)/tmark*100
 document.write('total marks:'+tmark+"<br>")
 document.write('marks obtained:'+(math+eng +sci)+"<br>")
 document.write('percentage:'+percentage+'%'+"<br>")



   if(percentage>=80){
   document.write('grade:A-one'+"<br>")
   document.write('Remarks:Excellent'+"<br>")
  }
  else if(percentage>=70 && percentage<80){
      document.write('grade:A'+"<br>")
      document.write('Remarks:good'+"<br>")
     } 
  else if(percentage>=60 && percentage<70){
      document.write('grade:B'+"<br>")
      document.write('Remarks:Parh lia kro'+"<br>")
     } 
  else if(percentage<60){
      document.write('grade:fail'+"<br>")
      document.write('Remarks:Sharam kr lo yaar'+"<br>")
     } 

//q7

var num=+prompt('enter a number')
if(num===4){
    document.write('Bingo!correct answer')
}
else if(num==5){
    document.write('close enough')
}
else(
    document.write('try again')
)


//q8

var num=+prompt('enter a number')
var rem=num%3
if (rem==0){
    document.write('this number is divisible by 3')
}
else{
    document.write('ths number is not divisible by 3')
}





//q9


var num=+prompt('enter a number')
 var rem=num%2
if (rem==0){
    document.write('this is an even number')
}
else{
    document.write('this is an odd number')
}

















//q10
var temp=+prompt('enter temp in celsius')
if(temp>=40){
    document.write('It is too hot outside.')
}
else if(temp>=30 && temp<40){
    document.write('The Weather today is Normal.')
}
if(temp>=20 && temp<30){
    document.write('Today’s Weather is cool.')
}
if(temp>=10 && temp<20){
    document.write('OMG! Today’s weather is so Cool')
}





//q11


var num1=+prompt('enter 1st number')
var num2=+prompt('enter 2nd number')
var sign=prompt('enter an operator i.e:+,-,*,/')
if(sign=='+'){
    document.write(num1+sign+num2+'='+(num1+num2))
}
else if(sign=='-'){
    document.write(num1+sign+num2+'='+(num1-num2))
}
if(sign=='*'){
    document.write(num1+sign+num2+'='+(num1*num2))
}
if(sign=='/'){
    document.write(num1+sign+num2+'='+(num1/num2))
}



///////////////////chap12-13

//q1


//q2

var num1=+prompt('enter 1st number')
var num2=+prompt('enter 2nd number')
if(num1>num2){
    document.write(num1+' is greater than '+num2)
}
else if(num1==num2){
    document.write('these numbers are equal')
}
else{
    document.write(num1+' is less than '+num2)
}


//q3

var num1=+prompt('enter 1st number')
if(num1>0){
    document.write(' the number is positive')
}
else if(num1==0){
    document.write('the number is zero')
}
else{
    document.write(' the number is negative ')
}


// q4
var letter=prompt('enter a letter')
if(letter=='a' ||letter=='e' ||letter=='i' ||letter=='o' ||letter=='u')
{
    document.write('this letter is a vowel')
}
else{
    document.write('this letter is not a  vowel')
}


//q5

var pass='arsalan123'
var password=prompt('enter a password')
if(password=='arsalan123'){
    alert('Correct! The password you entered matches the original password')
}
else if(password==prompt){
    alert('enter your pssword')
}
else{
    alert('incorrect password')
}

//q6

var greeting;
var hour = 13;
if (hour < 18) {
var greeting = "Good day";
alert(greeting)
}
else{
var greeting = "Good evening";
alert(greeting)

}


//q7

var time=+prompt('enter time in 24hrs format i.e:2300')
if (time>=0000  && time<1200){
    alert('good morning!')
}

else if(time>=1200  && time<1700){
    alert('good afternoon!')
}
else if(time>=1700  && time<2100){
    alert('good Evening!')
}
else if(time>=2100  && time<2359){
    alert('good Night!')
}








////////////////chap 14-16/////
//q7

var qual=['SSC','HSC','BCS','BS','BCOM','MS','M.pHIL','PhD']
document.write(qual)

//q8

 var nameArr=['arsalan','ibbad','ahmad']
 var marks=[320,230,480]
 var tmarks=500;
 for (var i=0;i<=2;i++)
 document.write('score of '+nameArr[i]+' is '+marks[i]+'.percentage is '+marks[i]/tmarks*100+'%'+"<br>")

//q9

 var colors=['red','green','blue']
 document.write(colors+"<br>")
 a
 var name1=prompt('enter a color name you want to add to beginning')
 colors.unshift(name1)
 document.write(colors+"<br>")
 b
 var name2=prompt('enter a color name you want to add to end')
 colors.push(name2)
 document.write(colors+"<br>")
c
var name3=prompt('enter a color name you want to add to beginning')
var name4=prompt('enter a color name you want to add to beginning')
colors.unshift(name3)
colors.unshift(name4)
document.write(colors+"<br>")
d
colors.shift()
document.write(colors+"<br>")
e
colors.pop()
document.write(colors+"<br>")
f
var name5=prompt('enter index at which you want to add a color name')
var name6=prompt('enter a color name you want to add to this index')
colors.splice(name5,0,name6)
document.write(colors+"<br>")
g
var name5=prompt('enter index at which you want to del a color name')
var name6=prompt('enter how many color you want to delete')
colors.splice(name5,name6)
document.write(colors+"<br>")


//q10
 var scoreArr=[];
 scoreArr[0]=+prompt('enter marks')
 scoreArr[1]=+prompt('enter marks')
 scoreArr[2]=+prompt('enter marks')
 scoreArr[3]=+prompt('enter marks')
 document.write(scoreArr+"<br>")
 scoreArr.sort()
 document.write(scoreArr)

//q11
var cityArr=["karachi","lahore","islmabad","quetta","peshawer"]
document.write('Cities List:'+"<br>")
document.write(cityArr+"<br>")
city1=cityArr.slice(2,4)
document.write('Selected cities List:'+"<br>")
document.write(city1)




//q12
var arr = ['This ', 'is ', 'my' , ' cat'];
document.write('Array'+"<br>")
document.write(arr+"<br>")
document.write('String'+"<br>")
document.write(arr[0]+arr[1]+arr[2]+arr[3])

//q13
var arr=[]
arr[0]=prompt('enter any name')
arr[1]=prompt('enter any name')
arr[2]=prompt('enter any name')
arr[3]=prompt('enter any name')
document.write(arr+"<br>"+"<br>")

document.write('Out:'+"<br>"+arr.shift()+"<br>")
document.write('Out:'+"<br>"+arr.shift()+"<br>")
document.write('Out:'+"<br>"+arr.shift()+"<br>")
document.write('Out:'+"<br>"+arr.shift()+"<br>")

//q14
var arr=[]
arr[0]=prompt('enter any name')
arr[1]=prompt('enter any name')
arr[2]=prompt('enter any name')
arr[3]=prompt('enter any name')
document.write(arr+"<br>"+"<br>")

document.write('Out:'+"<br>"+arr.pop()+"<br>")
document.write('Out:'+"<br>"+arr.pop()+"<br>")
document.write('Out:'+"<br>"+arr.pop()+"<br>")
document.write('Out:'+"<br>"+arr.pop()+"<br>")


//q15
var manuf=['Apple','Samsung', 'Motorola', 'Nokia', 'Sony','Haier']
document.write(manuf[0]+"<br>")
document.write(manuf[1]+"<br>")
document.write(manuf[2]+"<br>")
document.write(manuf[3]+"<br>")
document.write(manuf[4]+"<br>")
document.write(manuf[5])

////////////////////chap 17-20/////






















