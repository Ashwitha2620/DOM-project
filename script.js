const colors = ["green", "red","rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // console.log(document.body);

    // const randomNumber = 2;
    const randomNumber = getRandomNumber() ;
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
// just invoking getRandomNuber() function of randomNumber as a function name and making to get random 
// colors from our assigned array using math.random function(ie.which will not round the value like 1 or 2 or 3 go get
// the index number value from the array, so go get the random value as around value from the array use length whi
// starts from 1 and if you use math.floor(which makes the round value) & multiply of the math.random -> it will choose
// the random index number which gives random colors according to the array's elements)

// random numbers will be like (0.8862,0.578709,0.168...etc but will not get any round value like 1, 2, 3 ,
// but our array index starts from only 0, 1,2... nd not from 0.1 or 0.0 ), so if you multiply this point values
// with the length of the array...then it will give like, round values like 1.5666, 2.4763837,0.234677,3.587384
// where you will get randomly, but we want to match it with our index values of array as 0,1,2,3 randomly ,we use 
// math.floor() function which will take a value which is before the . and cancell the numbers after the point,
// where that particular numbers will match our index number.
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// const outlook = document.getElementsByClassName("body");
// outlook.setAttribute('style', border= "2 px solid blue", margin="50 px"); 
