function validated(){
    let username = document.getElementById("um").value;
    let pass = document.getElementById("pass").value;
    
    
    if( username.length>10 && pass.length>10)
        {
            return true;
        }
    return false;
  
    
}