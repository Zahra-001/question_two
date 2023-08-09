var fName = document.form1.fName;
var lName = document.form1.lName;
var eml = document.form1.eml;
var addr1 = document.form1.addr1;
var city = document.form1.city;
var cntry = document.form1.cntry;

var btn = document.getElementById('button');
btn.addEventListener('click', validate);

if(fName != "" && lName != "" && eml != "" && addr1 != "" && city != "" && cntry != ""){
    alert("!Congratulations "+fName+lName+" you are now signed up")
}

function validate()
{
    var err = document.getElementsByTagName("span");
    
    if(fName.value == "" && lName.value == "") // if it's empty
    {
        err[0].style.visibility = "Visible";
    }
    else
    {
        err[0].style.visibility = "hidden";
    }

    if(eml.value == "")
    {
        err[1].style.visibility = "visible";
    }
    else
    {
        err[1].style.visibility = "hidden";
    }

    if(addr1.value == "")
    {
        err[2].style.visibility = "visible";
    }
    else
    {
        err[2].style.visibility = "hidden";
    }

    if(city.value == "default")
    {
        err[3].style.visibility = "visible";
    }
    else
    {
        err[3].style.visibility = "hidden";
    }

    if(cntry.value == "default")
    {
        err[3].style.visibility = "visible";
    }
    else
    {
        err[3].style.visibility = "hidden";
    }

    alert("!Congratulations "+fName+lName+" you are now signed up")

}