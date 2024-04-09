//user and id match

var frm = document.getElementById("fem");
frm.onsubmit= function (){


    var user = [];
    user[0]= document.getElementById("one");
    user[1]= document.getElementById("two");



//if and else frist
    if(user[0].value == "" && user[1].value == ""){

        user[0].style.border="1px solid red";
        user[1].style.border="1px solid red";
        window.alert("Empty Feild");
        return false;
    }

    if(user[0].value == ""){

        user[0].style.border="1px solid red";
        window.alert("Empty Feild 1");
        return false;
    }

    if(user[1].value == ""){

        user[1].style.border="1px solid red";
        window.alert("Empty Feild 2");
        return false;
    }


    // if and else condtion third
    if(user[0].value != "akmkfk" && user[1].value != "232026"){


        window.alert("All Feild Invalid");
        return false;
    }





    //if and else second
    if(user[0].value == "akmkfk"){

        if(user[1].value == "232026"){
        
            
            var a = document.getElementById("box");
            a.style.display="none";
            a.setAttribute("class", "animate__animated animate__flipOutX animate_repeat1");

            var b = document.getElementById("sucess_bx");
            b.style.display="block";
            b.setAttribute("class", "animate__animated animate__flipInX animate_repeat1");


            return false;
            
        }

        else{

            window.alert("invald Password");
            return false;
        }

    }
    else{

        window.alert("User Not Found");
        return false;
    }

}



//oninput condtion format one
var a = document.getElementById("one");
a.oninput= function(){

    var clr = document.getElementById("one");
    clr.style.border="1px solid grey";
}


//oninput condtion format two
var b = document.getElementById("two");
b.oninput= function(){

    var colr = document.getElementById("two");
    colr.style.border="1px solid grey";
}



//close format systm in code

var clse = document.getElementById("crs");
clse.onclick= function(){

    var opn = document.getElementById("box");
    opn.style.display="none";
}



//password show btn code

var ey = document.getElementById("ceye");
ey.onclick= function(){

    var pass = document.getElementById("two");
    var cyt = document.getElementById("eye");

    //if condtion
    if(ey.style.display="none"){

        pass.type="text";
        cyt.style.display="block";
    }
}


//password hide btn code

var hid = document.getElementById("eye");
hid.onclick= function(){

    var pass = document.getElementById("two");
    var hdn = document.getElementById("ceye");

    //if condtion

    if(hid.style.display="none"){

        pass.type="password";
        hdn.style.display="block";

    }
}




//login success code format

var clk  = document.getElementById("clk");

clk.onclick= function(){

    window.location="https://zishanrayeen.github.io/Feastly.com/";
}


var ones = document.getElementById("ones");
ones.onclick=function(){

    document.write("Username : akmkfk <br> Password : 232026");
}


var twos = document.getElementById("twos");

twos.onclick= function(){

        window.location="https://github.com/zishanrayeen";
}


var three = document.getElementById("three");

three.onclick= function(){

    window.location="https://www.linkedin.com/in/zishan-rayeen-691715243";
}

