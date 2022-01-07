let b1=document.getElementById("btn1");
b1.addEventListener("click",function()
{
    let r1=document.getElementById("row1").value;
    let r2=document.getElementById("row2").value;
    let r3=document.getElementById("row3").value;
    let r4=document.getElementById("row4").value;
    let r5=document.getElementById("row5");
    let a= /^[a-zA-Z0-9]+$/;
    if(r1.match(a))
    {
        document.getElementById("ro1").innerHTML="";
        console.log("Hi")
    }
    else{
        document.getElementById("ro1").innerHTML="please enter valid username";
        console.log("hello");
    }
    if(r3.match(/[a-z]/g) && r3.match(/[A-Z]/g) && r3.match(/[0-9]/g) && r3.match(/[^a-zA-Z/d]/g) && r3.length<=8)
    {
        document.getElementById("ro3").innerHTML="";
    }
    else 
    {
        document.getElementById("ro3").innerHTML="please enetr valid password";
    }
    if(r3===r4)
    {
        document.getElementById("ro4").innerHTML="";
    }
    else{
        document.getElementById("ro4").innerHTML="password does not match";
    }
    if(/@gmail\.com$/.test(r2))
    {
        document.getElementById("ro2").innerHTML="";
    }
    else{
        document.getElementById("ro2").innerHTML="please enter valid mail";
    }
    if(r5.checked)
    {
        document.getElementById("ro5").innerHTML="";
    }
    else{
        document.getElementById("ro5").innerHTML="Tick the mark";
    }
})

