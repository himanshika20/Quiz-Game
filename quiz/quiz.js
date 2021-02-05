var questions = [
    {
        question:"A complete graph can have",
            a:"nn-2 spanning trees",
            b:"nn-3 spanning trees",
            c:"nn-4 spanning trees",
            d:"nn-5 spanning trees",
        correct:"a",
        correct1:"nn-2 spanning trees"
    },
    {
          question:"What is full form of CSS",
            a:"country side show",
            b:"country show side",
            c:"Cascading Style side",
            d:"None of the above",
        correct:"d",
        correct1:"None of the above"
    },
    {
         question:"How to include javascript in HTML document",
            a:"head",
            b:"css",
            c:"script",
            d:"None of the above",
        correct:"c",
        correct1:"script"
    },
    {
         question:"How to declare variable in javascript",
            a:"var",
            b:"const",
            c:"let",
            d:"All of the above",
        correct:"d",
        correct1:"All of the above"
    },
    {
     question:"What => means in javascript",
            a:"function",
            b:"calling function",
            c:"Arrow function",
            d:"None of the above",
          correct:"c",
          correct1:"Arrow function"
    },
    {
         question:"Which of the following is not a javascript framework",
            a:"Django",
            b:"DOM",
            c:"Ndejs",
            d:"Jquery",
        correct:"a",
        correct1:"Django"
    },
    {
         question:"How do you define objects in js",
            a:"[]",
            b:"{}",
            c:"()",
            d:"<>",
        correct:"b",
        correct1:"{}"
    },
    {
         question:"Which of these is not a valid js version",
            a:"ES5",
            b:"ES6",
            c:"EX19",
            d:"ES7",
        correct:"c",
        correct1:"EX19"
    },
    {
         question:"What is the input of '2'+2",
            a:"22",
            b:"4",
            c:"222",
            d:"None of the above",
        correct:"a",
        correct1:"22"
    },
    {
         question:"what is the output of '2'-1",
            a:"1",
            b:"21",
            c:"3",
            d:"None of the above",
        correct:"c",
        correct1:"3"
    },
    {
         question:"How to check if a value is NaN in javascript",
            a:"typeof(val)",
            b:"isNaN(val)",
            c:"val",
            d:"None of the above",
        correct:"b",
        correct1:"isNaN(val)"
    }
]; 
var starting=0;
var ending=questions.length;
var count=0;
function abc()
{
document.getElementById("start").style.display= "none";
builtquiz();
document.getElementById("i4").style.display= "block";
}
function builtquiz()
{
    var q=questions[starting];
document.getElementById("question1").innerHTML=q.question;
document.getElementById("answer1").innerHTML="<input type='radio' name='answers' value='a'>"+" "+q.a;
document.getElementById("answer2").innerHTML="<input type='radio' name='answers' value='b'>"+" "+q.b;
document.getElementById("answer3").innerHTML="<input type='radio' name='answers' value='c'>"+" "+q.c;
document.getElementById("answer4").innerHTML="<input type='radio' name='answers' value='d'>"+" "+q.d;
}
function abc1()
{ 
  document.getElementById("submit").style.display="none";  
    document.getElementById("next").style.display="block";
            document.getElementById("correct1").style.display="block";
    var h;
    var x=document.getElementsByName('answers');
    for(k=0;k<x.length;k++)
    {
        if(x[k].checked)
        {
            h=x[k].value;
            break;
        }
    }
    if(h==questions[starting].correct)
    {
        correctbutton();
    }
    else{
        incorrectbutton();
    }
}
function correctbutton()
{
    count++;
    document.getElementById("correct1").innerHTML="<button type='button' id='btn-correct' disabled>"+"correct"+"</button>";
}
function incorrectbutton()
{
    document.getElementById("correct1").innerHTML="<button type='button' id='btn-incorrect' disabled>"+"Incorrect"+"</button>";
}
function abc3()
{
            starting++;
    if(starting<ending)
    {
        builtquiz();
        document.getElementById("correct1").style.display="none";
        document.getElementById("submit").style.display="block";
        document.getElementById("next").style.display="none";
    }
    if(starting>=ending)
    {
        for(j=0;j<questions.length;j++)
        {
            var node=document.createElement("li");
            var node1=questions[j].question+" - ";
            var text=document.createTextNode(node1);
            node.appendChild(text);
            var span1=document.createElement("span");
            span1.classList.add('badge');
            span1.classList.add('badge-success');
            span1.innerHTML=questions[j].correct1;
            node.appendChild(span1);
            document.getElementById("j4").appendChild(node);
        }
        document.getElementById("i0").style.display="none";
        document.getElementById("j1").style.display="block";
        document.getElementById("j2").innerHTML="Score : "+count;
        
    }
}
function abc4()
{
    location.reload();
}