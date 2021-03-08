var questions=[
    {
title:"1. A complete graph can have",
options:["n2 spanning trees","nn - 2 spanning trees","nn - 3 spanning trees","nn - 4 spanning trees"],
correct: "nn - 2 spanning trees",
score: 1
    },
        {
title:"2. What is the full form of CSS",
options:["Cascading Styles Sheets","Cascading Sheets styles","Color Styles Sheets","Cascading Styles Set"],
correct: "Cascading Styles Sheets",
score: 1
    },
      {
title:"3. Which of the following is a valid type of function javascript supports?",
options:["named function","anonymous function","Both of the above","None of the above"],
correct: "Both of the above",
score: 1
    },
          {
title:"4. Which built-in method returns the calling string value converted to lower case?",
options:["toLowerCase()","toLower()","changeCase(case)","None of the above"],
correct: "toLowerCase()",
score: 1
    },
   {
title:"5. Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
options:["slice()","split()","substr()","search()"],
correct: "substr()",
score: 1
    },
   {
title:"6. Which type of JavaScript language is",
options:["Object-Oriented","Object-Based","Assembly-language","High-level"],
correct: "Object-Based",
score: 1
    },
       {
title:"7. The function and var are known as",
options:["Keywords","Data types","Declaration statements","Prototypes"],
correct: "Declaration statements",
score: 1
    },
     {
title:"8. Which one of the following is the correct way for calling the JavaScript code?</h2>",
options:["Preprocessor","Triggering Event","RMI","Function/Method"],
correct: "Function/Method",
score: 1
    },
         {
title:"9. Which of the following number object function returns the value of the number?",
options:["toString()","valueOf()","toLocaleString()","toPrecision()"],
correct: "valueOf()",
score: 1
    },
             {
title:"10. In JavaScript the x===y statement implies that",
options:["Both x and y are equal in value, type and reference address as well.","Both are x and y are equal in value only.","Both are equal in the value and data type.","Both are not same at all."],
correct: "Both are equal in the value and data type.",
score: 1
}];
var score=0;
var f=0;
var main=document.getElementById("m");
    var res=document.getElementById("resulting");
    var quiz=document.getElementById("quiz");
var q=0;
function st()
{
    var sta=document.getElementById("start");
document.body.removeChild(sta);
main.style.display="block";
start();
}
var d=2;

function start()
{
    if (q<questions.length)
    {
    main.innerHTML="";
var element=document.createElement("div");
main.appendChild(element);
var h2=document.createElement("h2");
h2.innerHTML=questions[q].title;
element.appendChild(h2);
var array=questions[q].options;
var forms=document.createElement("form");
for(var j=0;j<array.length;j++)
{
var input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("name",'q');
input.setAttribute("value",array[j]);
text=array[j];
forms.appendChild(input);
forms.append(text);
var br=document.createElement("br");
forms.appendChild(br);
}
element.appendChild(forms);
var btn=document.createElement("button");
btn.innerHTML="Submit";
    var sha=document.createElement("div");
    sha.setAttribute("id","shades");
    element.appendChild(sha);
element.appendChild(btn);
var next=document.createElement("button");
next.innerHTML="Next >";
next.setAttribute("class","greencolor");
btn.setAttribute("class","labelcolor");
btn.addEventListener("click",show);
function show()
{
    var notclicked=0;
    var arr=document.querySelector("form").elements;
    for(var k=0;k<arr.length;k++)
    {
        if (arr[k].checked)
        {
if (arr[k].value==questions[f].correct)
{
    var h4=document.createElement("h2");
    h4.innerHTML="Correct";
    h4.setAttribute("id","correct");
sha.appendChild(h4);
element.replaceChild(next,btn);
score=score+questions[q].score;
for(var dis=0;dis<arr.length;dis++)
{
arr[dis].disabled= true;
}

break;
}
else
{
    var h4=document.createElement("h2");
    h4.innerHTML="Incorrect";
    h4.setAttribute("id","incorrect");
    sha.appendChild(h4);
    element.replaceChild(next,btn);
    for(var dis=0;dis<arr.length;dis++)
{
arr[dis].disabled= true;
}

    break;
}

}
else
{
notclicked++;
}

    }
    if (notclicked==4)
    {
    alert("Please select a option");
    }
}


next.addEventListener("click",sta);
    }
    else
    {
res.innerHTML="";
        var quiz=document.getElementById("quiz");
        quiz.style.display="none";
       main.innerHTML="";
   var sc= document.createElement("h1");
sc.innerHTML="Score: "+score;
        res.appendChild(sc);
        main.appendChild(res);
    var ak=document.createElement("h1");
    ak.innerHTML="Answer Key";
        main.appendChild(ak);
        var ul=document.createElement("ul");
main.appendChild(ul);
       questions.forEach(p);
       function p(value,index)
       {
       var li= document.createElement("li");
       li.innerHTML=questions[index].title+" - "+questions[index].correct;
      ul.append(li);
       }
      var restart=document.createElement("button");
      restart.innerHTML="Restart Test";
      restart.setAttribute("id","restart");
main.appendChild(restart);
      restart.addEventListener("click",resu);
    
    }
      function resu()
{
quiz.style.display="block";
q=0;
score=0;
f=0;
start();
}
function sta()
{
q++;
f++;
start();
}
}

