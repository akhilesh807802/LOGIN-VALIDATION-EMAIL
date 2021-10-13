function validate()
{
    const a = document.myform.email.value;
    const b = document.myform.password.value;

    

    if(a.indexOf("@")<=0) 
    {
           document.getElementById("invalid").innerHTML="invalid '@' format";
           return false;
    }
    if(a.indexOf(".")<=0)
    {
           document.getElementById("invalid").innerHTML="invalid '.'  format";
           return false;
    }


    

     if (a == "demo@gmail.com" && b == "demo")
     {
         alert("login sucees")
         window.location ="welcome.html"

         return false;

     }
    
     else {
        alert('Please enter correct username or password!');
        return false;
    }   
    





}