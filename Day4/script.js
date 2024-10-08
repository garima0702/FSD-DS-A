// var x=12;
// let y=13;
// let y=13;
// function display()
// {
//     var v=14;
//     let y=15;
//     console.log("Hello",x,y);
// }
// display();
function validate(){
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    let p1=document.getElementById("result");
    
    if(username=="admin" && pass=="admin")
        {
            p1.innerText= "validated";
        }
    else
    {
        p1.innerText = "invalid data";
    }
}
